import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import { ChatMenuComponent } from './component/chat-menu/chat-menu.component';
import { ChatRoomComponent } from './component/chat/chat-room.component';
import { NewHobbyComponent } from './component/new-hobby/new-hobby.component';
import { NewChatRoomComponent } from './component/new-chat-room/new-chat-room.component';
import { RegisterFormComponent } from './component/register-form/register-form.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { AdminValidationComponent } from './component/admin-validation/admin-validation.component';
import { MainManuComponent } from './component/main-manu/main-manu.component';
import { FormsModule }   from '@angular/forms';
import { UserComponent } from './component/user/user.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ChatMenuComponent,
    ChatRoomComponent,
    NewHobbyComponent,
    NewChatRoomComponent,
    RegisterFormComponent,
    LoginPageComponent,
    AdminValidationComponent,
    MainManuComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: MainManuComponent},
      {path: 'register', component: RegisterFormComponent},
      {path: 'adminValidation', component: AdminValidationComponent},
      {path: 'chatMenu/:chat', component: ChatRoomComponent},
      {path: 'chatMenu', component: ChatMenuComponent},
      {path: 'createChatRoom', component: NewChatRoomComponent},
      {path: 'chooseHobby', component: NewHobbyComponent},
      {path: 'login', component: LoginPageComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
