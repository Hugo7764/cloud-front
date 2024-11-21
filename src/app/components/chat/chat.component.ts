import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent {
  chatName = 'Utilisateur 1';
  messages = [
    { sender: 'Vous', content: 'Bonjour !' },
    { sender: 'Utilisateur 1', content: 'Salut, comment ça va ?' },
  ];
  newMessage = '';

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({ sender: 'Vous', content: this.newMessage });
      this.newMessage = '';
    }
  }
}
