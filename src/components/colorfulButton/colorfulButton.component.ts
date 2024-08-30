import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-colorful-button',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './colorfulButton.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorfulButtonComponent {
  @Input() colorClass: string = '';
}
