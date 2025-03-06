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
import { blogReducer } from './store/Blog/Blog.reducer';
import { appReducer } from './store/global.state';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { BlogEffects } from './store/Blog/Blog.effects';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { GlobalEffects } from './store/global.effect';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from './store/router/customSerilizer';
@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NavBarModule,
    StoreModule.forRoot(appReducer, {}),
    BrowserAnimationsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode(), trace:true }),
    EffectsModule.forRoot([BlogEffects,GlobalEffects]),
    HttpClientModule,
    MatSnackBarModule,
    MaterialModule,
    StoreRouterConnectingModule.forRoot({
      serializer:CustomSerializer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
