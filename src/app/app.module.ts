import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AP_ROUTERS } from './app.routes';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { DashbordComponent } from './page/dashbord/dashbord.component';
import { ProgressComponent } from './page/progress/progress.component';
import { Grafico1Component } from './page/grafico1/grafico1.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumsComponent } from './shared/breadcrums/breadcrums.component';
import { PagesComponent } from './page/pages.component';
import { RegisterComponent } from './login/register.component';








@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent,
    DashbordComponent,
    ProgressComponent,
    Grafico1Component,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    BreadcrumsComponent,
    PagesComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    AP_ROUTERS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
