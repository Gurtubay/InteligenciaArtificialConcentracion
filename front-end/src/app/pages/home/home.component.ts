import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  rawq8de: string = ' '
  rawh0xr: string = ' '
  rawzcmd: string = ' '
  rawpqwt: string = ' '
  raw6jl1: string = ' '
  rawn7c0: string = ' '
  raw41l5: string = ' '
  rawic3q: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Home - Regular Large Guanaco')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Home - Regular Large Guanaco',
      },
    ])
  }
}
