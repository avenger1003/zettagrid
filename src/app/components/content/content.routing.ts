import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { DatasetsComponent } from './datasets/datasets.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ContentComponent } from './content.component';
// import { GraphsComponent } from './graphs/graphs.component';


const ROUTES: Routes = [
{
  path: '**',
  component: NotfoundComponent,
  data: { breadcrumb: 'Not Found' },
},
];
@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})

export class ContentRoutingModule { }

