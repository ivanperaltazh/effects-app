import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';

import * as usuarioActions from '../../store/actions';
import { Usuario } from 'src/app/models/usuario.model';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  user: Usuario;
  loading: boolean;
  error: any;


  constructor(private router: ActivatedRoute,
              private store: Store<AppState>) { } // ActivatedRoute: me da acceso a ala ruta activa

  ngOnInit() {
    this.router.params
        .subscribe( params => {
          const id = params['id'];
          this.store.dispatch(new usuarioActions.CargarUsuario(id));
         // console.log(id);
        });

        this.store.select('usuario')
            .subscribe( usuario => {
              this.user = usuario.user;
              this.loading = usuario.loading;
              this.error = usuario.error;
            });
  }

}

