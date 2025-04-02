import { Routes } from '@angular/router';
import DashboardComponent from './pages/dashboard/dashboard.component';
import { DocenteComponent } from './pages/docente/docente.component';
import { TutorComponent } from './pages/tutor/tutor.component';
import { InicioComponent } from './pages/docente/inicio/inicio.component';
import { EstudianteComponent } from './pages/docente/estudiante/estudiante.component';
import { DerivacionesComponent } from './pages/docente/derivaciones/derivaciones.component';
import { HistorialComponent } from './pages/docente/historial/historial.component';

export const routes: Routes = [
    {
        path:'',
        loadComponent:()=>import('./pages/auth/auth.component')
    },
    { path: 'admin-dashboard',component: DashboardComponent },

    { path: 'docente', component: DocenteComponent,
        children: [
            { path: '', redirectTo: 'inicio', pathMatch: 'full' },
             // Redirige a "inicio" por defecto
            { path: 'inicio', component: InicioComponent  },
            { path: 'estudiantes', component: EstudianteComponent },
            { path: 'derivaciones', component: DerivacionesComponent },
            { path: 'historial', component: HistorialComponent }
          ] 
    },
    { path: 'tutor', component: TutorComponent },

//   { path: 'profe-dashboard', component: DashboardComponent },
//   { path: 'tutor-dashboard', component: DashboardComponent },
    // {
    //     path:'dashboard',
    //     loadComponent:() =>import('./pages/dashboard/dashboard.component'),
    //     children:[
    //         {
    //             path:''
    //         }
    //     ]
    // }
];
