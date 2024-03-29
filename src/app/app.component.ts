import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  ksTitle = 'Assignment2-Emoji-Invoice';
  ksMainImage = "../assets/images/emoji.png";
  ksInvoiceData = {
    ksName: 'Kexin Sun',
    ksAddress: "80 Cherry St.",
    ksInvoiceNumber: "101478446",
    ksInvoiceDate: new Date(),
    ksInvoiceItems: [
      {
        name: "Web Design",
        hours: 20,
        hourlyRate: 50
      },
      {
        name: "Web Development",
        hours: 100,
        hourlyRate: 75
      },
      {
        name: "Project Management",
        hours: 12,
        hourlyRate: 55.30
      }
    ],
    ksPaymentType: ["Cash", "Credit Card", "BitCoin", "Interact"],
    ksTaxAmount: 13
  };

  ksSelectedPaymentType: string = '';
  ksOnPaymentTypeChange(): void {
    console.log('Selected Payment Type:', this.ksSelectedPaymentType);

  }

  ksAddItemToInvoiceItems(ksAddItem: any): void {

    this.ksInvoiceData.ksInvoiceItems.push(ksAddItem);

  };



}
