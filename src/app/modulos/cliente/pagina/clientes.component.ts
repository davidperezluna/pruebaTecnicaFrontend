import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { ClientesDialogComponent } from '../dialog/clientes-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Cliente } from '../../../core/moledo/cliente.model';
import { GenericResponse } from '../../../core/moledo/generic-response';
import { ClienteService } from '../../../core/servicio/cliente.service';
import { AlertaService } from '../../../core/servicio/alerta.service';
import { MatTableModule  } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from '../../../core/menu/menu.component';
import { TablaClienteComponent } from '../tabla-cliente/tabla-cliente.component';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatTableModule,
    MatListModule,
    MenuComponent,
    TablaClienteComponent,
  ],

  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css',
})
export class ClientesComponent {
  clientes: Cliente[] = []; // Almacenará la lista de clientes
  displayedColumns: string[] = [
    'sharedKey',
    'nombre',
    'telefono',
    'email',
    'fechaInicio',
    'fechaFin',
    'actions',
  ];
  searchKey: string = '';

  constructor(
    public dialog: MatDialog,
    private clienteService: ClienteService,
    private alertaService: AlertaService
  ) {}

  ngOnInit(): void {
    this.cargarClientes();
  }

  buscarPorSharedKey(): void {
    if (this.searchKey) {
      this.clienteService.buscarClientePorSharedKey(this.searchKey).subscribe({
        next: (response: GenericResponse) => {
          let data: any = response.data;
          let message: any = response.message;
          this.clientes = [data]; // Actualiza la tabla solo con el cliente encontrado
          this.alertaService.succes(message);
          this.searchKey = '';
        },
        error: (error) => {
          this.alertaService.error(error.error.message);
          this.cargarClientes();
        },
      });
    } else {
      this.cargarClientes(); // Cargar todos los clientes si la búsqueda está vacía
    }
  }

  cargarClientes(): void {
    this.clienteService.obtenerTodosLosClientes().subscribe({
      next: (response: GenericResponse) => {
        //debugger;
        if (response.success && response.data) {
          let data: any = response.data;
          this.clientes = data;
        } else {
          console.error('Error al cargar los datos:', response.message);
        }
      },
      error: (error) => {
        this.alertaService.error(error.error.message);
      },
    });
  }

  openDialog(cliente?: Cliente): void {
    const dialogRef = this.dialog.open(ClientesDialogComponent, {
      width: '350px',
      data: cliente,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.cargarClientes(); // Recargar la lista de clientes si el diálogo se cerró con un resultado (por ejemplo, cliente actualizado o creado)
      }
    });
  }
}
