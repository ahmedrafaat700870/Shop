import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let body = document.body as HTMLDivElement;
    let main = document.createElement('script');
    main.src = '../../assets/js/datatables/custom-basic.js';
    main.innerHTML = '';
    main.async = true;
    main.defer = true;
    body.appendChild(main);
    main = document.createElement('script');
    main.src = '../../assets/js/admin-script.js';
    body.appendChild(main);
  }
}
