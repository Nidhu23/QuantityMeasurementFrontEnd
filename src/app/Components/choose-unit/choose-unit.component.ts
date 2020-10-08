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

  subUnits: Unit[] = [
    { value: 'feet', viewValue: 'feet' },
    { value: 'inch', viewValue: 'inch' },
    { value: 'meter', viewValue: 'meter' },
    { value: 'centimeter', viewValue: 'centimeter' }
  ];

  selectedUnit: string = this.subUnits[0].viewValue;

  childMsg: string;
  finalResult = 0;
  inputType: unknown;
  resultType: unknown;
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
          { value: 'meter', viewValue: 'meter' },
          { value: 'centimeter', viewValue: 'centimeter' }
        ];
        this.selectedUnit = this.subUnits[0].viewValue
        break;
      }
      case 'volume': {
        this.subUnits = [
          { value: 'litre', viewValue: 'litre' },
          { value: 'ml', viewValue: 'ml' },
          { value: 'gallon', viewValue: 'gallon' }
        ];
        this.selectedUnit = this.subUnits[0].viewValue
        break;
      }
      case 'temp': {
        this.subUnits = [
          { value: 'celcius', viewValue: 'celcius' },
          { value: 'fahrenheight', viewValue: 'fahrenheight' }
        ];
        this.selectedUnit = this.subUnits[0].viewValue
        break;
      }

      default: {
        this.subUnits = [
          { value: 'litre', viewValue: 'litre' },
          { value: 'ml', viewValue: 'ml' },
          { value: 'gallon', viewValue: 'gallon' }
        ];
        this.selectedUnit = this.subUnits[0].viewValue
      }
    }
  }
  conversion(value: number) {
    this.inputType = <unknown>(document.getElementById("choiceOne"))
    this.resultType = <unknown>(document.getElementById("choiceTwo"))
    if (this.inputType == "centimeter" && this.resultType == "meter") {
      this.finalResult = value / 100;
    }
    else {
      this.finalResult = value * 10
    }
  }
}


