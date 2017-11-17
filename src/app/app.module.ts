import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatMenuModule, MatSelectModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { VersionService } from './common/core/services/version.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    // material
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatToolbarModule
  ],
  providers: [
    VersionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
