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

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    AuthenticationModule,
  ],
  providers: [NotificationsService, ToolConstService, MatNativeDateModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
