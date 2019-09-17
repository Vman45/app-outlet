import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from '../home/home.component';
import { AppDetailComponent } from '../app-detail/app-detail.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [{
            path: '',
            component: HomeComponent
        }, {
            path: 'app',
            component: AppDetailComponent
        }]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class MainRoutingModule { }
