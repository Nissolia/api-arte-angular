import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'api-arte';

  ngOnInit(): void {
     $('[data-bs-toggle="popover"]').popover();
  }
  }