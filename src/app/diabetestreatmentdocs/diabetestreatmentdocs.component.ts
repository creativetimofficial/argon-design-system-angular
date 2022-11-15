import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-diabetestreatmentdocs",
  templateUrl: "./diabetestreatmentdocs.component.html",
  styleUrls: ["./diabetestreatmentdocs.component.scss"],
})
export class DiabetestreatmentdocsComponent implements OnInit {
  constructor() {}
  diabetesdocInfo = [
    {
      img: "./assets/img/hospital/doctor1.jpeg",
      name: "Dr.Maria L. Collazo-Clavell",
      exp: "22 years exp",
      quali: "MBBS, MD (General Medicine)",
      prof: "Diabetes",
      lang: "English",
      fee: "₹300 Consultation fee",
    },
    {
      img: "./assets/img/hospital/doctor2.jpeg",
      name: "Dr. M. Regina Castro",
      exp: "18 years exp",
      quali: "MBBS",
      prof: "Diabetes",
      lang: "English",
      fee: "₹300 Consultation fee",
    },
    {
      img: "./assets/img/hospital/doctor3.jpeg",
      name: "Dr. Patrick G. Dean",
      exp: "14 years exp",
      quali: "MBBS, MS",
      prof: "Diabetes",
      lang: "English",
      fee: "₹300 Consultation fee",
    },
    {
      img: "./assets/img/hospital/doctor4.jpeg",
      name: "Dr. Curtiss B. Cook",
      exp: "12 years exp",
      quali: "MBBS, DNB",
      prof: "Diabetes",
      lang: "English",
      fee: "₹300 Consultation fee",
    },
    {
      img: "./assets/img/hospital/doctor5.jpeg",
      name: "Dr. Ana L. Creo",
      exp: "8 years exp",
      quali: "MBBS, MD (General Medicine)",
      prof: "Diabetes",
      lang: "English",
      fee: "₹300 Consultation fee",
    },
  ];
  ngOnInit(): void {}
}
