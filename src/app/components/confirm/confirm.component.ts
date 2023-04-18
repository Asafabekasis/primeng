import { Component } from '@angular/core';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
        
@Component({
    selector: 'app-confirm',
    templateUrl: './confirm.component.html',
    styleUrls: ['./confirm.component.css'],
    providers: [ConfirmationService, MessageService]
})
export class ConfirmComponent {
    position: string;

    constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

    confirmPosition(position: string) {
        this.position = position;

        this.confirmationService.confirm({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            accept: () => {
              console.log('accept');
              
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
            },
            reject: (type) => {
              console.log('reject');
                switch (type) {
                    case ConfirmEventType.REJECT:
                        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
                        break;
                    case ConfirmEventType.CANCEL:
                        this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled' });
                        break;
                }
            },
            key: 'positionDialog'
        });
    }

    confirm(event: Event) {
      this.confirmationService.confirm({
          target: event.target,
          message: 'Are you sure that you want to proceed?',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
          },
          reject: () => {
              this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
          }
      });
  }
}


