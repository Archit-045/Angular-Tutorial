import { Component } from '@angular/core';
import { UserdataService } from './services/userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Details';
  constructor(){
     localStorage.setItem("isloggedin","false")
  }
}

// ng if else
//isValid : boolean = false 
//OnCreateBlock(){
//  this.isValid = true
//} 

  //  Ng else if 
  // color = "blue";

              // ngFor
//users = [ 'Rohan', 'Yash', 'Abhishek', 'Sagar', 'Jayesh'];
//usersDetails =[ 
  //{name : 'Rohan', email : 'rohan90@gmail.com' , phone : '9999'},
  //{name : 'Yash', email : 'yash90@gmail.com' , phone : '8888'},
  //{name : 'Abhishek', email : 'abhishek90@gmail.com' , phone : '7777'},
 // {name : 'Sagar', email : 'sagar90@gmail.com' , phone : '6666'},
  //{name : 'Jayesh', email : 'jayesh90@gmail.com' , phone : '5555'},
//];
          
            // Ng nested loop                
  //users =[
  //{ name:'Anil'  , phone:'99999' , email:'anil990@gmail.com', accounts:['Facebook' , 'Snapchat', 'Instagram']},
  //{ name:'Vijay' , phone:'89999' , email:'vija  y89@gmail.com', accounts:['Linkedin' , 'Google', 'yahoo']},
  //{ name:'Rohit' , phone:'79999' , email:'rohit79@gmail.com', accounts:['Snapchat' , 'Linkedin', 'email']},
  //{ name:'Sunil' , phone:'69999' , email:'sunil69@gmail.com', accounts:['Google' , 'whatsaap', 'email']},
 // { name:'Mohit' , phone:'59999' , email:'mohit59@gmail.com', accounts:['Instagram' , 'Snapchat', 'whatsaap']}
// ]
     //Ng Switch
   //color = 'orange'

   // Ng Style
  // myStyles = {
    //color: 'white',
    //width: '200px',
    //backgroundColor: 'black', 
    //height : '200px'
// };
//addStyles(){
 //this.myStyles['color']='black';
// this.myStyles['backgroundColor']='red'
// }

          //Ng Class
        // myClasses = {
       // box : true ,
      //border : false,
     // circle : false
    //};
   //changeShape(){
  // this.myClasses.border = !this.myClasses.border,
 //this.myClasses.circle = !this.myClasses.circle
//}

 // Property Binding
 // name = "archit"
// age = '19'
// disable = true

    // String interpolation
// public name = 'simple Binding'
//public topic = 'Data Binding'

        // Event binding
      // msg: string = " ";
      //onAddcart(event : any){
        //this.msg=event.target.value + " Added To Cart"
            // }
           //onInputClick(event : any){
            //console.log(event.target.value);
            //}

            // Two Way Data Binding 
           //  name:  any;


           // Services
           // users : any
        // constructor(private userdata : UserdataService)
         // {
        //   this.users = userdata.users()
        // }