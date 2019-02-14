import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import * as usuarioActions from '../actions';
import { of} from 'rxjs';

import { map, switchMap, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';


// Los effectos son servicos de  angualar y su funcion es Escuchan acciones que son mandada al store

@Injectable()
export class UsuarioEffects {

    constructor (
        private actions$: Actions,
        public usuarioService: UsuarioService
    ) {}


@Effect()
cargarUsuario$ = this.actions$
     .pipe(
        ofType(usuarioActions.CARGAR_USUARIO),
         switchMap(action  => {
          //  console.log(action);
              const id = action['id'];
             return this.usuarioService.getUser(id)
             .pipe(
                 map(user => new usuarioActions.CargarUsuarioSuccess(user)),
                 catchError(error => of(new usuarioActions.CargarUsuarioFail(error)))
             );
         })
     );


}
