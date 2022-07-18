import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent implements OnInit {
  userForm: any
 states = [
  {name : 'Tamil Nadu'},
  {name : 'Kerala'},
  {name : 'Andra Pradesh'},
  {name : 'Karnataka'},
 ]


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
        'inputEmail4':new FormControl(null,[Validators.required,Validators.email]),
         'inputPassword4':new FormControl(null),
         'address': this.fb.group({
            'inputAddress':'adbcvhfh',
            'inputAddress2':'eurgjmbm',
            'inputState':'Kerala',
            'inputCity':'it6iy609',
            'inputZip':'vntri450',
         }),
     'gridCheck': true,
})
    }

    onSubmit() {
      console.log(this.userForm.value);
      }
}
