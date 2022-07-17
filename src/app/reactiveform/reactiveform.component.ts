import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  userForm: FormGroup
  constructor() { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      // 'inputEmail4':new FormControl(null),
      //  'inputEmail4':new FormControl('priya@gmail.com'),
      // 'inputEmail4':new FormControl(null,Validators.required),

      'inputEmail4':new FormControl(null,[Validators.required,Validators.email]),
       'inputPassword4':new FormControl(null),
       'address': new FormGroup({
          'inputAddress':new FormControl(null,Validators.required),
          'inputAddress2':new FormControl(null),
          'inputCity':new FormControl(null),
          'inputZip':new FormControl(null),
       })
       
    });
    this.userForm.setValue({
      'inputEmail4':'',
       'inputPassword4':'',
       'address': {
          'inputAddress':'kk nagar',
          'inputAddress2':'',
          'inputCity':'',
          'inputZip':''
    }
  })
}
  onSubmit() {
    console.log(this.userForm.value);
    }

    ResetValues() {
      this.userForm.reset({
        'inputEmail4':'',
         'inputPassword4':'',
         'address': {
            'inputAddress':'',
            'inputAddress2':'',
            'inputCity':'',
            'inputZip':'',
      }
    })
   }
}
