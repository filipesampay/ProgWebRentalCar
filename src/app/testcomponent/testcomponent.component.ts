import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testcomponent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testcomponent.component.html',
  styleUrl: './testcomponent.component.css'
})
export class TestcomponentComponent {
  public showTitle = true

  public ChangeTitle(){
    this.showTitle = !this.showTitle
  }
}
