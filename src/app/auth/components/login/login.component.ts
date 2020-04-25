import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  sendLogin(event: Event) {
    event.preventDefault();

    if (this.form.valid) {


      const { email, password } = this.form.value;

      console.log(email, password);
      // this.authService.createUser(email, password).then(response => {

      //   console.log('Admin: ', response);

      // }, error => {
      //   console.log('error');

      // });
    }

  }

  private buildForm() {

    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

  }

  get f() { return this.form.controls; }

}
