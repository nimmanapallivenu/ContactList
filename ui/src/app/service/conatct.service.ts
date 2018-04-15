import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Contact } from '../model/contact';

import 'rxjs/add/operator/map';


@Injectable()
export class ConatctService {

  constructor(private http: Http) { }

  // Getting list of contacts
  getContacts() {
    return this.http.get('http://localhost:3000/api/contacts')
    .map(res => res.json());
  }

  //add conatct
 addContact(newContact){
    var header= new Headers();
    header.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/contact',newContact,{headers:header})
    .map(res=>res.json());
 }

  // delete contact
 deleteConatct(id){
   return this.http.delete('http://localhost:3000/api/contact/'+id).
   map(res=>res.json());
 }


}
