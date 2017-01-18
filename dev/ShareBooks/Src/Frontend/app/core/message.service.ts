import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';

 
import { ToastService } from './toast/toast.service';

export interface ResetMessage {
  message: string;
}

@Injectable()
export class MessageService {
  private subject = new Subject<ResetMessage>();

  constructor( private toastService: ToastService) { }

      clearMessage() {
        this.subject.next();
    }
  showMessage(text:string) {
      let msg = text ||'Hi';
        this.subject.next({ message: msg });
        this.toastService.activate(msg);
  }
}

 