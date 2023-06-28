import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
 @Input() cl="green";
 @Output() EventTest = new EventEmitter();
 sendTest(){
  this.EventTest.emit('test works fine');
}
}
