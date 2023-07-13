import { Component } from '@angular/core';
// declare var particlesJS :any;
@Component({
  selector: 'abc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title!: string;
    post = {
      title: "Title",
      isFavorite: true,
    }
  
}
