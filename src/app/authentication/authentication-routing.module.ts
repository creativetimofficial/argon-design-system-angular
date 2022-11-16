import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { SymptomsComponent } from "./symptoms/symptoms.component";

const routes: Routes = [
  { path: "signin", component: SigninComponent },
  { path: "signup", component: SignupComponent },
  { path: "forgot", component: ForgotPasswordComponent },
  { path: "reset", component: ResetPasswordComponent },
  { path: "symptoms", component: SymptomsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
