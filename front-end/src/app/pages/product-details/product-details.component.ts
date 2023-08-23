import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'product-details',
  templateUrl: 'product-details.component.html',
  styleUrls: ['product-details.component.css'],
})
export class ProductDetails {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Product-Details - Regular Large Guanaco')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Product-Details - Regular Large Guanaco',
      },
    ])
  }
}
