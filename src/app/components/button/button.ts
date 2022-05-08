import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'c-button',
  templateUrl: './button.html',
  styleUrls: ['./button.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class Button implements OnInit {
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
@NgModule({
  imports: [CommonModule],
  exports: [Button],
  declarations: [Button]
})
export class ButtonModule { }