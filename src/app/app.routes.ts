import {RouterModule, Routes } from '@angular/router';


import { PagesComponent } from './page/pages.component';

import { DashbordComponent } from './page/dashbord/dashbord.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './page/progress/progress.component';
import { Grafico1Component } from './page/grafico1/grafico1.component';
import { patch } from 'webdriver-js-extender';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegisterComponent } from './login/register.component';


const appRoutes: Routes = [
{path : '',
       component: PagesComponent,
       children : [
        {path : 'dashboard', component: DashbordComponent},
        {path : 'progress', component: ProgressComponent},
        {path : 'grafico1', component: Grafico1Component},
        {path : '', redirectTo: '/dashboard', pathMatch: 'full' }

       ]},

{path : 'login', component: LoginComponent},
{path : 'register', component: RegisterComponent},

{path : '**', component: NopagefoundComponent }
];


export const AP_ROUTERS = RouterModule.forRoot(appRoutes, { useHash: true});
