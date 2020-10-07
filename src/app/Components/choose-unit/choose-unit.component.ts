import { Component, OnInit } from '@angular/core';
interface Unit {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-choose-unit',
  templateUrl: './choose-unit.component.html',
  styleUrls: ['./choose-unit.component.scss']
})
export class ChooseUnitComponent implements OnInit {
  subUnits: Unit[];
  childMsg: string;
  constructor() { }

  ngOnInit(): void {
  }

  getMsgFromChild(cMsg: string) {
    this.childMsg = cMsg;
    switch (this.childMsg) {
      case 'length': {
        this.subUnits = [
          { value: 'feet', viewValue: 'feet' },
          { value: 'inch', viewValue: 'inch' },
          { value: 'meter', viewValue: 'meter' }
        ];
        break;
      }
      case 'volume': {
        this.subUnits = [
          { value: 'litre', viewValue: 'litre' },
          { value: 'ml', viewValue: 'ml' },
          { value: 'gallon', viewValue: 'gallon' }
        ];
        break;
      }
      case 'temp': {
        this.subUnits = [
          { value: 'celcius', viewValue: 'celcius' },
          { value: 'fahrenheight', viewValue: 'fahrenheight' }
        ];
        break;
      }

      default: {
        this.subUnits = [
          { value: 'litre', viewValue: 'litre' },
          { value: 'ml', viewValue: 'ml' },
          { value: 'gallon', viewValue: 'gallon' }
        ];
      }
    }
  }
}


