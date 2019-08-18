import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/AuthService';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  status: String = '';
  errMessage: String = '';
  isLoading: Boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {

  }


  async submit() {
    try {
      this.isLoading = true;
      const data = this.formRegister.value;
      await this.authService.register(data.email, data.password);
      this.status = 'OK';
    } catch (e) {
      this.status = 'ERR';
      this.errMessage = e.message;
      if (!e.message) {
        this.errMessage = 'Se produjo un error, favor intentalo nuevamente';
      }
    } finally {
      this.isLoading = false;
    }
  }



}
