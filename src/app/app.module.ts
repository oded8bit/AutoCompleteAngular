import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NodeSearchService } from "./services/node-search.service";
import { SearchService } from "./services/search.service";
import { AppComponent } from './app.component';
import { AutocomlpeteComponent } from './autocomlpete/autocomlpete.component';

@NgModule({
  declarations: [
    AppComponent,
    AutocomlpeteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SearchService, NodeSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
