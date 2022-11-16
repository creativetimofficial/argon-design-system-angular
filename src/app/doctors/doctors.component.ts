import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {

  doctorsProfile = [
    { img: "./assets/img/hospital/doctor1.jpeg", name: "Dr. John", exp: "22 years exp",
    quali: "MBBS, MD (General Medicine)", prof: "Physician", lang: "English, Hindi", fee: "₹300 Consultation fee"},
    { img: "./assets/img/hospital/doctor2.jpeg", name: "Dr. Timothy", exp: "18 years exp",
    quali: "MBBS, DNB(Ortho)", prof: "Orthopedician", lang: "English", fee: "₹300 Consultation fee"},
    { img: "./assets/img/hospital/doctor3.jpeg", name: "Dr. Jacob", exp: "18 years exp",
    quali: "MBBS, DO", prof: "Pediatrician", lang: "English", fee: "₹300 Consultation fee" },
    { img: "./assets/img/hospital/doctor4.jpeg", name: "Dr. Stella", exp: "12 years exp",
    quali: "MBBS, DNB", prof: "Gynaecologist", lang: "English", fee: "₹300 Consultation fee" },
    {
      img: "./assets/img/hospital/doctor5.jpeg", name: "Dr. Rebecca", exp: "8 years exp",
      quali: "BDS, MDS", prof: "Dentist", lang: "English, Hindi",fee: "₹300 Consultation fee"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
