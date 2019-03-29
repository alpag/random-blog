import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/core';
import { ContactMessage } from 'src/app/shared/models/contact-message.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
message : ContactMessage = new ContactMessage();
  constructor(private contactService : ContactService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("XDDD")
  }

}
