import { Book } from './book';

export interface Version {
  [key: string]: Book;
}
