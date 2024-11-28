import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  standalone: true,
  templateUrl: './chat.component.html',
})
export class ChatComponent {
  chatId: number | null = null;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.chatId = +params['id'];
    });
  }
}
