import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContainerComponent, HomeDetailComponent } from './home';
import { RecommendContainerComponent } from './recommend';

const routes: Routes = [
    // {
    //     path: 'home', component: HomeContainerComponent, children: [
    //         {
    //             path: '',
    //             redirectTo: 'hot',
    //             pathMatch: 'full'
    //         },
    //         {
    //             path: ':tabLink', component: HomeDetailComponent
    //         }
    //     ]
    // },
    // {
    //     path:'recommend',component : RecommendContainerComponent
    // },
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
