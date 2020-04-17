import { User } from './user.model';

export interface Message {
   text: string;
   date: Date;
   sender: User;
}