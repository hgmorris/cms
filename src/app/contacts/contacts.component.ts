import { Component, Input, input } from '@angular/core';
import { Contact } from './contact.model';



@Component({
  selector: 'cms-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  @Input() selectedContact!: Contact;




}
