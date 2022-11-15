import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-physicians',
  templateUrl: './physicians.component.html',
  styleUrls: ['./physicians.component.scss']
})
export class PhysiciansComponent implements OnInit {

  physiciansInfo = [
    { img: "./assets/img/hospital/doctor1.jpeg", name: "Dr. John", exp: "22 years exp",
    quali: "MBBS, MD (General Medicine)", prof: "Physician", lang: "English, Hindi" },
    { img: "./assets/img/hospital/doctor2.jpeg", name: "Dr. Stephen", exp: "18 years exp",
    quali: "MBBS", prof: "Orthopedician", lang: "English"},
    { img: "./assets/img/hospital/doctor3.jpeg", name: "Dr. Andrew Hall", exp: "14 years exp",
    quali: "MBBS, MS", prof: "Physician", lang: "English, Hindi" },
    { img: "./assets/img/hospital/doctor4.jpeg", name: "Dr. Elizabeth", exp: "12 years exp",
    quali: "MBBS, DNB", prof: "Gynaecologist", lang: "English" },
    {
      img: "./assets/img/hospital/doctor5.jpeg", name: "Dr. Rebecca", exp: "8 years exp",
      quali: "BDS, MDS", prof: "Dentist", lang: "English, Hindi"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
