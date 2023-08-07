import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'receipe';
  page = 'Receipe';

  navPage(page: string) {
    this.page = page;

  }
}
