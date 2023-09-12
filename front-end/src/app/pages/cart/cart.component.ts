import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-cart',
  templateUrl: 'cart.component.html',
  styleUrls: ['cart.component.css'],
})
export class Cart {
  rawj0lg: string = ' '
  raw14eg: string = ' '
  rawwxih: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Cart - Regular Large Guanaco')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Cart - Regular Large Guanaco',
      },
    ])
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
