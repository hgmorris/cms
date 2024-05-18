import { Component, Output, EventEmitter } from '@angular/core';
import { Document } from '../document.model';


@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css'
})
export class DocumentListComponent {
  documents: Document[] = [
    new Document('1', 'CIT 260 - Object Oriented Programming', 'description', '#'),
    new Document('2','CIT 366 - Full Web Stack Development', 'description 2', '#' ),
    new Document('3', 'CIT 425 - Data Warehousing', 'description 3', '#'),
    new Document('4', 'CIT 460 - Enterprise Development', 'description 4', '#'),
    new Document('5', 'CIT 495 -  Senior Practicum', 'description 5', '#'),
  ];
  @Output() selectedDocumentEvent = new EventEmitter<Document>();



  constructor() {}
  ngOnInit(): void {}

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }


}
