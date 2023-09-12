import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Location } from '@angular/common';

@Component({
  selector: 'app-error',
  templateUrl: 'error.component.html',
  styleUrls: ['error.component.css'],
})
export class Error {
  constructor(private title: Title, private meta: Meta, private location: Location) {
    this.title.setTitle('Error - Regular Large Guanaco');
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Error - Regular Large Guanaco',
      },
    ]);
  }

  goBack() {
    this.location.back();
  }

  public obtenerHolaMundo() {
    this.apiService.getHolaMundo().subscribe((response: any) => {
      console.log(response);
    });
  }

  public enviarDatos() {
    const data = {
      pH: 3.5,
      sulphates: 0.8,
      alcohol: 12.5
    };

    this.apiService.postModelo(data).subscribe((response: any) => {
      console.log(response);
    });
  }
}