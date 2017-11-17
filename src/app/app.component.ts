import { Component, OnInit } from '@angular/core';
import { VersionService } from './common/core/services/version.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public selectedVersion = 'New Living Translation';
  public selectedBook = 'Genesis';
  public selectedChapter = '1';

  constructor(public versionService: VersionService) {}

  public ngOnInit(): void {
    this.versionService.load('NLT');
  }

  public setVersion(key: string, label: string): void {
    this.selectedVersion = label;
    this.versionService.load(key);
  }

}
