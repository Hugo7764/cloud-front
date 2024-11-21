import { Component } from '@angular/core';
import { PublishComponent } from "./components/publish/publish.component";
import { HomeComponent } from "./components/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PublishComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'publication';
}
