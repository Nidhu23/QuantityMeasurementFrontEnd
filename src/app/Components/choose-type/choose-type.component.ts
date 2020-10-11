import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-choose-type',
  templateUrl: './choose-type.component.html',
  styleUrls: ['./choose-type.component.scss']
})

export class ChooseTypeComponent implements OnInit {
  @Output() msgEvent = new EventEmitter<string>();
  lengthMsg = "length";
  tempMsg = "temp";
  volumeMsg = "volume";
  choseLength = false
  choseTemp = false
  choseVolume = false

  constructor() { }

  ngOnInit(): void {
    this.choseLength = true
  }

  sendLength() {
    this.choseTemp = false
    this.choseVolume = false
    this.choseLength = true
    this.msgEvent.emit(this.lengthMsg);
  }
  sendTemp() {
    this.choseVolume = false
    this.choseLength = false
    this.choseTemp = true
    this.msgEvent.emit(this.tempMsg);
  }
  sendVolume() {
    this.choseTemp = false
    this.choseLength = false
    this.choseVolume = true
    this.msgEvent.emit(this.volumeMsg)
  }

}
