import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  chats = [
    { id: 1, name: 'Utilisateur 1' },
    { id: 2, name: 'Utilisateur 2' },
    { id: 3, name: 'Groupe 1' },
  ];

  constructor(private router: Router) { }

  openChat(chatId: number) {
    this.router.navigate(['/chat', chatId]);
  }
}
