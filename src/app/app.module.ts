import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule, ParamInterceptor } from './home';
import { NotificationInterceptor } from './home/interceptors/notification.interceptor';
import { RecommendModule } from './recommend';
import { MyModule } from './my';
import { ChatModule } from './chat';
import { ProductModule } from './product';
import { DialogModule } from './dialog';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    HomeModule,
    RecommendModule,
    ProductModule,
    MyModule,
    ChatModule,
    HttpClientModule,
    DialogModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : ParamInterceptor,
      multi: true
    },
    {
      provide : HTTP_INTERCEPTORS,
      useClass: NotificationInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
