import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'custom-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {

  @Input() label: string = '';
  @Input() disabled: boolean = false;
  @Output() onClick: EventEmitter<string> = new EventEmitter();

  handleClick() {
    if (!this.disabled) {
      this.onClick.emit();
    }
  }
}
