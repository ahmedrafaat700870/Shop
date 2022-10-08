import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-body',
  templateUrl: './page-body.component.html',
  styleUrls: ['./page-body.component.css'],
})
export class PageBodyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let body = document.body as HTMLDivElement;
    let script = document.createElement('script');
    script.src = '../../../assets/js/dashboard/default.js';
    script.innerHTML = '';
    script.async = true;
    script.defer = true;
    body.appendChild(script);

    let main = document.createElement('script');
    main.src = '../../../assets/js/admin-script.js';
    main.innerHTML = '';
    main.async = true;
    main.defer = true;
    body.appendChild(main);
  }
}
