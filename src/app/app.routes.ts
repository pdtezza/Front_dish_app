import { Routes } from '@angular/router';
import { DishFormComponent } from './components/dish-form/dish-form.component';

export const routes: Routes = [
    { path: 'edit-dish/:id', component: DishFormComponent }
];
