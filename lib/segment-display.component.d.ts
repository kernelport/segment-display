import { OnInit } from '@angular/core';
export declare class SegmentDisplayComponent implements OnInit {
    displayId: string;
    displayValue: string;
    private display;
    setDisplayId: string;
    setDisplayValue: string;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    reset(): void;
}
