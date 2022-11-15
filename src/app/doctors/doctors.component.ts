import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  doctorsProfile = [
    { img: "./assets/img/dental1.jpg", title: "Dr Raghunandan" },
    { img: "./assets/img/hospital/gynaecologist.svg", title: "Gynaecologist" },
    { img: "./assets/img/hospital/pediatrician.svg", title: "Pediatrician" },
    { img: "./assets/img/hospital/orthopedician.svg", title: "Orthopedician" },
    {
      img: "./assets/img/hospital/eye-specialist.svg",
      title: "Eye Specialist",
    },
    {
      img: "./assets/img/hospital/physiotherapist.svg",
      title: "physiotherapist",
    },
    { img: "./assets/img/hospital/dentist.svg", title: "Dentist" },
    { img: "./assets/img/hospital/more.svg", title: "View all" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
