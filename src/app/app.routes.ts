import { Routes } from '@angular/router';
import { ClientesComponent } from '../app/modulos/cliente/pagina/clientes.component';

export const routes: Routes = [
    { path: '', redirectTo: '/clients', pathMatch: 'full' },
    { path: 'clients', component: ClientesComponent }
];
