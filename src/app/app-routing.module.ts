import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerationOneComponent } from './generation-one/generation-one.component';

const routes: Routes = [
  {
    path: 'generationOne',
    component: GenerationOneComponent,
    data: { title: 'Gen One' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
