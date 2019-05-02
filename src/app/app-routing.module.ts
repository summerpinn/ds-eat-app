import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopListComponent } from './shop-list/shop-list.component'; 
import { ShopCreateComponent } from './shop-create/shop-create.component'; 
import { LoginComponent } from './login/login.component';
import { DevCmdComponent } from './dev/dev-cmd/dev-cmd.component';  

const routes: Routes = [
  { path: '', component: ShopListComponent },
  { path: 'create', component: ShopCreateComponent }, 
  { path: 'login', component: LoginComponent },
  { path: 'run-dev-cmd', component: DevCmdComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
