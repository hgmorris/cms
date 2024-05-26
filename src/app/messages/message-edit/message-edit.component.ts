import { Component } from '@angular/core';
import { Message } from '../message.model';
import { MessageService } from '../message.service'; // Import MessageService

@Component({
  selector: 'cms-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent {

  constructor(private messageService: MessageService) {} // Inject MessageService

  onSendMessage() {
    const newMessage = new Message('4', 'New Subject', 'This is a new message', '4');
    this.messageService.addMessage(newMessage); // Call addMessage method of MessageService
  }

}
