// Angular imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';



// Application imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { DropdownDirective } from './dropdown.directive';

// Contacts feature
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactItemComponent } from './contacts/contact-item/contact-item.component';
import { ContactEditComponent } from './contacts/contact-edit/contact-edit.component';
import { ContactsComponent } from './contacts/contacts.component';

// Documents feature
import { DocumentListComponent } from './documents/document-list/document-list.component';
import { DocumentItemComponent } from './documents/document-item/document-item.component';
import { DocumentDetailComponent } from './documents/document-detail/document-detail.component';
import { DocumentEditComponent } from './documents/document-edit/document-edit.component';
import { DocumentsComponent } from './documents/documents.component';

// Messages feature
import { MessageItemComponent } from './messages/message-item/message-item.component';
import { MessageListComponent } from './messages/message-list/message-list.component';
import { MessageEditComponent } from './messages/message-edit/message-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,

    // Contacts
    ContactDetailComponent,
    ContactListComponent,
    ContactItemComponent,
    ContactEditComponent,
    ContactsComponent,

    // Documents
    DocumentListComponent,
    DocumentItemComponent,
    DocumentDetailComponent,
    DocumentEditComponent,
    DocumentsComponent,

    // Messages
    MessageItemComponent,
    MessageListComponent,
    MessageEditComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
