import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { TicketsService } from '../tickets.service';
import { TicketNew } from '../../types';

@Component({
  selector: 'app-add-new-ticket',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-new-ticket.component.html',
  styleUrl: './add-new-ticket.component.css',
})
export class AddNewTicketComponent {
  constructor(private ticketsService: TicketsService) {}

  addNewTicketForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });

  onSubmit() {
    if (!this.addNewTicketForm.value.title) return;

    const ticket: TicketNew = {
      title: this.addNewTicketForm.value.title || '',
      description: this.addNewTicketForm.value.description || '',
    };

    this.ticketsService.addNewTicket(ticket).subscribe();
  }
}
