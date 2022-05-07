import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'c-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() content: string;

  @Input() icon: string;

  @Input() size: string;

  @Input() severity: string;

  @Input() outline: boolean;

  @Input() class: boolean;

  @Output() onClick: EventEmitter<any> = new EventEmitter();

  @Output() onFocus: EventEmitter<any> = new EventEmitter();

  private sizeDictionary = {
    'sm': 'btn-sm',
    'lg': 'btn-lg'
  };
  private severityDictionary = {
    'primary': 'btn-primary',
    'info': 'btn-info',
    'success': 'btn-success',
    'warning': 'btn-warning',
    'danger': 'btn-danger',
    'neutral': 'btn-neutral',
  };
  private outlineDictionary = {
    'primary': 'btn-outline-primary',
    'info': 'btn-outline-info',
    'success': 'btn-outline-success',
    'warning': 'btn-outline-warning',
    'danger': 'btn-outline-danger',
  };
  constructor() { }
  ngOnInit(): void {
    this.size = this.sizeDictionary[this.size] ? this.sizeDictionary[this.size] : '';
    if (this.outline) {
      this.severity = this.outlineDictionary[this.severity] ? this.outlineDictionary[this.severity] : this.outlineDictionary['primary'];
    }
    else {
      this.severity = this.severityDictionary[this.severity] ? this.severityDictionary[this.severity] : this.severityDictionary['primary'];
    }
  }

}
