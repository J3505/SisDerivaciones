import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { AuthService } from '../../services/auth.service';
// import { Router } from 'express';


@Component({
  selector: 'app-docente',
  imports: [RouterOutlet],
  templateUrl: './docente.component.html',
  styleUrl: './docente.component.scss'
})
export class DocenteComponent {
  // constructor (public authService: AuthService, private router: Router){}

  // activeMenu: string = 'inicio'; // Para resaltar el menú activo



  // setActiveMenu(menu: string): void {
  //   this.activeMenu = menu;
  // }

  // logout(): void {
  //   this.authService.logout();
  //   this.router.navigate(['/'])
  //   // this.router.navigate(['/']); 
  // }
}
