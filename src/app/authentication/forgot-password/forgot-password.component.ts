import { Component, OnInit } from "@angular/core";
import { Forgot } from "src/app/services/interface";
import { NgModule } from "@angular/core";
import { Router } from "@angular/router";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.css"],
})
export class ForgotPasswordComponent implements OnInit {
  eValid: boolean = false;
  fieldText: any;
  public emailForm: FormGroup;
  public loginData: Forgot = {
    username: "",
  };

  constructor(private router: Router, private fb: FormBuilder) {
    this.emailForm = this.fb.group({
      email: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(
            /^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/
          ),
        ]),
      ],
    });
  }

  submitForm() {
    console.log("hello");
    // for (let v in this.login_form.controls) {
    //   this.login_form.controls[v].markAsTouched();
    // }
    this.markFormTouched(this.emailForm);
    if (this.emailForm.valid) {
      // You will get form value if your form is valid
      var formValues = this.emailForm.getRawValue;
      console.log(this.emailForm);
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

  passwordReset() {
    this.markFormTouched(this.emailForm);

    if (this.eValid === true) {
      this.router.navigateByUrl("/otp");
    }
  }

  ValidateEmail(evt) {
    if (
      /^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/.test(
        evt.target.value
      )
    ) {
      this.eValid = true;
      return true;
    }
    this.eValid = false;
    return false;
  }

  ngOnInit(): void {}
}
