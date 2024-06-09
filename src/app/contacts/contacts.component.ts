import { Component, Input, OnInit } from '@angular/core';
import { Contact } from './contact.model';
import { ContactService } from './contact.service'; // Import ContactService

@Component({
  selector: 'cms-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  @Input() selectedContact!: Contact;

  constructor(private contactService: ContactService) {} // Inject ContactService

  ngOnInit(): void {
    this.contactService.contactSelectedEvent?.subscribe( // Subscribe to the contactSelectedEvent
      (contact: Contact) => {
        this.selectedContact = contact; // Assign the contact to selectedContact
      }
    );
  }
}
