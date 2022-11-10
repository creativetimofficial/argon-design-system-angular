import { Component, OnInit, ElementRef, OnDestroy } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
} from "@angular/forms";

import { AuthenticationService } from "../../common/services/authentication.service";
import { Router } from "@angular/router";
import { NotificationsService } from "../../common/services/notifications.service";
import { ToolConstService } from "../../common/services/tool-const.service";
import { PasswordStrengthValidator } from "../signup/password-strength.validators";
import { AuthGuardsService } from "src/app/common/services/auth-guards.service";

declare var $: any;
@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
})
export class SigninComponent implements OnInit {
  login: FormGroup;
  test: Date = new Date();
  private toggleButton: any;
  private sidebarVisible: boolean;
  private nativeElement: Node;
  showPassword: boolean;
  loading = false;

  error = "";
  constructor(
    private element: ElementRef,
    private fb: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private notificationService: NotificationsService,
    private toolConstService: ToolConstService,
    private authService: AuthGuardsService
  ) {
    this.nativeElement = element.nativeElement;
    this.sidebarVisible = false;
    this.login = this.fb.group({
      email: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(
            /^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/
          ),
        ]),
      ],
      password: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          PasswordStrengthValidator,
        ]),
      ],
    });
  }
  submitForm() {
    console.log("hello");
    // for (let v in this.login_form.controls) {
    //   this.login_form.controls[v].markAsTouched();
    // }
    this.markFormTouched(this.login);
    if (this.login.valid) {
      var username = this.login.value.email;
      var password = this.login.value.password;
      // You will get form value if your form is valid
      var formValues = this.login.getRawValue;
      console.log(this.login);
      this.authenticationService
        .login(username, password)
        .subscribe((result) => {
          var currentUser = JSON.parse(
            JSON.stringify(localStorage.getItem("currentUser"))
          );
          var role = JSON.parse(currentUser)["role"];
          this.authService.getCurrentUser(role);

          if (result === true && role === "Doctor") {
          } else if (
            result === true &&
            (role === "Doctor" || role === "Intern" || role === "Nurse")
          ) {
            this.router.navigate(["/doctorsDashboard"], {
              replaceUrl: true,
            });
          } else {
            this.notificationService.showNotification(
              this.toolConstService.getErrorMessages().pleaseEnterValidData +
                " for " /* + this.attributes[index].name */,
              "danger"
            );
            this.error = "Username or password is incorrect";
            this.loading = false;
          }
        });
    } else {
      //this.login.controls["terms"].setValue(false);
    }
  }

  markFormTouched(group: FormGroup | FormArray) {
    Object.keys(group.controls).forEach((key: string) => {
      const control = group.controls[key];
      if (control instanceof FormGroup || control instanceof FormArray) {
        control.markAsTouched();
        this.markFormTouched(control);
      } else {
        control.markAsTouched();
      }
    });
  }

  ngOnInit() {
    var navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName("navbar-toggle")[0];
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("login-page");
    body.classList.add("off-canvas-sidebar");
    const card = document.getElementsByClassName("card")[0];
    setTimeout(function () {
      // after 1000 ms we add the class animated to the login/register card
      card.classList.remove("card-hidden");
    }, 700);
  }
  get f() {
    return this.login.controls;
  }
  sidebarToggle() {
    var toggleButton = this.toggleButton;
    var body = document.getElementsByTagName("body")[0];
    var sidebar = document.getElementsByClassName("navbar-collapse")[0];
    if (this.sidebarVisible == false) {
      setTimeout(function () {
        toggleButton.classList.add("toggled");
      }, 500);
      body.classList.add("nav-open");
      this.sidebarVisible = true;
    } else {
      this.toggleButton.classList.remove("toggled");
      this.sidebarVisible = false;
      body.classList.remove("nav-open");
    }
  }
  ngOnDestroy() {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("login-page");
    body.classList.remove("off-canvas-sidebar");
  }
  showHidePassword() {
    this.showPassword = !this.showPassword;
  }
}
