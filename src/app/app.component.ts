import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ComponentsModule } from './components/componets-module.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,ComponentsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
