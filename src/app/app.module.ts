import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler } from "@angular/core";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamListComponent } from './components/team-list/team-list.component';
import { TeamService } from './services/team.service';
import { CountryService } from './services/country.service';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FileUploadModule } from 'primeng/fileupload';
import { TeamDetailComponent } from './components/team-detail/team-detail.component';

import { CustomErrorHandle } from './common/custom-error-handle';

import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {GrowlModule} from 'primeng/growl';
import { TeamChampionDetailComponent } from './components/team-champion-detail/team-champion-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamListComponent,
    TeamDetailComponent,
    TeamChampionDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    BrowserAnimationsModule,
    AutoCompleteModule,
    FileUploadModule,
    MessagesModule,
    MessageModule,
    GrowlModule
  ],
  providers: [
    CountryService, 
    TeamService,
    {
      provide: ErrorHandler, 
      useClass: CustomErrorHandle
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
