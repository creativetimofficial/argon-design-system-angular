import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmailverifyComponent } from "./emailverify/emailverify.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { OtpComponent } from "./otp/otp.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";

const routes: Routes = [
  { path: "signin", component: SigninComponent },
  { path: "signup", component: SignupComponent },
  { path: "forgot", component: ForgotPasswordComponent },
  { path: "reset", component: ResetPasswordComponent },
  { path: "otp", component: OtpComponent },
  { path: "verifyemail", component: EmailverifyComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
