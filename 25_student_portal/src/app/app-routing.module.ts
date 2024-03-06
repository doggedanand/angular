import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './user/homepage/homepage.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { ContactUsComponent } from './user/contact-us/contact-us.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { ProfileComponent } from './user/profile/profile.component';
import { GuardGuard } from './guard.guard';
import { LogoutComponent } from './user/logout/logout.component';
import { LoaderComponent } from './loader/loader.component';
import { ChatFormComponent } from './chat-form/chat-form.component';
import { ChatUserComponent } from './chat-user/chat-user.component';

const routes: Routes = [
  { path: "", component: HomepageComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "contact", component: ContactUsComponent },
  { path: "dashboard", canActivate: [GuardGuard], component: DashboardComponent },
  { path: "profile", component: ProfileComponent },
  { path: "logout", component: LogoutComponent },
  { path: 'loader', component: LoaderComponent },
  { path: 'chat-form', component: ChatFormComponent },
  { path: 'chat-user' , component: ChatUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
