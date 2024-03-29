import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.scss'
})
export class AddItemComponent {

  ksAddItemInput: string = "";
  ksAddHours: number = 0;
  ksAddHourlyRate: number = 0;

  @Output() ksAddNewItem = new EventEmitter<any>();
  @ViewChild('ksLocalHours') ksLocalHours!: ElementRef<HTMLInputElement>;
  @ViewChild('ksLocalHourlyRate') ksLocalHourlyRate!: ElementRef<HTMLInputElement>;



  ksAddHoursItem(): void {

    const ksLocalHoursValue = this.ksLocalHours.nativeElement.value;
    const ksLocalHourlyRateValue = this.ksLocalHourlyRate.nativeElement.value;

    let ksAddItem: any = {
      name: this.ksAddItemInput,
      hours: +ksLocalHoursValue,
      hourlyRate: +ksLocalHourlyRateValue
    }

    this.ksAddNewItem.emit(ksAddItem);

  }

}
