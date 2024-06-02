import { Component, OnInit } from '@angular/core';
import { Document } from '../document.model';
import { DocumentService } from '../document.service'; // Import DocumentService

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  documents: Document[] = [];

  constructor(private documentService: DocumentService) {} // Inject DocumentService

  ngOnInit(): void {
    this.documents = this.documentService.getDocuments(); // Get documents from the service
  }
}
