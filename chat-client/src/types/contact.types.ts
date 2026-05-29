import type { Message } from './message.types';

export interface Contact {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  online: boolean;
  messages: Message[];
}