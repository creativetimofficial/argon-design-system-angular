import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { LandingComponent } from "./landing/landing.component";
import { LoginComponent } from "./login/login.component";
import { SelfcheckComponent } from "./selfcheck/selfcheck.component";
import { DoctorsComponent } from "./doctors/doctors.component";
import { PhysiciansComponent } from './physicians/physicians.component';
import { GynaecologistComponent } from "./gynaecologist/gynaecologist.component";
import { PediatricianComponent } from "./pediatrician/pediatrician.component";
import { DentistComponent } from "./dentist/dentist.component";
import { EyespecialistComponent } from "./eyespecialist/eyespecialist.component";
import { OrthopedicianComponent } from "./orthopedician/orthopedician.component";
import { MigrainetreatmentdocsComponent } from "./migrainetreatmentdocs/migrainetreatmentdocs.component";
import { DiabetestreatmentdocsComponent } from "./diabetestreatmentdocs/diabetestreatmentdocs.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "user-profile", component: ProfileComponent },
  // { path: "register", component: SignupComponent },
  { path: "landing", component: LandingComponent },
  { path: "doctors", component: DoctorsComponent },
  // { path: "login", component: LoginComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "selfcheck", component: SelfcheckComponent },
  { path: "physicians", component: PhysiciansComponent },
  { path: "gynaecologist", component: GynaecologistComponent },
  { path: "pediatrician", component: PediatricianComponent },
  { path: "ortho", component: OrthopedicianComponent },
  { path: "eyespecialist", component: EyespecialistComponent },
  { path: "dentist", component: DentistComponent },
  
  {
    path: "migraine-treatment-doctors",
    component: MigrainetreatmentdocsComponent,
  },
  {
    path: "diabetes-treatment-doctors",
    component: DiabetestreatmentdocsComponent,
  },
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: [],
})
export class AppRoutingModule {}
