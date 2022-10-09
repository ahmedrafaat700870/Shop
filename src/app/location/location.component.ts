import { Component, OnInit } from '@angular/core';
import { TbLocation } from 'src/interfaces/Location.interface';
import { LocationServices } from 'src/services/Location.services';
import { Router } from '@angular/router';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent implements OnInit {
  constructor(
    private locationServices: LocationServices,
    private routes: Router
  ) {}

  Locations: Array<TbLocation> = [];
  ngOnInit(): void {
    this.locationServices.GetAll().subscribe((data) => {
      this.Locations = data;
      console.log(data, 'data from api');
    });

    let body = document.body as HTMLBodyElement;
    let script: HTMLScriptElement = document.createElement(
      'script'
    ) as HTMLScriptElement;
    script.src = '../../assets/js/data-table.js';
    script.innerHTML = '';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }
  GoToTour(id: number): void {
    console.log(id);
  }
  Edit(id: number): void {
    this.routes.navigate(['/Edit' + '/' + id]);
  }

  Delete(id: number): void {
    console.log(id);
    this.locationServices.Delete(id).subscribe(
      (data) => {
        if (data !== null)
          this.locationServices.GetAll().subscribe(
            (data) => {
              this.Locations = data;
            },
            (error) => {}
          );
      },
      (error) => {}
    );
  }
}
