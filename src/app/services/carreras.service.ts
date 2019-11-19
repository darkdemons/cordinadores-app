import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrerasService {

  carreras = [{
    codigo_carrera: '2614',
    nombre_carrera: 'Ingenieria de Sistemas'
  },
  {
    codigo_carrera: '2414',
    nombre_carrera: 'Ingenieria de Telecomunicaciones'
  }]

constructor() { }

}
