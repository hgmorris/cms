import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from './message.model';
import { MOCKMESSAGES } from './MOCKMESSAGES';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: Message[] = MOCKMESSAGES;
  messageChangedEvent = new EventEmitter<Message[]>();
  maxMessageId: number = this.getMaxId();

  private messagesUrl = 'https://angular-first-project-7e537-default-rtdb.firebaseio.com/messages.json'; // Replace with your Firebase URL

  constructor(private http: HttpClient) {
    this.fetchMessages();
  }

  private getMaxId(): number {
    let maxId = 0;
    for (let message of this.messages) {
      let currentId = parseInt(message.id, 10);
      if (currentId > maxId) {
        maxId = currentId;
      }
    }
    return maxId;
  }

  fetchMessages() {
    this.http.get<Message[]>(this.messagesUrl)
      .subscribe(
        (messages: Message[]) => {
          if (messages) {
            this.messages = messages;
            this.maxMessageId = this.getMaxId();
            this.messageChangedEvent.emit(this.messages.slice());
          }
        },
        (error: any) => {
          console.error('Error fetching messages:', error);
        }
      );
  }

  storeMessages() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const messagesJson = JSON.stringify(this.messages);

    this.http.put(this.messagesUrl, messagesJson, { headers })
      .subscribe(() => {
        this.messageChangedEvent.emit(this.messages.slice());
      });
  }

  getMessages(): Message[] {
    return this.messages.slice();
  }

  getMessage(id: string): Message | undefined {
    return this.messages.find(message => message.id === id);
  }

  addMessage(newMessage: Message) {
    if (!newMessage) {
      return;
    }

    this.maxMessageId++;
    newMessage.id = this.maxMessageId.toString();
    this.messages.push(newMessage);
    this.storeMessages();
  }
}
