import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
  })
  export class AlertaService {

     _tituloGeneral: string = 'ALIANZA';

     info(mensaje: string) {
        Swal.fire({
          title: this._tituloGeneral,
          text: mensaje,
          icon: 'info',
          customClass: {
            confirmButton: 'swalBtnColor',
            icon: 'swalIconColor'
          },
        });
      }
       succes(mensaje: string) {
        Swal.fire({
          title: this._tituloGeneral,
          text: mensaje,
          icon: 'success',
          customClass: {
            confirmButton: 'swalBtnColor',
            icon: 'swalIconColor'
          },
        });
      }
       warning(mensaje: string) {
        Swal.fire({
          title: this._tituloGeneral,
          text: mensaje,
          icon: 'warning',
          customClass: {
            confirmButton: 'swalBtnColor',
            icon: 'swalIconColor'
          },
        });
      }
       error(mensaje: string) {
        Swal.fire({
          title: this._tituloGeneral,
          text: mensaje,
          icon: 'error',
          customClass: {
            confirmButton: 'swalBtnColor',
            icon: 'swalIconColor'
          },
        });
      }
  }