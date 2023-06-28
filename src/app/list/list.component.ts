import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
listCand=[{name:"syrine",lastname:"hosni",avatar:"avatar1.jpg"},
{name:"amal",lastname:"hosni",avatar:"avatar2.jpg"},
{name:"nesrine",lastname:"hosni",avatar:"avatar3.jpg"}]
@Output() sendEvent=new EventEmitter()
sendCandToList(event:any){
    this.sendEvent.emit(event)
}
}
