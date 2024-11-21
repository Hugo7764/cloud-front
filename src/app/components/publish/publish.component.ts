// publish.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PublicationService } from '../../services/publication.service';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class PublishComponent {
  title: string = '';
  content: string = '';
  author: string = '';

  name!: string;
  token!: string;

  constructor(private publicationService: PublicationService) {}

  onSubmit(): void {
    if (this.title && this.content && this.author) {
      this.publicationService.addPublication({
        title: this.title,
        content: this.content,
        author: this.author
      });
      this.clearForm();
    }
  }

  clearForm(): void {
    this.title = '';
    this.content = '';
    this.author = '';
  }

}
