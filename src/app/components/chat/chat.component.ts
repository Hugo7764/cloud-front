import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-chat',
  standalone: true,
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
  imports: [NgFor],
})
export class ChatComponent {
  chatId: number | null = null;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.chatId = +params['id'];
    });
  }
}
