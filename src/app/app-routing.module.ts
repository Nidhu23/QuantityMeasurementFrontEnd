import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../../src/app/Components/home/home.component'
import { ChooseTypeComponent } from '../../src/app/Components/choose-type/choose-type.component'
import { HeaderComponent } from '../../src/app/Components/header/header.component'
import { ChooseUnitComponent } from '../../src/app/Components/choose-unit/choose-unit.component'
import { from } from 'rxjs';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'prefix' },
  {
    path: 'home', component: HomeComponent,
    children: [{ path: '', component: HeaderComponent, outlet: 'header' },
    {
      path: '', component: ChooseUnitComponent, outlet: 'chooseUnit'
    },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
