import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orthopedician',
  templateUrl: './orthopedician.component.html',
  styleUrls: ['./orthopedician.component.scss']
})
export class OrthopedicianComponent implements OnInit {
  orthopedicianInfo = [
    { img: "./assets/img/hospital/doctor1.jpeg", name: "Dr. George", exp: "22 years exp",
    quali: "MBBS, MS(Ortho)", prof: "Orthopedician", lang: "English, Hindi", fee: "₹300 Consultation fee" },
    { img: "./assets/img/hospital/doctor2.jpeg", name: "Dr. Timothy", exp: "18 years exp",
    quali: "MBBS, DNB(Ortho)", prof: "Orthopedician", lang: "English", fee: "₹300 Consultation fee"},
    { img: "./assets/img/hospital/doctor3.jpeg", name: "Dr. Edward ", exp: "14 years exp",
    quali: "MBBS, MS(Ortho)", prof: "Orthopedician", lang: "English, Hindi", fee: "₹300 Consultation fee" },
    { img: "./assets/img/hospital/doctor4.jpeg", name: "Dr. Hannah", exp: "12 years exp",
    quali: "MBBS, DNB(Ortho)", prof: "Orthopedician", lang: "English", fee: "₹300 Consultation fee" },
    {
      img: "./assets/img/hospital/doctor5.jpeg", name: "Dr. Lucy", exp: "8 years exp",
      quali: "MBBS, DNB(Ortho)", prof: "Orthopedician", lang: "English, Hindi", fee: "₹300 Consultation fee"
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
