import { Component, OnInit, OnDestroy } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cms-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit, OnDestroy {
  originalContact?: Contact;
  contact: Contact = { id: '', name: '', email: '', phone: '', imageUrl: '', group: [] };
  groupContacts: Contact[] = [];
  editMode: boolean = false;
  id: string = '';
  private subscription?: Subscription;

  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.initializeContact();
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  initializeContact() {
    if (!this.id) {
      this.editMode = false;
      return;
    }
    this.originalContact = this.contactService.getContact(this.id);
    if (!this.originalContact) {
      return;
    }
    this.editMode = true;
    this.contact = JSON.parse(JSON.stringify(this.originalContact));
    if (this.originalContact.group) {
      this.groupContacts = JSON.parse(JSON.stringify(this.originalContact.group));
    }
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const newContact = this.createUpdatedContact(form);
    if (this.editMode && this.originalContact) {
      this.contactService.updateContact(this.originalContact, newContact);
    } else {
      this.contactService.addContact(newContact);
    }
    this.navigateToContacts();
  }

  createUpdatedContact(form: NgForm): Contact {
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
