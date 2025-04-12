import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private apiKey = '8DG74RUEXB1GHLWJ';
  private baseUrl = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY';

  constructor(private http: HttpClient) {}

  getAllStocks(symbols: string){
      const url = `${this.baseUrl}&symbol=${symbols}&apikey=${this.apiKey}`;
      return this.http.get(url);
  }
}
  