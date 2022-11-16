import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pediatrician',
  templateUrl: './pediatrician.component.html',
  styleUrls: ['./pediatrician.component.scss']
})
export class PediatricianComponent implements OnInit {
  pediatricianInfo = [
    { img: "./assets/img/hospital/doctor1.jpeg", name: "Dr. Jason", exp: "22 years exp",
    quali: "MBBS, MD (General Medicine)", prof: "Pediatrician", lang: "English, Hindi", fee: "₹300 Consultation fee" },
    { img: "./assets/img/hospital/doctor2.jpeg", name: "Dr. Jacob", exp: "18 years exp",
    quali: "MBBS, DO", prof: "Pediatrician", lang: "English", fee: "₹300 Consultation fee"},
    { img: "./assets/img/hospital/doctor3.jpeg", name: "Dr. Nicholas", exp: "14 years exp",
    quali: "MBBS, MD", prof: "Pediatrician", lang: "English, Hindi", fee: "₹300 Consultation fee" },
    { img: "./assets/img/hospital/doctor4.jpeg", name: "Dr. Elena", exp: "12 years exp",
    quali: "MBBS, DO", prof: "Pediatrician", lang: "English", fee: "₹300 Consultation fee" },
    {
      img: "./assets/img/hospital/doctor5.jpeg", name: "Dr. Ivy", exp: "8 years exp",
      quali: "MBBS, DO", prof: "Pediatrician", lang: "English, Hindi", fee: "₹300 Consultation fee"
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
