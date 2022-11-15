import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { LandingComponent } from "./landing/landing.component";
import { LoginComponent } from "./login/login.component";
import { SelfcheckComponent } from "./selfcheck/selfcheck.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "user-profile", component: ProfileComponent },
  // { path: "register", component: SignupComponent },
  { path: "landing", component: LandingComponent },
  // { path: "login", component: LoginComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "selfcheck", component: SelfcheckComponent },
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: [],
})
export class AppRoutingModule {}
