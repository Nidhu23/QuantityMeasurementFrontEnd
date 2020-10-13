import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName } from '@angular/forms'
import { from } from 'rxjs';
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
  tempIncrement;
  form = new FormGroup({
    fromValue: new FormControl(),
    toValue: new FormControl()
  })
  constructor() {
    this.properties[0] = 'length'
    this.units[0] = ['feet', 'inch', 'yard', 'cm', 'metre', 'kilometer', 'micrometer', 'nanometer']
    this.factors[0] = [12.0, 1.0, 36.0, 0.4, 40, 39370.1, 3.93701e-5, 3.93701e-8]
    this.properties[1] = 'volume'
    this.units[1] = ['litre', 'gallon', 'ml', 'fluid ounce']
    this.factors[1] = [1.0, 3.78, 0.001, 0.0284131]
    this.properties[2] = "temp";
    this.units[2] = ["celsius", "fahrenheit", "kelvin"];
    this.factors[2] = [1, 0.555555555555, 1];
    this.tempIncrement = [0, -32, -273.15];
  }

  ngOnInit(): void {
    this.childMsg = "length"
    this.getMsgFromChild(this.childMsg)
  }

  getMsgFromChild(cMsg: string) {
    this.childMsg = cMsg;
    switch (this.childMsg) {
      case 'length': {
        this.subUnits = this.units[0]
        this.from = this.units[0][3]
        this.to = this.units[0][4]
        this.form.get("fromValue").setValue(1)
        this.calculate("fromValue", "toValue", this.from, this.to)
        break;
      }
      case 'volume': {
        this.subUnits = this.units[1]
        this.from = this.units[1][0]
        this.to = this.units[1][2]
        this.form.get("fromValue").setValue(1)
        this.calculate("fromValue", "toValue", this.from, this.to)
        break;
      }
      case 'temp': {
        this.subUnits = this.units[2]
        this.from = this.units[2][0]
        this.to = this.units[2][1]
        this.form.get("fromValue").setValue(1)
        this.calculate("fromValue", "toValue", this.from, this.to)
        break;
      }
    }
  }
  calculate(InputId, TargetId, from, to) {
    let sourceIndex;
    let sourceFactor;
    let targetIndex;
    let targetFactor;
    let result;

    this.properties.forEach((element, index) => {
      if (this.childMsg == element) this.propertyIndex = index
    });

    this.units[this.propertyIndex].forEach((element, index) => {
      if (from == element) sourceIndex = index
    });

    this.units[this.propertyIndex].forEach((element, index) => {
      if (to == element) targetIndex = index
    });
    sourceFactor = this.factors[this.propertyIndex][sourceIndex];
    targetFactor = this.factors[this.propertyIndex][targetIndex];
    let input = this.form.get(InputId).value;
    if (this.properties[this.propertyIndex] == "temp") {
      result = parseFloat(result) + this.tempIncrement[sourceIndex];
    }
    result = (input * sourceFactor) / targetFactor;
    if (this.properties[this.propertyIndex] == "temp") {
      result = parseFloat(result) - this.tempIncrement[targetIndex];
    }
    this.form.get(TargetId).setValue(result)
  }
}



