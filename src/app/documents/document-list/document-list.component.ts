import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs'; // Import Subscription
import { Document } from '../document.model';
import { DocumentService } from '../document.service';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit, OnDestroy {
  documents: Document[] = [];
  private subscription: Subscription = new Subscription; // Define subscription variable

  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {
    this.documents = this.documentService.getDocuments();
    this.subscription = this.documentService.documentListChangedEvent
      .subscribe(
        (documentsList: Document[]) => {
          this.documents = documentsList;
        }
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // Unsubscribe from the subscription
  }
}
