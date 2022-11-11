import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"],
})
export class LandingComponent implements OnInit {
  @ViewChild("widgetsContent") widgetsContent: ElementRef;
  @ViewChild("widgetsSymptoms") widgetsSymptoms: ElementRef;
  @ViewChild("widgetsDiagnosis") widgetsDiagnosis: ElementRef;

  specialitiesImgs = [
    { img: './assets/img/hospital/physician.svg', title: 'Physician' },
    { img: './assets/img/hospital/gynaecologist.svg', title: 'Gynaecologist'},
    { img: './assets/img/hospital/pediatrician.svg', title: 'Pediatrician'},
    { img: './assets/img/hospital/orthopedician.svg', title: 'Orthopedician'},
    { img: './assets/img/hospital/eye-specialist.svg', title: 'Eye Specialist'},
    { img: './assets/img/hospital/physiotherapist.svg', title: 'physiotherapist'},
    { img: './assets/img/hospital/dentist.svg', title: 'Dentist'},
    { img: './assets/img/hospital/more.svg', title: 'View all'},
  ];

  diagnosisImgs = [
    { img: './assets/img/hospital/self-check-Migraine.png', title: 'Migraine' },
    { img: './assets/img/hospital/selfcheck-Diabetes.png', title: 'Diabetes'},
    { img: './assets/img/hospital/selfcheck-Thyroid.png', title: 'Thyroid'},
    { img: './assets/img/hospital/selfcheck-Heart-Health.png', title: 'Heart Health'},
    { img: './assets/img/hospital/selfcheck-COVID.png', title: 'COVID-19'},
  ];

  focus: any;
  focus1: any;

  constructor() {}

  scrollLeft() {
    this.widgetsContent.nativeElement.scrollLeft -= 230;
  }

  scrollRight() {
    this.widgetsContent.nativeElement.scrollLeft += 230;
  }
  scrollLeftSymp() {
    this.widgetsSymptoms.nativeElement.scrollLeft -= 220;
  }

  scrollRightSymp() {
    this.widgetsSymptoms.nativeElement.scrollLeft += 220;
  }

  scrollLeftDiagno() {
    this.widgetsDiagnosis.nativeElement.scrollLeft -= 220;
  }

  scrollRightDiagno() {
    this.widgetsDiagnosis.nativeElement.scrollLeft += 220;
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
