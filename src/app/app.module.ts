import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler } from "@angular/core";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipoListComponent } from './components/equipo-list/equipo-list.component';
import { EquipoService } from './services/equipo.service';
import { PaisService } from './services/pais.service';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FileUploadModule } from 'primeng/fileupload';
import { EquipoDetailComponent } from './components/equipo-detail/equipo-detail.component';

import { CustomErrorHandle } from './common/custom-error-handle';

import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

@NgModule({
  declarations: [
    AppComponent,
    EquipoListComponent,
    EquipoDetailComponent,
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
    MessageModule
  ],
  providers: [
    PaisService, 
    EquipoService,
    {
      provide: ErrorHandler, 
      useClass: CustomErrorHandle
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
