import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // 表单引用对象
  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['wan@local.dev', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    })

    setTimeout(() => {
      this.form.controls['email'].setValidators(this.validate);
      this.form.controls['email'].setValidators([Validators.required, Validators.email, this.validate])
    }, 10 * 1000);
    // this.form = new FormGroup({
    //   email: new FormControl('wang@163.com', Validators.compose([Validators.required, Validators.email])),
    //   password: new FormControl('', [Validators.required])
    // });
  }

  onSubmit(form: FormGroup, e: Event) {
    e.preventDefault();
    console.log(JSON.stringify(form.value));
    console.log(form.valid);
    
  }

  validate(c: FormControl): {[key: string]: any} {
    if (!c.value) {
      return null;
    }
    console.log(c)
    const pattern = /^wang+/;
    if (pattern.test(c.value)) {
      return null;
    } else {
      return {
        emailNotValid: 'The email must start with wang'
      }
    }
  }

}
