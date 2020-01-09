import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StrInterpolationComponent } from './str-interpolation/str-interpolation.component';
import { ClassstyleComponent } from './classstyle/classstyle.component';
import { PushspliceComponent } from './pushsplice/pushsplice.component';
import { EventbindComponent } from './eventbind/eventbind.component';
import { TemplateRefrenceComponent } from './template-refrence/template-refrence.component';
import { TwowaydatabindComponent } from './twowaydatabind/twowaydatabind.component';

@NgModule({
  declarations: [
    AppComponent,
    StrInterpolationComponent,
    ClassstyleComponent,
    PushspliceComponent,
    EventbindComponent,
    TemplateRefrenceComponent,
    TwowaydatabindComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
