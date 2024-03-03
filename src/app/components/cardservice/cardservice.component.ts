import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cardservice',
  standalone: true,
  imports: [],
  templateUrl: './cardservice.component.html',
  styleUrl: './cardservice.component.css'
})
export class CardserviceComponent {
  @Input() title!: string;
  @Input() content!: string;
  @Input() img!: string;
}
