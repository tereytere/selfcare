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
  @Output() onClick: EventEmitter<string> = new EventEmitter();

  handleClick() {
    this.onClick.emit();
  }


}



