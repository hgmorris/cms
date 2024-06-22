import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from './contact.model';
import { MOCKCONTACTS } from './MOCKCONTACTS';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: Contact[] = MOCKCONTACTS;
  contactListChangedEvent = new Subject<Contact[]>();
  maxContactId: number = this.getMaxId();

  private contactsUrl = 'https://angular-first-project-7e537-default-rtdb.firebaseio.com/contacts.json'; // Replace with your Firebase URL
  contactSelectedEvent: any;

  constructor(private http: HttpClient) {
    this.fetchContacts();
  }

  private getMaxId(): number {
    let maxId = 0;
    for (let contact of this.contacts) {
      let currentId = parseInt(contact.id, 10);
      if (currentId > maxId) {
        maxId = currentId;
      }
    }
    return maxId;
  }

  fetchContacts() {
    this.http.get<Contact[]>(this.contactsUrl)
      .subscribe(
        (contacts: Contact[]) => {
          if (contacts) {
            this.contacts = contacts;
            this.maxContactId = this.getMaxId();
            this.contacts.sort((a, b) => a.name.localeCompare(b.name));
            this.contactListChangedEvent.next(this.contacts.slice());
          }
        },
        (error: any) => {
          console.error('Error fetching contacts:', error);
        }
      );
  }

  storeContacts() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const contactsJson = JSON.stringify(this.contacts);

    this.http.put(this.contactsUrl, contactsJson, { headers })
      .subscribe(() => {
        this.contactListChangedEvent.next(this.contacts.slice());
      });
  }

  getContacts(): Contact[] {
    return this.contacts.slice();
  }

  getContact(id: string): Contact | undefined {
    return this.contacts.find(contact => contact.id === id);
  }

  addContact(newContact: Contact) {
    if (!newContact) {
      return;
    }

    this.maxContactId++;
    newContact.id = this.maxContactId.toString();
    this.contacts.push(newContact);
    this.storeContacts();
  }

  updateContact(originalContact: Contact, newContact: Contact) {
    if (!originalContact || !newContact) {
      return;
    }

    const pos = this.contacts.indexOf(originalContact);
    if (pos < 0) {
      return;
    }

    newContact.id = originalContact.id;
    this.contacts[pos] = newContact;
    this.storeContacts();
  }

  deleteContact(contact: Contact) {
    if (!contact) {
      return;
    }

    const pos = this.contacts.indexOf(contact);
    if (pos < 0) {
      return;
    }

    this.contacts.splice(pos, 1);
    this.storeContacts();
  }
}
