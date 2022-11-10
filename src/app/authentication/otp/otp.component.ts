import { Component, ElementRef, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Otp } from "src/app/services/interface";

@Component({
  selector: "app-otp",
  templateUrl: "./otp.component.html",
  styleUrls: ["./otp.component.css"],
})
export class OtpComponent implements OnInit {
  private toggleButton: any;
  eValid: boolean = false;
  fieldText: any;
  loading = false;


  public loginData: Otp = {
    otp: "",
  };

  constructor(
    private element: ElementRef,
    private router: Router,

  ) {}

  ngOnInit(): void {
    var navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName("navbar-toggle")[0];
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("login-page");
    body.classList.add("off-canvas-sidebar");
    const card = document.getElementsByClassName("card")[0];
    setTimeout(function () {
      // after 1000 ms we add the class animated to the login/register card
      card.classList.remove("card-hidden");
    }, 700);
  }

  submitOtp() {
    this.router.navigateByUrl('/reset')

  }
}
