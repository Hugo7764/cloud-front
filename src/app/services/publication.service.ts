import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface Publication {
  title: string;
  content: string;
  author: string;
}

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  private publications: Publication[] = [];
  private publicationsSubject = new BehaviorSubject<Publication[]>(this.publications);

  // Observable des publications
  publications$: Observable<Publication[]> = this.publicationsSubject.asObservable();

  // Ajouter une publication
  addPublication(publication: Publication): void {
    this.publications = [...this.publications, publication];
    this.publicationsSubject.next(this.publications);
  }

  // Obtenir toutes les publications
  getPublications(): Observable<Publication[]> {
    return this.publications$;
  }
}
