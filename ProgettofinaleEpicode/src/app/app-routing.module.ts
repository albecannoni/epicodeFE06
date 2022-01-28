import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientTableComponent } from './client-table/client-table.component';
import { EditclientComponent } from './editclient/editclient.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'clients', component: ClientTableComponent},
{ path: 'clients/:id', component: ClientDetailComponent},
{ path: 'clients/:id/editClient', component: EditclientComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
