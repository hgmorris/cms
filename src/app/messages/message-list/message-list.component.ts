import { Component } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css'
})
export class MessageListComponent {
  messages: Message[] = [
    new Message('1', 'Bro. Jackson', 'The grades for this assignment has been posted', '1'),
    new Message('2', 'Steven Johnson', 'When is assignment 3 due', '2'),
    new Message('3', 'Bro Jackson', 'Assignment 3 is due on Saturday at 11:30 PM', '3'),
    new Message('4', 'Mark Smith', 'Can I meet with you some time.', '4')
  ];

  /**
   * Adds a new message to the list of messages.
   * @param message The new message to be added.
   */
  onAddMessage(message: Message) {
    this.messages.push(message);
  }
}
