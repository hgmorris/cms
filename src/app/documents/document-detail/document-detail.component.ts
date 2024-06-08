import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Document } from '../document.model';
import { DocumentService } from '../document.service';
import { WinRefService } from '../../win-ref.service';

@Component({
  selector: 'cms-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css']
})
export class DocumentDetailComponent implements OnInit {
  document: Document | undefined;
  nativeWindow: any;

  constructor(
    private documentService: DocumentService,
    private router: Router,
    private route: ActivatedRoute,
    private winRefService: WinRefService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.handleRouteParams(params));
  }

  handleRouteParams(params: any): void {
    const id = params['id'];
    this.fetchDocument(id);
    this.nativeWindow = this.winRefService.getNativeWindow();
  }

  fetchDocument(id: string): void {
    this.document = this.documentService.getDocument(id) || undefined;
  }

  onView(): void {
    if (this.document?.url) {
      this.nativeWindow.open(this.document.url);
    }
  }

  onDelete(): void {
    if (this.document) {
      this.documentService.deleteDocument(this.document);
      this.router.navigate(['/documents']);
    }
  }
}
