import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  constructor(private contactService : ContactService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("XDDD")
  }

}
