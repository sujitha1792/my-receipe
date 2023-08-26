import { Component, Output, EventEmitter } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private storageService: DataStorageService) {

  }

  @Output() navigatePageEvent = new EventEmitter<string>(); 

  // NavigatePage(value: string) {
  //   this.navigatePageEvent.emit(value);
  // }

  onSave() {
    this.storageService.storeReceipes()    
  }

  onFetch() {
    this.storageService.fetchReceipes()
  }

}
