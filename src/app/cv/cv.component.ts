import { Component } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  selectedCand:any
section ="3 GLSI";
university="tek-up"
color="pink";
traitement(){
  this.university="sesame"
}
firstTraitement(msg:any){
  alert(msg)
  }
  sendEventToCv(msg:any){
    console.log(msg)
    this.selectedCand=msg;
  }
}

