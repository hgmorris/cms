import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { DocumentListComponent } from './documents/document-list/document-list.component';
import { DocumentItemComponent } from './documents/document-item/document-item.component';
import { DocumentDetailComponent } from './documents/document-detail/document-detail.component';
import { DocumentsComponent } from './documents/documents.component';
import { ContactItemComponent } from './contacts/contact-item/contact-item.component';
import { FormsModule } from '@angular/forms';
import { MessageItemComponent } from './messages/message-item/message-item.component';
import { MessageListComponent } from './messages/message-list/message-list.component';
import { MessageEditComponent } from './messages/message-edit/message-edit.component';
import { DropdownDirective } from './dropdown.directive';
import { ContactsComponent } from './contacts/contacts.component';
import { DocumentEditComponent } from './documents/document-edit/document-edit.component';
import { ContactEditComponent } from './contacts/contact-edit/contact-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactDetailComponent,
    ContactListComponent,
    DocumentListComponent,
    DocumentItemComponent,
    DocumentDetailComponent,
    DocumentsComponent,
    ContactItemComponent,
    MessageItemComponent,
    MessageListComponent,
    MessageEditComponent,
    DropdownDirective,
    ContactsComponent,
    DocumentEditComponent,
    ContactEditComponent,
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
