import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private readonly router: Router,
    private http: HttpClient
  ) {}

  onSubmit() {
    const url = `http://localhost:3000/api/v1/user/login/${this.email}/${this.password}`
    this.http.get(url).subscribe((response) => {
      if (response) {
        localStorage.setItem('isLoginValid', response as string);
        this.router.navigate(['/dashboard']);
      } else {
        alert('Credenciales no validas');
      }
    })
  }
}
