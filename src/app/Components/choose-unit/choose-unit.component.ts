import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-choose-unit',
  templateUrl: './choose-unit.component.html',
  styleUrls: ['./choose-unit.component.scss']
})
export class ChooseUnitComponent implements OnInit {
  from: string;
  to: string;
  subUnits = [];
  properties = [];
  units = [];
  factors = [];
  propertyIndex;
  selectedUnit: string;
  childMsg: string;
  constructor() {
    this.properties[0] = 'length'
    this.units[0] = ['feet', 'inch', 'yard', 'cm', 'metre']
    this.factors[0] = [12.0, 1.0, 36.0, 0.4, 40]
    this.properties[1] = 'volume'
    this.units[1] = ['litre', 'gallon', 'ml']
    this.factors[1] = [1.0, 3.78, 0.001]
  }

  ngOnInit(): void {
  }

  getMsgFromChild(cMsg: string) {
    this.childMsg = cMsg;
    switch (this.childMsg) {
      case 'length': {
        this.subUnits = this.units[0]
        break;
      }
      case 'volume': {
        this.subUnits = this.units[1]
        break;
      }
      case 'temp': {
        this.subUnits = this.units[0]
        break;
      }

      default: {
        this.subUnits = this.units[0]
      }
    }
  }
  calculate(InputId, TargetId, from, to) {
    let sourceIndex;
    let sourceFactor;
    let targetIndex;
    let targetFactor;
    let result;
    for (let i = 0; i < this.properties.length; i++) {
      if (this.childMsg == this.properties[i]) this.propertyIndex = i;
    }
    for (let i = 0; i < this.units[this.propertyIndex].length; i++) {
      if (from == this.units[this.propertyIndex][i]) sourceIndex = i;
    }
    for (let i = 0; i < this.units[this.propertyIndex].length; i++) {
      if (to == this.units[this.propertyIndex][i]) targetIndex = i;
    }
    sourceFactor = this.factors[this.propertyIndex][sourceIndex];
    targetFactor = this.factors[this.propertyIndex][targetIndex];
    var input = (<HTMLInputElement>document.getElementById(InputId));
    var target = (<HTMLInputElement>document.getElementById(TargetId))
    result = parseFloat(input.value)
    result = result * sourceFactor;
    result = result / targetFactor;
    target.value = String(result)
  }
}



