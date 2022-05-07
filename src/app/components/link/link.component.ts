import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'c-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  @Input() content: string;

  @Input() class: string;

  @Input() severity: string;

  @Output() onClick: EventEmitter<any> = new EventEmitter();

  @Output() onFocus: EventEmitter<any> = new EventEmitter();

  private severityDictionary = {
    'default': 'text-default',
    'primary': 'text-primary',
    'info': 'text-info',
    'success': 'text-success',
    'warning': 'text-warning',
    'danger': 'text-danger'
  };
  constructor() { }

  ngOnInit(): void {
    this.severity = this.severityDictionary[this.severity] ? this.severityDictionary[this.severity] : this.severityDictionary['default'];
  }

}
