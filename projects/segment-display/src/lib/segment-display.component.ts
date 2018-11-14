import { Component, OnInit, Input } from '@angular/core';
import { SegmentDisplay } from 'node_modules/3quarks-segment-display/segment-display.js';

declare var SegmentDisplay: any;

@Component({
  selector: 'lib-SegmentDisplay',
  template: `
	<canvas [id]=this.displayId width="600" height="100" style="background-color:rgb(10,10,10);" >
		Your browser is unfortunately not supported.
	</canvas>
	<button (click)="reset()">Reset</button>
    <p>
      segment-display works!
    </p>
  `,
  styles: []
})
export class SegmentDisplayComponent implements OnInit {

  public displayId: string;
  public displayValue: string;
  private display: any;

  @Input('displayId')
  public set setDisplayId(displayId: string) {
        this.displayId = displayId;
  }

  @Input('displayValue')
  public set setDisplayValue(displayValue: string) {
        this.displayValue = displayValue;
  }

  constructor() {
        console.log("constructor");
        console.log(this.displayValue);
        console.log(this.displayId);
 }

  ngOnInit() {
        console.log("ngOnInit");
        console.log(this.displayValue);
        console.log(this.displayId);
        this.display = new SegmentDisplay(this.displayId);
        this.display.pattern         = "##:##:##";
        this.display.displayAngle    = 6;
        this.display.digitHeight     = 20;
        this.display.digitWidth      = 14;
        this.display.digitDistance   = 2.5;
        this.display.segmentWidth    = 2;
        this.display.segmentDistance = 0.3;
        this.display.segmentCount    = 7;
        this.display.cornerType      = 3;
        this.display.colorOn         = "#e95d0f";
        this.display.colorOff        = "#4b1e05";
        this.display.draw();
  }

  ngAfterViewInit(): void {
        console.log("ngOnInit");
        console.log(this.displayValue);
        console.log(this.displayId);
        this.display.setValue(this.displayValue);
  }

  reset():void{
        console.log("reset");
        this.displayValue = "88:88:88";
        console.log(this.displayValue);
        console.log(this.displayId);
        this.display.setValue(this.displayValue);
  }

}
