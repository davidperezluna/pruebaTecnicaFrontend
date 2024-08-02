import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatTableModule,
    MatListModule,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {}
