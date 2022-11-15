import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing";

import { AppComponent } from "./app.component";
import { LandingComponent } from "./landing/landing.component";
import { ProfileComponent } from "./profile/profile.component";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { FooterComponent } from "./shared/footer/footer.component";

import { MatNativeDateModule } from "@angular/material/core";

import { HomeModule } from "./home/home.module";
import { LoginComponent } from "./login/login.component";
import { AuthenticationModule } from "./authentication/authentication.module";
import { ToolConstService } from "./services/tool-const.service";
import { NotificationsService } from "./services/notifications.service";
import { SelfcheckComponent } from "./selfcheck/selfcheck.component";
import { DoctorsComponent } from './doctors/doctors.component';
import { PhysiciansComponent } from './physicians/physicians.component';
import { GynaecologistComponent } from './gynaecologist/gynaecologist.component';
import { PediatricianComponent } from './pediatrician/pediatrician.component';
import { OrthopedicianComponent } from './orthopedician/orthopedician.component';
import { EyespecialistComponent } from './eyespecialist/eyespecialist.component';
import { DentistComponent } from './dentist/dentist.component';
import { MigrainetreatmentdocsComponent } from './migrainetreatmentdocs/migrainetreatmentdocs.component';
import { DiabetestreatmentdocsComponent } from './diabetestreatmentdocs/diabetestreatmentdocs.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SelfcheckComponent,
    DoctorsComponent,
    PhysiciansComponent,
    GynaecologistComponent,
    PediatricianComponent,
    OrthopedicianComponent,
    EyespecialistComponent,
    DentistComponent,
    MigrainetreatmentdocsComponent,
    DiabetestreatmentdocsComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,

    RouterModule,
    AppRoutingModule,
    HomeModule,
    AuthenticationModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [NotificationsService, ToolConstService, MatNativeDateModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
