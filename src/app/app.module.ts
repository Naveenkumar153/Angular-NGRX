import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ButtonComponent } from './components/button/button.component';
import { CounterComponent } from './components/counter/counter.component';
import { counterReducer } from './store/Counter/counter.reducer';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NavBarModule } from './components/nav-bar/nav-bar.module';
import { BlogComponent } from './pages/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavBarModule,
    StoreModule.forRoot({
      counter:counterReducer,
    }, {}),
    BrowserAnimationsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode(), trace:true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
