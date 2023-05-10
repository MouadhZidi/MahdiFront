import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectgridComponent } from './projectgrid/projectgrid.component';
import { ProjectlistComponent } from './projectlist/projectlist.component';


const routes: Routes = [
    {
        path: 'grid',
        component: ProjectgridComponent
    },
    {
        path: 'list',
        component: ProjectlistComponent
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectsRoutingModule {}
