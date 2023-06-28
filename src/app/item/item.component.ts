import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
@Input() oneCandidat:any;
@Output() candSend=new EventEmitter()
sendCondidatToList(){
  this.candSend.emit(this.oneCandidat)
}
}
