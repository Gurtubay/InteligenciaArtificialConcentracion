import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-payment',
  templateUrl: 'payment.component.html',
  styleUrls: ['payment.component.css'],
})
export class Payment {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Payment - Regular Large Guanaco')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Payment - Regular Large Guanaco',
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
