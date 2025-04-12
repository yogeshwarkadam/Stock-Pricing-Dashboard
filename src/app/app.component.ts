import { Component, ElementRef, OnInit } from '@angular/core';
import { StockService } from './stock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'stoke-pricing-dashboard';
  newStockTicker: string = '';
  stockList: any[] = [];
  data: any;
  options: any;
  showDiv: boolean = false;
  showChart: boolean = false;
  constructor(private stockService: StockService) { }

  ngOnInit() {
    
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    
    this.data = {
      labels: [],  // initially empty
      datasets: [
        {
          label: 'Stock',
          data: [],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          tension: 0.4
        }
      ]
    };
    
    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };
  }
  
  addStock() {
    const ticker = this.newStockTicker.trim().toUpperCase();
    if (!ticker) return;
    
    const stockData = this.mockStockLookup(ticker);
    if (stockData) {
      this.stockList.push(stockData);
    }
    
    this.newStockTicker = '';
    console.log(this.stockList);
  }
  
  removeStock(index: number) {
    this.stockList.splice(index, 1);
  }

  deleteRowById(rowId: string): void {
    const row = document.getElementById(rowId);
    if (row) {
      row.remove();
    }
  }

  mockStockLookup(ticker: string) {
    const fakeData: Record<string, any> = {
      NFLX: { companyName: 'Netflix Inc.', price: 402.78, change: -1.34 },
      IBM: { companyName: 'International Business Machines', price: 136.90, change: 0.38 },
      JPM: { companyName: 'JPMorgan Chase & Co.', price: 161.30, change: -0.12 },
      AAPL: { companyName: 'Apple Inc.', price: 191.62, change: 1.08 },
      MSFT: { companyName: 'Microsoft Corporation', price: 322.34, change: -2.14 },
      GOOGL: { companyName: 'Alphabet Inc.', price: 2901.56, change: 3.45 },
      AMZN: { companyName: 'Amazon.com Inc.', price: 125.34, change: 0.89 },
      TSLA: { companyName: 'Tesla Inc.', price: 210.22, change: -4.75 },
      META: { companyName: 'Meta Platforms Inc.', price: 312.45, change: 2.36 },
      NVDA: { companyName: 'NVIDIA Corporation', price: 845.67, change: 6.88 },
      ORCL: { companyName: 'Oracle Corporation', price: 106.33, change: 0.12 },
      DIS: { companyName: 'The Walt Disney Company', price: 98.56, change: -0.67 },
      BA: { companyName: 'Boeing Co.', price: 191.44, change: 1.54 },
      INTC: { companyName: 'Intel Corporation', price: 35.90, change: -0.20 },
      CSCO: { companyName: 'Cisco Systems Inc.', price: 49.85, change: 0.07 }
    };

    const data = fakeData[ticker] || alert('Invalid ticker')
    if (data == undefined) {

    } else {
      return { ticker, ...data };
    }

  }

  showStockData(stockData: any): void {
    this.stockService.getAllStocks(stockData).subscribe(
      (response: any) => {
        console.log('Stock Data:', response);

        const timeSeries = response['Time Series (Daily)'];
        if (!timeSeries) {
          console.error('No "Time Series (Daily)" found in response.');
          return;
        }

        const dates = Object.keys(timeSeries).sort(); // Sort for chronological order (oldest to newest)
        const labels: string[] = [];
        const prices: number[] = [];

        dates.forEach(date => {
          const dailyData = timeSeries[date];
          if (dailyData && dailyData["4. close"]) {
            console.log(date);

            labels.push(date);
            console.log(parseFloat(dailyData["4. close"]));

            prices.push(parseFloat(dailyData["4. close"]));
          }
        });

        const documentStyle = getComputedStyle(document.documentElement);

        this.data = {
          labels: labels,
          datasets: [
            {
              label: 'Stock Price',
              data: prices,
              fill: false,
              borderColor: documentStyle.getPropertyValue('--blue-500'),
              tension: 0.4
            }
          ]
        };
      },
      error => {
        console.error('Error fetching stock data:', error);
      }
    );
  }

  toggleDiv() {
    this.showDiv = !this.showDiv;
    console.log(this.showDiv);
  }

  toggleChart() {
    this.showChart = !this.showChart;
    console.log(this.showChart);
  }
}
