import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';

import { BackgroundDirective } from './background.directive';
import { HighlightDirective } from './CustomDirectives/highlight.directive';
import { SetbackgroundDirective } from './CustomDirectives/setbackground.directive';
import { HostlistnerDirective } from './CustomDirectives/hostlistner.directive';
import { HostbindingDirective } from './CustomDirectives/hostbinding.directive';
@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    BackgroundDirective,
    HighlightDirective,
    SetbackgroundDirective,
    HostlistnerDirective,
    HostbindingDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
