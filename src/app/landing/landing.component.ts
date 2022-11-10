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

  ngOnInit() {}

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
}
