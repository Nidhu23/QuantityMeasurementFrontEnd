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

  constructor() { }

  ngOnInit(): void {
  }

  sendLength() {
    this.msgEvent.emit(this.lengthMsg);
  }
  sendTemp() {
    this.msgEvent.emit(this.tempMsg);
  }
  sendVolume() {
    this.msgEvent.emit(this.volumeMsg)
  }

}
