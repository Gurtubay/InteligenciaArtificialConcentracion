import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  raw7pro: string = ' '
  raw9aj7: string = ' '
  raw7r9g: string = ' '
  rawews3: string = ' '
  rawoxp7: string = ' '
  rawnd1w: string = ' '
  rawmjoc: string = ' '
  rawflqg: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Home - Regular Large Guanaco')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Home - Regular Large Guanaco',
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
