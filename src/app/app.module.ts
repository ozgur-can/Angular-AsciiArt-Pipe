import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AsciiArtFormComponent } from './ascii-art-form/ascii-art-form.component';
import { AsciiArtPipe } from './shared/ascii-art.pipe';
import { LayoutModule } from '@angular/cdk/layout'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 

@NgModule({
  declarations: [
    AppComponent,
    AsciiArtPipe,
    AsciiArtFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LayoutModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
