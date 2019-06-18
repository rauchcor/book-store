import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShallnotpassComponent } from './core/components/shallnotpass/shallnotpass.component';

const routes: Routes = [
{ path: 'home', loadChildren: './modules/home/home.module#HomeModule' },
{ path: 'shallnotpass', component: ShallnotpassComponent},
{ path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
