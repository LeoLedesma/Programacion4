import { Injectable } from '@angular/core';
import { Clase, Ejercicio } from './shared.interface';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private _clases: Clase[] = [
    {
      nombre: "Clase 1",
      uri: "clase1",
      ejercicios:
        [{
          nombre: "Ejercicio 1",
          uri: "ejercicio1"
        },
        {
          nombre: "Ejercicio 2",
          uri: "ejercicio2"
        }
        ]
    },
    {
      nombre: "Clase 2",
      uri: "clase2",
      ejercicios: [{
        nombre: "Ejercicio 3",
        uri: "ejercicio3"
      },
      {
        nombre: "Ejercicio 4",
        uri: "ejercicio4"
      }]
    }
  ]

  get Clases() {
    return [...this._clases];
  }

  constructor() { }

  busqueda(query: string): Clase[] {
  if(query.length === 0) return this.Clases

  return this.Clases
      .map((c) => ({
        ...c,
        ejercicios: c.ejercicios.filter((e) =>
          e.nombre.toLowerCase().includes(query.toLowerCase())
        ),
      }))
      .filter((c) => c.ejercicios.length > 0);
  }


}
