import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import { ChatMenuComponent } from './Component/chat-menu/chat-menu.component';
import { ChatComponent } from './Component/chat/chat.component';
import { NewHobbyComponent } from './Component/new-hobby/new-hobby.component';
import { NewChatRoomComponent } from './Component/new-chat-room/new-chat-room.component';
import { RegisterFormComponent } from './Component/register-form/register-form.component';
import { LoginPageComponent } from './Component/login-page/login-page.component';
import { AdminValidationComponent } from './Component/admin-validation/admin-validation.component';
import { MainManuComponent } from './Component/main-manu/main-manu.component';
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
