import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration';
  about='Form';
  hide=false
  showElement=true;
  toggle(){
    this.showElement=!this.showElement
  }
 
  
  
  names=[

    {name:"suraj",city:"pune"},
    {name:"akash",city:"nashik"},
    {name:"rahul",city:"pune"},
    {name:"vikas",city:"pune"},
    
    ]
    position="second"

}
