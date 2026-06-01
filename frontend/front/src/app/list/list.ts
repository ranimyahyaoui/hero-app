import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Data } from '../services/data';
import Swal from 'sweetalert2';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list.html',
})
export class List implements OnInit {

  heros: any = [];

  constructor(private _data: Data, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this._data.all().subscribe({
      next: (res: any) => {
        console.log("HEROS Response:", res);
        console.log("Is Array:", Array.isArray(res));
        // Handle both direct array response and wrapped response
        this.heros = Array.isArray(res) ? res : (res?.data || []);
        console.log("Heros assigned:", this.heros);
        this.cdr.detectChanges();
      },
      error: (err) => console.log(err)
    });
  }

  deleteHero(id: any) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this._data.delete(id).subscribe({
          next: () => {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            this.ngOnInit();
          },
          error: (err) => {
            Swal.fire({
              title: "Error!",
              text: "Failed to delete the hero.",
              icon: "error"
            });
            console.log(err);
          }
        });
      }
    });
  }
}