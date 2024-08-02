export class Cliente {
  id?: number;
  shared: string;
  nombre: string;
  telefono: string;
  email: string;
  inicio: Date;
  fin: Date;

  constructor(
    shared: string,
    telefono: string,
    nombre: string,
    email: string,
    inicio: Date,
    fin: Date,
    id?: number
  ) {
    this.shared = shared;
    this.nombre = nombre;
    this.telefono = telefono;
    this.email = email;
    this.inicio = inicio;
    this.fin = fin;
    if (id) {
      this.id = id;
    }
  }
}   