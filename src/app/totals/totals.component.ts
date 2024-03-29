import { Component, Input, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-totals',
  templateUrl: './totals.component.html',
  styleUrl: './totals.component.scss',
  providers: [CurrencyPipe]

})
export class TotalsComponent implements OnInit {

  @Input() ksDataInfo: any[] = [];

  constructor(private currencyPipe: CurrencyPipe) { }

  ngOnInit(): void {
    console.log('Invoice Data:', this.ksDataInfo);
  }

  ksCalculateTotalHours(): number {
    let ksTotalHours = 0;
    this.ksDataInfo.forEach(item => {
      ksTotalHours += item.hours;
    });
    return ksTotalHours;
  }

  ksCalculateSubtotal(): number {
    let ksTotal = 0;
    this.ksDataInfo.forEach(item => {
      ksTotal = ksTotal + (item.hours * item.hourlyRate)
    });
    return ksTotal;

  }

  ksCalculateTaxes(): number {
    let ksTaxAmount = 0;
    ksTaxAmount = this.ksCalculateSubtotal() * .13;
    return ksTaxAmount;
  }

}
