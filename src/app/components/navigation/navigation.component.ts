import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  standalone: true,
  imports: [NgFor, RouterLink]
})
export class NavigationComponent {
  chats = [
    { id: 1, name: 'Yani' },
    { id: 2, name: 'Loan' },
  ];

  constructor(private router: Router) {}

  openChat(chatId: number) {
    this.router.navigate(['/chat', chatId]);
  }

  
}
