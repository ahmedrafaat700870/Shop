import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let body = document.body as HTMLBodyElement;
    let script = document.createElement('script');
    script.src = '../../assets/js/dashboard.js';
    script.innerHTML = '';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }
}
