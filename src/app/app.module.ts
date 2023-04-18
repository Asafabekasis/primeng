import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { KnobModule } from 'primeng/knob';
import { MainComponent } from './components/main/main.component';
import { SliderModule } from 'primeng/slider';
import { ListboxModule } from 'primeng/listbox';
import { PasswordModule } from 'primeng/password';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmPopupModule } from 'primeng/confirmpopup';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ConfirmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    AutoCompleteModule,
    FormsModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    KnobModule,
    SliderModule,
    ListboxModule,
    PasswordModule,
    ConfirmDialogModule,
    ToastModule,
    ConfirmPopupModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
