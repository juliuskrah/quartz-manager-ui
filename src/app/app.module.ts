import { BrowserModule } from '@angular/platform-browser';
import {
  MatMenuModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatTableModule,
  MatDividerModule,
  MatDialogModule,
  MatGridListModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { QuartzService } from './quartz.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './interceptors/auth.service';
import { MenuComponent } from './menu/menu.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [AppComponent, MenuComponent, ModalComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatDividerModule,
    MatDialogModule,
    MatGridListModule,
    FormsModule
  ],
  exports: [
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule
  ],
  providers: [
    QuartzService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthService,
      multi: true
    }
  ],
  entryComponents: [ModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
