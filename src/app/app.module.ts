import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//MATERIAL DESIGN COMPONENT
import {MatToolbarModule} from '@angular/material/toolbar'; //TAMBAHAN BARU
import {MatButtonModule} from '@angular/material/button'; 
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { TambahAlamatComponent } from './tambah-alamat/tambah-alamat.component';
import { DialogKonfirmasiComponent } from './dialog-konfirmasi/dialog-konfirmasi.component';
import { DetailAlamatComponent } from './detail-alamat/detail-alamat.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    TambahAlamatComponent,
    DetailAlamatComponent,
    DialogKonfirmasiComponent
  ],
  entryComponents: [
    TambahAlamatComponent,
    DetailAlamatComponent,
    DialogKonfirmasiComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, //tambahan baru
    MatButtonModule, 
    MatCardModule, 
    MatListModule, 
    MatIconModule, 
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule, //tambahan modul baru
    FormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
