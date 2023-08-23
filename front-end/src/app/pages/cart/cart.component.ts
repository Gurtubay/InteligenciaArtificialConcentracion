import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-cart',
  templateUrl: 'cart.component.html',
  styleUrls: ['cart.component.css'],
})
export class Cart {
  rawqsu2: string = ' '
  rawleew: string = ' '
  rawyy6l: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Cart - Regular Large Guanaco')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Cart - Regular Large Guanaco',
      },
    ])
  }
}
