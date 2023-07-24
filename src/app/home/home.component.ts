import { Component } from '@angular/core';
import { CanActivateFn } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
   login(userid : any,password : any ){
    if(userid== 'Archit' && password=='123'){
      localStorage.setItem("isloggedin","true")
    }
else{
  localStorage.setItem("isloggedin","false") 
}
   }
}
