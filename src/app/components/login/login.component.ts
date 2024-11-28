import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule]
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    console.log("entré")
    // if (this.authService.login(this.username, this.password)) {
    //   this.router.navigate(['/home']);
    // } else {
    //   this.errorMessage = 'Utilisateur ou mot de passe incorrect';
    //   console.log(this.errorMessage)
    // }
  }
}
