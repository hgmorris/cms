import { EventEmitter, Injectable } from '@angular/core';
import { Contact } from './contact.model';
import { MOCKCONTACTS } from './MOCKCONTACTS';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = MOCKCONTACTS;
  contactSelectedEvent = new EventEmitter<Contact>();

  constructor() { }

  getContacts(): Contact[] {
    return [...this.contacts];
  }

  getContact(id: string): Contact | null {
    const foundContact = this.contacts.find(contact => contact.id === id);
    return foundContact || null;
  }
}
