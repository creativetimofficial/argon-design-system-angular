import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { NotificationsService } from "src/app/services/notifications.service";
import { ToolConstService } from "src/app/services/tool-const.service";
import { PasswordStrengthValidator } from "../signup/password-strength.validators";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
})
export class SigninComponent implements OnInit {
  login: FormGroup;
  showPassword: boolean;
  error = "";

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authenticationService: AuthService,
    private notificationService: NotificationsService,
    private toolConstService: ToolConstService
  ) {
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

  ngOnInit(): void {}

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

  showHidePassword() {
    this.showPassword = !this.showPassword;
  }
}
