import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestcomponentComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chelist-app';
}
