import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StrInterpolationComponent } from './str-interpolation/str-interpolation.component';
import { ClassstyleComponent } from './classstyle/classstyle.component';
import { PushspliceComponent } from './pushsplice/pushsplice.component';
import { EventbindComponent } from './eventbind/eventbind.component';

@NgModule({
  declarations: [
    AppComponent,
    StrInterpolationComponent,
    ClassstyleComponent,
    PushspliceComponent,
    EventbindComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
