import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/AuthService';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formLogin = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  status: String = '';
  errMessage: String = '';
  isLoading: Boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
  }
  async submit() {
    try {
      this.isLoading = true;
      const data = this.formLogin.value;
      const rs: any = await this.authService.login(data.email, data.password);
      await localStorage.setItem('token', rs.user.ra);
      this.status = 'OK';
      this.router.navigate(['/']);
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
