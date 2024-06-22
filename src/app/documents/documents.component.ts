import { Component, OnInit } from '@angular/core';
import { Document } from './document.model';
import { DocumentService } from './document.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  documents?: Document[];

  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {
    this.documentService.documentListChangedEvent
      .subscribe((documents: Document[]) => {
        this.documents = documents;
      });
    this.documents = this.documentService.getDocuments();
  }
}
