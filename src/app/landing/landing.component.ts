import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"],
})
export class LandingComponent implements OnInit {
  @ViewChild("widgetsContent") widgetsContent: ElementRef;
  @ViewChild("widgetsSymptoms") widgetsSymptoms: ElementRef;

  focus: any;
  focus1: any;

  constructor() {}

  scrollLeft() {
    this.widgetsContent.nativeElement.scrollLeft -= 220;
  }

  scrollRight() {
    this.widgetsContent.nativeElement.scrollLeft += 220;
  }
  scrollLeftSymp() {
    this.widgetsSymptoms.nativeElement.scrollLeft -= 220;
  }

  scrollRightSymp() {
    this.widgetsSymptoms.nativeElement.scrollLeft += 220;
  }

  ngOnInit() {
    for (var i = 0; i < this.bubblyButtons.length; i++) {
      this.bubblyButtons[i].addEventListener(
        "click",
        this.animateButton,
        false
      );
    }
  }

  animateButton(e) {
    e.preventDefault;
    //reset animation
    e.target.classList.remove("animate");

    e.target.classList.add("animate");
    setTimeout(function () {
      e.target.classList.remove("animate");
    }, 700);
  }

  bubblyButtons = document.getElementsByClassName("button");
}
