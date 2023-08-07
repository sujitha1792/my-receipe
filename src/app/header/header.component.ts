import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() navigatePageEvent = new EventEmitter<string>(); 

  NavigatePage(value: string) {
    this.navigatePageEvent.emit(value);
  }

}
