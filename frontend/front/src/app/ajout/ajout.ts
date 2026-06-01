import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Data } from '../services/data';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ajout.html',
})
export class Ajout {
  luffy={
      title : '',
      power : 0,
      img : ''
  }

  constructor(private _data:Data, private router: Router ){}

  ajout() {
    this._data.create(this.luffy).subscribe({
      next: (res)=>{
        Swal.fire({
            title: "Added succesfully",
            icon: "success"
        });
        this.router.navigate(['/list'])
      },
      error: (err)=>{
        Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
        });
      }
    })
  } 

}