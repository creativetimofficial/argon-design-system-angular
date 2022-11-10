import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { Reset } from "src/app/services/interface";
import { PasswordStrengthValidator } from "./password-strength.validators";
import { Router } from "@angular/router";

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.component.html",
  styleUrls: ["./reset-password.component.css"],
})
export class ResetPasswordComponent implements OnInit {
  fieldTextType: boolean;
  resetForm: FormGroup;

  public loginData: Reset = {
    password: "",
    confpassword: "",
  };

  constructor(formBuilder: FormBuilder, private router: Router) {
    this.resetForm = formBuilder.group({
      password: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          PasswordStrengthValidator,
        ]),
      ],
      confpassword: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          PasswordStrengthValidator,
        ]),
      ],
    });
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
  resetPassword() {
    this.markFormTouched(this.resetForm);

    if (this.resetForm.invalid) {
      alert("Please enter valid password");
    } else {
      this.router.navigateByUrl("/signin");
    }
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  ngOnInit(): void {}
}
