import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.scss']
})
export class SymptomsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  getSpecialitiesList() {
      console.log("in the list")
      this.router.navigateByUrl("/physicians");
  }

}
