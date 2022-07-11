import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templedrivenform',
  templateUrl: './templedrivenform.component.html',
  styleUrls: ['./templedrivenform.component.css']
})
export class TempledrivenformComponent implements OnInit {

  @ViewChild('userForm') uf:NgForm
   states = [{
     "name":"Tamil Nadu"
   },
   {
    "name":"Karnataka"
  },
  {
    "name":"Andra Pradesh"
  },
  ]
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(userForm :NgForm){
    console.log("Form submitted", userForm)
    this.uf.reset()
  }

  setDefaultvalues(){
    this.uf.form.patchValue({
      inputEmail4:'priya@gmail.com',
      address:{
      inputCity:'Chennai'
      }
    })  
  }

  // setDefaultvalues(){
  //   this.uf.setValue({
  //     inputEmail4:'priya.platosys@gmail.com',
  //     inputPassword4:'Abdhdf',
  //     address:{
  //       inputAddress:"fffi fkgfkg",
  //       inputAddress2:"inputAddress2",
  //       inputCity:"Chennai",
  //     },
  //     gridCheck:true
  //   })
  // }
}
