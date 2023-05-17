import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppBadgeComponent } from './components/app-badge/app-badge.component';
import { AppCardComponent } from './components/app-card/app-card.component';
import { AppColorDirective } from './directives/app-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    AppColorDirective,
    AppBadgeComponent,
    AppCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
