import { Component } from '@angular/core';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent {
  stockList = [
    {
      symbol: 'AAPL',
      company: 'Apple Inc.',
      price: 176.23,
      change: -0.45,
      percentChange: -0.34
    },
    {
      symbol: 'GOOGL',
      company: 'Alphabet Inc.',
      price: 2900.12,
      change: 12.45,
      percentChange: 0.43
    },
    {
      symbol: 'AAPL',
      company: 'Apple Inc.',
      price: 176.23,
      change: -0.45,
      percentChange: -0.25
    },
    {
      symbol: 'GOOGL',
      company: 'Alphabet Inc.',
      price: 2900.12,
      change: 12.45,
      percentChange: 0.43
    },
    {
      symbol: 'MSFT',
      company: 'Microsoft Corporation',
      price: 340.15,
      change: 2.78,
      percentChange: 0.82
    },
    {
      symbol: 'AMZN',
      company: 'Amazon.com Inc.',
      price: 3125.50,
      change: -15.12,
      percentChange: -0.48
    },
    {
      symbol: 'TSLA',
      company: 'Tesla Inc.',
      price: 842.33,
      change: 7.88,
      percentChange: 0.94
    },
    {
      symbol: 'NFLX',
      company: 'Netflix Inc.',
      price: 870.40,
      change: 2.13,
      percentChange: 0.74
    },
    {
      symbol: 'NVDA',
      company: 'NVIDIA Corporation',
      price: 905.67,
      change: -5.22,
      percentChange: -0.57
    },
    {
      symbol: 'META',
      company: 'Meta Platforms Inc.',
      price: 372.41,
      change: 4.76,
      percentChange: 1.29
    },
    {
      symbol: 'INTC',
      company: 'Intel Corporation',
      price: 35.60,
      change: -0.12,
      percentChange: -0.34
    },
    {
      symbol: 'AMD',
      company: 'Advanced Micro Devices',
      price: 108.34,
      change: 3.21,
      percentChange: 3.05
    }
  ];
  
}
