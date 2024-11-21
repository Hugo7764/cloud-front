import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  username = '';
  password = '';
  confirmPassword = '';

  register() {
    if (this.password === this.confirmPassword) {
      console.log(`Inscription : ${this.username}, ${this.password}`);
    } else {
      console.log('Les mots de passe ne correspondent pas');
    }
  }
}
