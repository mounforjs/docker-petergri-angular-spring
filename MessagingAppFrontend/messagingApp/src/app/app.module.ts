import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import { ChatMenuComponent } from './chat-menu/chat-menu.component';
import { ChatComponent } from './chat/chat.component';
import { NewHobbyComponent } from './new-hobby/new-hobby.component';
import { NewChatRoomComponent } from './new-chat-room/new-chat-room.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminValidationComponent } from './admin-validation/admin-validation.component';
import { MainManuComponent } from './main-manu/main-manu.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChatMenuComponent,
    ChatComponent,
    NewHobbyComponent,
    NewChatRoomComponent,
    RegisterFormComponent,
    LoginPageComponent,
    AdminValidationComponent,
    MainManuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: MainManuComponent},
      {path: 'register', component: RegisterFormComponent},
      {path: 'login', component: LoginPageComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
