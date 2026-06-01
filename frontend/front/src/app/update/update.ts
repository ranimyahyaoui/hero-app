import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Data } from '../services/data';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update.html',
  styleUrls: ['./update.css']
})
export class UpdateComponent implements OnInit {

  id: any;
  luffy: any;

  constructor(
    private route: ActivatedRoute,
    private _data: Data,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this._data.byId(this.id).subscribe({
      next: (res: any) => {
        this.luffy = res;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    });
  } 

  save() {
    this._data.update(this.id, this.luffy).subscribe({
      next: () => {
        Swal.fire({
          title: "Updated successfully",
          icon: "success"
        });
        this.router.navigate(['/list']);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

} 