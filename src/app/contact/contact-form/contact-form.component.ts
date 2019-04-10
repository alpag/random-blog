import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/core';
import { Subject, Subscription } from 'rxjs';
import { ContactMessage } from 'src/app/shared/models/contact-message.model';

import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  message : ContactMessage = new ContactMessage();
  private onChange : Subject<string> = new Subject<string>();

  submitted = false;
  constructor(private contactService : ContactService) {
    this.onChange.pipe(
      debounceTime(1000), 
      distinctUntilChanged())
      .subscribe(mail => this.message.authorEmail = mail);
   }

  ngOnInit() {
    
  }

  onSubmit(){
    this.contactService.contactAction(this.message);
    this.submitted = true;
  }


}
