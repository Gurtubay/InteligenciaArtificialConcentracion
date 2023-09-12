import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8080'; // Reemplaza con la URL de tu servidor Flask

  constructor(private http: HttpClient) { }

  public getHolaMundo() {
    return this.http.get(`${this.apiUrl}/holamundo`);
  }

  public postModelo(data: any) {
    return this.http.post(`${this.apiUrl}/modelo`, data);
  }

  public postModeloForm(data: any) {
    return this.http.post(`${this.apiUrl}/modeloForm`, data);
  }
}