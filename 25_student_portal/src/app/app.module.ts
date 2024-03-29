import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './user/homepage/homepage.component';
import { ContactUsComponent } from './user/contact-us/contact-us.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { ProfileComponent } from './user/profile/profile.component';
import { CourseComponent } from './user/course/course.component';
import { PaymentComponent } from './user/payment/payment.component';
import { ResultComponent } from './user/result/result.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LogoutComponent } from './user/logout/logout.component';
import { LoaderComponent } from './loader/loader.component';
import { ChatButtonComponent } from './chat-button/chat-button.component';
import { ChatFormComponent } from './chat-form/chat-form.component';
import { ChatUserComponent } from './chat-user/chat-user.component';
import { ContactUserComponent } from './user/contact-user/contact-user.component'

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ContactUsComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    ProfileComponent,
    CourseComponent,
    PaymentComponent,
    ResultComponent,
    LogoutComponent,
    LoaderComponent,
    ChatButtonComponent,
    ChatFormComponent,
    ChatUserComponent,
    ContactUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
