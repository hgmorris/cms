import { Injectable } from '@angular/core';
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  documents: Document[] = [];
  documentSelectedEvent: any;

  constructor() {
    this.documents = MOCKDOCUMENTS;
  }

  getDocuments(): Document[] {
    return [...this.documents];
  }

  getDocument(id: string): Document | null {
    const foundDocument = this.documents.find(document => document.id === id);
    return foundDocument || null;
  }
}

