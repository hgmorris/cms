import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'cms-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {
  originalContact?: Contact;
  contact: Contact = { id: '', name: '', email: '', phone: '', imageUrl: '', group: [] };
  groupContacts: Contact[] = [];
  editMode: boolean = false;
  id: string = '';

  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.initializeContact();
    });
  }

  initializeContact() {
    if (!this.id) {
      this.editMode = false;
      this.navigateToContacts();
      return;
    }
    this.originalContact = this.contactService.getContact(this.id);
    if (!this.originalContact) {
      this.navigateToContacts();
      return;
    }
    this.editMode = true;
    this.contact = JSON.parse(JSON.stringify(this.originalContact));
    if (this.originalContact.group) {
      this.groupContacts = JSON.parse(JSON.stringify(this.originalContact.group));
    }
  }

  onSubmit(form: NgForm) {
    if (!this.contact || !this.originalContact) {
      return;
    }
    if (!form.value) {
      return;
    }
    const updatedContact = this.createUpdatedContact(form);
    if (this.editMode) {
      this.contactService.updateContact(this.originalContact, updatedContact);
    } else {
      this.contactService.addContact(updatedContact);
    }
    this.navigateToContacts();
  }

  createUpdatedContact(form: NgForm) {
    return {
      id: this.contact.id,
      name: form.value.name,
      email: form.value.email,
      phone: form.value.phone,
      imageUrl: form.value.imageUrl,
      group: this.groupContacts
    };
  }

  onRemoveItem(index: number) {
    if (index < this.groupContacts.length) {
      this.groupContacts.splice(index, 1);
    }
  }

  onCancel() {
    this.navigateToContacts();
  }

  private navigateToContacts() {
    this.router.navigate(['/contacts']);
  }
}
