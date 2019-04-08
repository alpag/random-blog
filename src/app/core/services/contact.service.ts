import { Injectable } from '@angular/core';
import { ContactMessage } from 'src/app/shared/models/contact-message.model';


const OWNERMAIL = "foo@bar.com";

@Injectable({
    providedIn: 'root'
  })

export class ContactService {
    contactAction(message : ContactMessage){
        console.log("SENDING MAIL FOR " + OWNERMAIL);
        this.sendMail(OWNERMAIL, this.createMailContent(message));
    }

    createMailContent(message : ContactMessage) : ContactMessage{
        message.content = "New message from " + message.authorName + " (" + message.authorEmail + ") sent " + message.date + "\n. Message: \n\n" + message.content; 
        return message;
    }

    sendMail(mail : string, message: ContactMessage){
        console.log("SENT MAIL TO " + mail);
        console.log(message.content);
    }
}