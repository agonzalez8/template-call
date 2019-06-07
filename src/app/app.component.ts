import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  counter = 0;

  name = 'Angular';
  children = Array.from(Array(1), (x, i) => i + 1);
  children2 = Array.from(Array(1), (x, i) => i + 1);

   doNotDoThis() {
     this.counter++;
     
     return this.counter > 25? true: false;
   }
}
