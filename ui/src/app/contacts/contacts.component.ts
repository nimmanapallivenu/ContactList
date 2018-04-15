import { Component, OnInit } from '@angular/core';
import { ConatctService } from '../service/conatct.service'

import { Contact } from '../model/contact';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: Contact[];
  contact: Contact;
  first_name: string;
  last_name: string;
  phone: string;

  constructor(private contactService: ConatctService) { }

  ngOnInit() {
    this.contactService.getContacts().subscribe(contacts => {
      this.contacts = contacts;
    });
  }


  addContact() {
    const newContact = new Contact(this.first_name, this.last_name, this.phone);
    this.contactService.addContact(newContact).subscribe(contact => {
      this.first_name="";this.last_name="";this.phone="";
      this.contacts.push(newContact);
    });

  }

  deleteContact(id) {

    this.contactService.deleteConatct(id).subscribe(data => {
      if (data.n == 1) {
        for (var i = 0; i < this.contacts.length; i++) {
          if (this.contacts[i]._id == id) {
            this.contacts.splice(i, 1);
          }
        }
      }
    });
  }

}
