import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CardserviceComponent } from '../../components/cardservice/cardservice.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CardserviceComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
