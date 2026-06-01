import { Routes } from '@angular/router';
import { List } from './list/list';
import { Ajout } from './ajout/ajout';
import { UpdateComponent } from './update/update';
import { Notfound } from './notfound/notfound';

export const routes: Routes = [
    {path: '', redirectTo: 'list' , pathMatch:'full'},
    {path :'list', component: List},
    {path : 'ajout', component: Ajout},
    {path: 'update/:id', component: UpdateComponent},
    {path: '**' , component: Notfound}

];
