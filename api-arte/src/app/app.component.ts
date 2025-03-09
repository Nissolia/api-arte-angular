import { Component, OnInit } from '@angular/core';
import { ArtworksService } from '../services/artworks.service';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Se corrige "styleUrl" -> "styleUrls"
})
export class AppComponent implements OnInit {
  title = 'api-arte';
  artworks: any[] = []; // Se declara la variable artworks

  constructor(private artworksService: ArtworksService) {}

  ngOnInit(): void {
    // Inicializa Bootstrap Popover
    $('[data-bs-toggle="popover"]').popover();

    // Llama al servicio para obtener los datos de las obras de arte
    this.artworksService.getArtworks().subscribe(response => {
      this.artworks = response.data; // La API devuelve un objeto con una propiedad "data"
      console.log(this.artworks);
    });
  }
}
