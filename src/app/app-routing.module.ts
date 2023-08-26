import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceipeComponent } from './receipe/receipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ReceipeStartComponent } from './receipe-start/receipe-start.component';
import { ReceipeDetailComponent } from './receipe/receipe-detail/receipe-detail.component';
import { ReceipeEditComponent } from './receipe/receipe-edit/receipe-edit.component';

const routes: Routes = [
  { path:'', redirectTo:'/receipes', pathMatch:'full'},
  {
    path: 'receipes', component: ReceipeComponent, children: [
      { path: '', component: ReceipeStartComponent },
      {
        path: 'new', component: ReceipeEditComponent
      }, //Dynamic parameter routes should come at the end
      { path: ':id', component: ReceipeDetailComponent },     
      { path: ':id/edit', component: ReceipeEditComponent }
  ] },
  { path: 'shopping-list', component: ShoppingListComponent, pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
