import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PublishComponent } from './components/publish/publish.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'publish', component: PublishComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
