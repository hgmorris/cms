import { Component } from '@angular/core';
import { Document } from '../document.model';


@Component({
  selector: 'cms-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrl: './document-detail.component.css'
})
export class DocumentDetailComponent {
document: Document;

    constructor() {
      this.document = {
        id: '1',
        name: 'CIT 366 - Full Stack Web Development',
        description: 'Learn how to develop web applications using the MEAN stack.',
        url: 'http://content.byui.edu/file/6f4d4f4d-2b1b-4b0f-8f1e-3c3a3b3b3b3b/1/CIT366/course.html',
      };
    }

    ngOnInit(): void {}

}
