import { Component, OnInit } from '@angular/core';
import { Document } from '../document.model';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DocumentService } from '../document.service';


@Component({
  selector: 'cms-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.css']
})
export class DocumentEditComponent implements OnInit {
  originalDocument!: Document | undefined;
  document!: Document;
  editMode: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private documentService: DocumentService) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        const id = params['id'];
        if (!id) {
          this.editMode = false;
          return;
        }
        this.originalDocument = this.documentService.getDocument(id);
        if (!this.originalDocument) {
          return;
        }
        this.editMode = true;
        this.document = JSON.parse(JSON.stringify(this.originalDocument));
      }
    );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newDocument = new Document(value.id, value.name, value.description, value.url);
    if (this.editMode && this.originalDocument) {
      this.documentService.updateDocument(this.originalDocument, newDocument);
    } else {
      this.documentService.addDocument(newDocument);
    }
    this.router.navigate(['/documents']);
  }

  onCancel() {
    this.router.navigate(['/documents']);
  }
}
