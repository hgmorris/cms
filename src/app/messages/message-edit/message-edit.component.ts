import { Component, ElementRef, ViewChild } from '@angular/core';
import { Message } from '../message.model';
import { MessageService } from '../message.service'; // Import MessageService


@Component({
  selector: 'cms-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent {
@ViewChild('subject') subjectInputRef!: ElementRef;
@ViewChild('msgText') msgTextInputRef!: ElementRef;
currentSender: string = 'Morris';
msgId: string = '1';
onClear() {
  this.subjectInputRef.nativeElement.value = '';
  this.msgTextInputRef.nativeElement.value = '';


}

  constructor(private messageService: MessageService) {} // Inject MessageService

  onSendMessage() {
    const subject = this.subjectInputRef.nativeElement.value;
    const msgText = this.msgTextInputRef.nativeElement.value;
    const newMessage = new Message('4', subject,  msgText, '4');
    this.messageService.addMessage(newMessage); // Call addMessage method of MessageService
    this.onClear();
  }

}
