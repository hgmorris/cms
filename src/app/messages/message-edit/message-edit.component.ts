import { Component, EventEmitter, Output } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrl: './message-edit.component.css'
})
export class MessageEditComponent {
  @Output() addMessageEvent = new EventEmitter<Message>();

  onSendMessage() {
    const newMessage = new Message('4', 'New Subject', 'This is a new message', '4');
    this.addMessageEvent.emit(newMessage);
  }

}
