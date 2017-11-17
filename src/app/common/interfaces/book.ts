import { Chapter } from './chapter';

export interface Book {
  [key: string]: Chapter;
}
