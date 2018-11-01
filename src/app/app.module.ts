import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user-component/user.component';
import { UserService } from './services/user-service';

@NgModule({
  declarations: [
    AppComponent, UserComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
