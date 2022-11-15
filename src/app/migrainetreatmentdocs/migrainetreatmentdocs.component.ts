import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-migrainetreatmentdocs",
  templateUrl: "./migrainetreatmentdocs.component.html",
  styleUrls: ["./migrainetreatmentdocs.component.scss"],
})
export class MigrainetreatmentdocsComponent implements OnInit {
  constructor() {}
  migrainedocInfo = [
    {
      img: "./assets/img/hospital/doctor1.jpeg",
      name: "Dr. John paul",
      exp: "22 years exp",
      quali: "MBBS, MD (General Medicine)",
      prof: "Neurologist",
      lang: "English, Hindi",
    },
    {
      img: "./assets/img/hospital/doctor2.jpeg",
      name: "Dr. Henry",
      exp: "18 years exp",
      quali: "MBBS",
      prof: "Neurologist",
      lang: "English",
    },
    {
      img: "./assets/img/hospital/doctor3.jpeg",
      name: "Dr. Andrew Hall",
      exp: "14 years exp",
      quali: "MBBS, MS",
      prof: "Neurologist",
      lang: "English, Hindi",
    },
    {
      img: "./assets/img/hospital/doctor4.jpeg",
      name: "Dr. Elizabeth",
      exp: "12 years exp",
      quali: "MBBS, DNB",
      prof: "Neurologist",
      lang: "English",
    },
    {
      img: "./assets/img/hospital/doctor5.jpeg",
      name: "Dr. Rebecca",
      exp: "8 years exp",
      quali: "MBBS, MD (General Medicine)",
      prof: "Neurologist",
      lang: "English, Hindi",
    },
  ];
  ngOnInit(): void {}
}
