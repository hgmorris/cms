import { Component } from '@angular/core';
import { Document } from '../document.model';
import { DocumentService } from '../document.service'; // Import DocumentService

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent {
  documents: Document[] = [];

  constructor(private documentService: DocumentService) {} // Inject DocumentService

  ngOnInit(): void {
    this.documents = this.documentService.getDocuments(); // Get documents from the service
  }

  onSelectedDocument(document: Document) {
    this.documentService.documentSelectedEvent.emit(document); // Emit the event from the service
  }
}
