import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TempledrivenformComponent } from './templedrivenform/templedrivenform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';

@NgModule({
  declarations: [
    AppComponent,
    TempledrivenformComponent,
    ReactiveformComponent,
    FormbuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
