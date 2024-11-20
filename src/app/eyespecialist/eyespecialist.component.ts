import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eyespecialist',
  templateUrl: './eyespecialist.component.html',
  styleUrls: ['./eyespecialist.component.scss']
})
export class EyespecialistComponent implements OnInit {
  eyespecInfo = [
    { img: "./assets/img/hospital/doctor1.jpeg", name: "Dr. Robert", exp: "22 years exp",
    quali: "MBBS, MD", prof: "Opthamologist", lang: "English, Hindi", fee: "₹300 Consultation fee" },
    { img: "./assets/img/hospital/doctor2.jpeg", name: "Dr. Michael", exp: "18 years exp",
    quali: "MBBS", prof: "Opthamologist", lang: "English", fee: "₹300 Consultation fee"},
    { img: "./assets/img/hospital/doctor3.jpeg", name: "Dr. William", exp: "14 years exp",
    quali: "MBBS, MD", prof: "Opthamologist", lang: "English, Hindi", fee: "₹300 Consultation fee" },
    { img: "./assets/img/hospital/doctor4.jpeg", name: "Dr. Sophia", exp: "12 years exp",
    quali: "MBBS", prof: "Opthamologist", lang: "English", fee: "₹300 Consultation fee" },
    {
      img: "./assets/img/hospital/doctor5.jpeg", name: "Dr. Emily", exp: "8 years exp",
      quali: "MBBS, MS", prof: "Opthamologist", lang: "English, Hindi", fee: "₹300 Consultation fee"
    },
  ];

  constructor() { }

  openPopup() {
    let popup = document.getElementById("popup");

    popup.classList.add("open-popup")
  }

  closePopup() {
    let popup = document.getElementById("popup");

    popup.classList.remove("open-popup")
  }

  ngOnInit(): void {
  }

}
