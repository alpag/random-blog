import { Injectable } from '@angular/core';
const OWNERMAIL = "foo@bar.com";

@Injectable({
    providedIn: 'root'
  })

export class ContactService {
    contactAction(author : string, mail : string, message : string){
        console.log("SENDING MAIL FOR" + OWNERMAIL);
        this.sendMail(OWNERMAIL, this.createMailContent(author, mail, message));
    }

    createMailContent(author : string, mail:string, message: string) : string{
        let currentTime = new Date();
        return "New message from " + author + " (" + mail + ") sent " + currentTime + "\n. Message: \n\n" + message; 
    }

    sendMail(mail : string, content: string){
        console.log("SENT MAIL TO " + mail);
        console.log(content);
    }
}