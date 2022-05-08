import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'c-link',
  templateUrl: './link.html',
  styleUrls: ['./link.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class Link implements OnInit {
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
@NgModule({
  imports: [CommonModule],
  exports: [Link],
  declarations: [Link]
})
export class LinkModule { }