import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  documents: Document[] = MOCKDOCUMENTS; // Initialize with MOCKDOCUMENTS
  documentListChangedEvent = new Subject<Document[]>();
  maxDocumentId: number = this.getMaxId();

  private documentsUrl = 'https://angular-first-project-7e537-default-rtdb.firebaseio.com/documents.json'; 

  constructor(private http: HttpClient) {
    this.fetchDocuments();
  }

  private getMaxId(): number {
    let maxId = 0;
    for (let document of this.documents) {
      let currentId = parseInt(document.id, 10);
      if (currentId > maxId) {
        maxId = currentId;
      }
    }
    return maxId;
  }

  fetchDocuments() {
    this.http.get<Document[]>(this.documentsUrl)
      .subscribe(
        (documents: Document[]) => {
          if (documents) {
            this.documents = documents;
            this.maxDocumentId = this.getMaxId();
            this.documents.sort((a, b) => a.name.localeCompare(b.name));
            this.documentListChangedEvent.next(this.documents.slice());
          }
        },
        (error: any) => {
          console.error('Error fetching documents:', error);
        }
      );
  }

  storeDocuments() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const documentsJson = JSON.stringify(this.documents);

    this.http.put(this.documentsUrl, documentsJson, { headers })
      .subscribe(() => {
        this.documentListChangedEvent.next(this.documents.slice());
      });
  }

  getDocuments(): Document[] {
    return this.documents.slice();
  }

  getDocument(id: string): Document | undefined {
    return this.documents.find(document => document.id === id);
  }

  addDocument(newDocument: Document) {
    if (!newDocument) {
      return;
    }

    this.maxDocumentId++;
    newDocument.id = this.maxDocumentId.toString();
    this.documents.push(newDocument);
    this.storeDocuments();
  }

  updateDocument(originalDocument: Document, newDocument: Document) {
    if (!originalDocument || !newDocument) {
      return;
    }

    const pos = this.documents.indexOf(originalDocument);
    if (pos < 0) {
      return;
    }

    newDocument.id = originalDocument.id;
    this.documents[pos] = newDocument;
    this.storeDocuments();
  }

  deleteDocument(document: Document) {
    if (!document) {
      return;
    }

    const pos = this.documents.indexOf(document);
    if (pos < 0) {
      return;
    }

    this.documents.splice(pos, 1);
    this.storeDocuments();
  }
}
