import { Component, OnInit, OnDestroy } from "@angular/core";

import { Validators, FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { NotificationsService } from "src/app/services/notifications.service";
import { ToolConstService } from "src/app/services/tool-const.service";
import { PasswordStrengthValidator } from "./password-strength.validators";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit, OnDestroy {
  showPassword: boolean;
  pattern = "https?://.+";
  register: FormGroup;
  isDoctor: boolean = false;
  test: Date = new Date();
  role = "Patient";

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthService,
    private notificationService: NotificationsService,
    private toolConstService: ToolConstService
  ) {
    this.register = this.formBuilder.group({
      fullName: ["", [Validators.required, Validators.minLength(3)]],
      // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
      email: [
        null,
        [
          Validators.required,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"),
        ],
      ],
      // We can use more than one validator per field. If we want to use more than one validator we have to wrap our array of validators with a Validators.compose function. Here we are using a required, minimum length and maximum length validator.
      mobileNumber: [
        "",
        [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")],
      ],
      password: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          PasswordStrengthValidator,
        ]),
      ],
    });
  }

  get m() {
    //console.log("controls",this.register.controls);
    return this.register.controls;
  }

  showHidePassword() {
    this.showPassword = !this.showPassword;
  }

  checkDoctorPatient() {
    this.isDoctor = !this.isDoctor;
    if (this.isDoctor) {
      this.role = "Doctor";
    } else {
      this.role = "Patient";
    }
  }
  ngOnInit() {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("register-page");
    body.classList.add("off-canvas-sidebar");
  }
  ngOnDestroy() {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("register-page");
    body.classList.remove("off-canvas-sidebar");
  }
  goSignup() {
    if (this.register.valid) {
      console.log("email", this.register.value.email);
      console.log("fullName", this.register.value.fullName);
      console.log("password", this.register.value.password);
      console.log("mobileNumber", this.register.value.mobileNumber);
      console.log("Role", this.role);

      const body = {
        userName: this.register.value.fullName,
        emailId: this.register.value.email,
        password: this.register.value.password,
        role: this.role,
      };
      console.log("body", body);
      // this.authenticationService.signup(body).then((response) => {
      //   if (response === "true") {
      //     this.notificationService.showNotification(
      //       this.toolConstService.getSuccessMessage().userCreated,
      //       "success"
      //     );
      //   } else {
      //     this.notificationService.showNotification(
      //       this.toolConstService.getErrorMessages().userExist,
      //       "danger"
      //     );
      //   }
      // });
    }
  }
}
