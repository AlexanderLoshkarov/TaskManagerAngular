export type TicketStatus = 0 | 1;

export type Ticket = {
  id: string;
  title: string;
  description: string;
  ticketStatus: TicketStatus;
  createdAt: string;
  userName: string | null;
};
