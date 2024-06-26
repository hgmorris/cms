import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from './contact.model';

@Pipe({
  name: 'contactsFilter'
})
export class ContactsFilterPipe implements PipeTransform {

  transform(contacts: Contact[], term: string): Contact[] {
    if (!contacts || !term || term.length === 0) {
      return contacts;
    }

    let filteredContacts: Contact[] = contacts.filter(
      (contact: Contact) => contact.name.toLowerCase().includes(term.toLowerCase())
    );

    if (filteredContacts.length < 1) {
      return contacts;
    }

    return filteredContacts;
  }
}
