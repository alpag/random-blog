import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/core';
import { ContactMessage } from 'src/app/shared/models/contact-message.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  message : ContactMessage = new ContactMessage();

  contactForm : FormGroup;
  email: FormControl;
  name: FormControl;
  content: FormControl;

  submitted = false;

  constructor(private contactService : ContactService) {
   }

  ngOnInit() {
    this.createFormControls();
    this.createForm();

    this.email.valueChanges.pipe(
      debounceTime(1000),distinctUntilChanged())
      .subscribe((mail: string) => {
        this.message.authorEmail = mail;
      })

    this.name.valueChanges.pipe(
      debounceTime(1000),distinctUntilChanged())
      .subscribe((name: string) => {
        this.message.authorName = name;
      })

    this.content.valueChanges.pipe(
      debounceTime(1000),distinctUntilChanged())
      .subscribe((content: string) => {
        this.message.content = content;
      })
  }

  createFormControls() {
    this.name = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.content = new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ]);
  }

  createForm() {
    this.contactForm = new FormGroup({
      email: this.email,
      name: this.name,
      content: this.content
    });
  }

  onSubmit(){
    if(this.contactForm.valid){
      this.contactService.contactAction(this.message);
      this.submitted = true;
    }
  }

}
