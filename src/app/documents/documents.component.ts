import { Component, OnInit } from '@angular/core';
import { Document } from './document.model';
import { DocumentService } from './document.service'; // Import DocumentService



@Component({
  selector: 'cms-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  selectedDocument!: Document;

  constructor(private documentService: DocumentService) {} // Inject DocumentService

  ngOnInit(): void {
    this.documentService.documentSelectedEvent.subscribe( // Subscribe to the documentSelectedEvent
      (document: Document) => {
        this.selectedDocument = document; // Assign the document to selectedDocument
      }
    );
  }
}
