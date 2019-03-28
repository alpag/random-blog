import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { SharedModule } from '../shared/shared.module';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [ContactPageComponent, ContactFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ContactRoutingModule,
    SharedModule
  ]
})
export class ContactModule { }
