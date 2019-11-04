import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatContainerComponent } from './components/chat-container/chat-container.component';


@NgModule({
  declarations: [
    ChatContainerComponent
  ],
  imports: [
    SharedModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
