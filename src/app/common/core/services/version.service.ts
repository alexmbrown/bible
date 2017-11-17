import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Version } from '../../interfaces/version';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class VersionService {

  private version: Version|Observable<Version>;

  constructor(private http: HttpClient) {}

  public load(version: string): void {
    this.version = this.http.get<Version>(`/assets/data/${version}.json`);
    this.version.subscribe((res: Version) => this.version = res);
  }

  public getBooks(): Observable<string[]> {
    return this.getVersion()
      .map((version: Version) => Object.keys(version));
  }

  public getChapters(book: string): Observable<string[]> {
    return this.getVersion()
      .map((version: Version) => {
        if (version.hasOwnProperty(book)) {
          return Object.keys(version[book]);
        } else {
          return [];
        }
      });
  }

  public getText(bookKey: string, chapterKey: string): Observable<string[]> {
    return this.getVersion()
      .map((version: Version) => {
        if (version.hasOwnProperty(bookKey) && version[bookKey].hasOwnProperty(chapterKey)) {
          const chapter: object = version[bookKey][chapterKey];
          return Object.keys(chapter).map((verse: string) => chapter[verse]);
        } else {
          return [];
        }
      });
  }

  private getVersion(): Observable<Version> {
    if (this.version instanceof Observable) {
      return this.version;
    } else {
      return Observable.of(this.version);
    }
  }

}
