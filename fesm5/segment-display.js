import { Injectable, Component, Input, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var SegmentDisplayService = /** @class */ (function () {
    function SegmentDisplayService() {
    }
    SegmentDisplayService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SegmentDisplayService.ctorParameters = function () { return []; };
    /** @nocollapse */ SegmentDisplayService.ngInjectableDef = defineInjectable({ factory: function SegmentDisplayService_Factory() { return new SegmentDisplayService(); }, token: SegmentDisplayService, providedIn: "root" });
    return SegmentDisplayService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var SegmentDisplayComponent = /** @class */ (function () {
    function SegmentDisplayComponent() {
        console.log("constructor");
        console.log(this.displayValue);
        console.log(this.displayId);
    }
    Object.defineProperty(SegmentDisplayComponent.prototype, "setDisplayId", {
        set: /**
         * @param {?} displayId
         * @return {?}
         */
        function (displayId) {
            this.displayId = displayId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SegmentDisplayComponent.prototype, "setDisplayValue", {
        set: /**
         * @param {?} displayValue
         * @return {?}
         */
        function (displayValue) {
            this.displayValue = displayValue;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SegmentDisplayComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        console.log("ngOnInit");
        console.log(this.displayValue);
        console.log(this.displayId);
        this.display = new SegmentDisplay(this.displayId);
        this.display.pattern = "##:##:##";
        this.display.displayAngle = 6;
        this.display.digitHeight = 20;
        this.display.digitWidth = 14;
        this.display.digitDistance = 2.5;
        this.display.segmentWidth = 2;
        this.display.segmentDistance = 0.3;
        this.display.segmentCount = 7;
        this.display.cornerType = 3;
        this.display.colorOn = "#e95d0f";
        this.display.colorOff = "#4b1e05";
        this.display.draw();
    };
    /**
     * @return {?}
     */
    SegmentDisplayComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        console.log("ngOnInit");
        console.log(this.displayValue);
        console.log(this.displayId);
        this.display.setValue(this.displayValue);
    };
    /**
     * @return {?}
     */
    SegmentDisplayComponent.prototype.reset = /**
     * @return {?}
     */
    function () {
        console.log("reset");
        this.displayValue = "88:88:88";
        console.log(this.displayValue);
        console.log(this.displayId);
        this.display.setValue(this.displayValue);
    };
    SegmentDisplayComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-SegmentDisplay',
                    template: "\n\t<canvas [id]=this.displayId width=\"600\" height=\"100\" style=\"background-color:rgb(10,10,10);\" >\n\t\tYour browser is unfortunately not supported.\n\t</canvas>\n\t<button (click)=\"reset()\">Reset</button>\n    <p>\n      segment-display works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    SegmentDisplayComponent.ctorParameters = function () { return []; };
    SegmentDisplayComponent.propDecorators = {
        setDisplayId: [{ type: Input, args: ['displayId',] }],
        setDisplayValue: [{ type: Input, args: ['displayValue',] }]
    };
    return SegmentDisplayComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var SegmentDisplayModule = /** @class */ (function () {
    function SegmentDisplayModule() {
    }
    SegmentDisplayModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [SegmentDisplayComponent],
                    imports: [],
                    exports: [SegmentDisplayComponent]
                },] }
    ];
    return SegmentDisplayModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { SegmentDisplayService, SegmentDisplayComponent, SegmentDisplayModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VnbWVudC1kaXNwbGF5LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9zZWdtZW50LWRpc3BsYXkvbGliL3NlZ21lbnQtZGlzcGxheS5zZXJ2aWNlLnRzIiwibmc6Ly9zZWdtZW50LWRpc3BsYXkvbGliL3NlZ21lbnQtZGlzcGxheS5jb21wb25lbnQudHMiLCJuZzovL3NlZ21lbnQtZGlzcGxheS9saWIvc2VnbWVudC1kaXNwbGF5Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNlZ21lbnREaXNwbGF5U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VnbWVudERpc3BsYXkgfSBmcm9tICdub2RlX21vZHVsZXMvM3F1YXJrcy1zZWdtZW50LWRpc3BsYXkvc2VnbWVudC1kaXNwbGF5LmpzJztcblxuZGVjbGFyZSB2YXIgU2VnbWVudERpc3BsYXk6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLVNlZ21lbnREaXNwbGF5JyxcbiAgdGVtcGxhdGU6IGBcblx0PGNhbnZhcyBbaWRdPXRoaXMuZGlzcGxheUlkIHdpZHRoPVwiNjAwXCIgaGVpZ2h0PVwiMTAwXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOnJnYigxMCwxMCwxMCk7XCIgPlxuXHRcdFlvdXIgYnJvd3NlciBpcyB1bmZvcnR1bmF0ZWx5IG5vdCBzdXBwb3J0ZWQuXG5cdDwvY2FudmFzPlxuXHQ8YnV0dG9uIChjbGljayk9XCJyZXNldCgpXCI+UmVzZXQ8L2J1dHRvbj5cbiAgICA8cD5cbiAgICAgIHNlZ21lbnQtZGlzcGxheSB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgU2VnbWVudERpc3BsYXlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBkaXNwbGF5SWQ6IHN0cmluZztcbiAgcHVibGljIGRpc3BsYXlWYWx1ZTogc3RyaW5nO1xuICBwcml2YXRlIGRpc3BsYXk6IGFueTtcblxuICBASW5wdXQoJ2Rpc3BsYXlJZCcpXG4gIHB1YmxpYyBzZXQgc2V0RGlzcGxheUlkKGRpc3BsYXlJZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZGlzcGxheUlkID0gZGlzcGxheUlkO1xuICB9XG5cbiAgQElucHV0KCdkaXNwbGF5VmFsdWUnKVxuICBwdWJsaWMgc2V0IHNldERpc3BsYXlWYWx1ZShkaXNwbGF5VmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IGRpc3BsYXlWYWx1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNvbnN0cnVjdG9yXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRpc3BsYXlWYWx1ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGlzcGxheUlkKTtcbiB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibmdPbkluaXRcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGlzcGxheVZhbHVlKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5kaXNwbGF5SWQpO1xuICAgICAgICB0aGlzLmRpc3BsYXkgPSBuZXcgU2VnbWVudERpc3BsYXkodGhpcy5kaXNwbGF5SWQpO1xuICAgICAgICB0aGlzLmRpc3BsYXkucGF0dGVybiAgICAgICAgID0gXCIjIzojIzojI1wiO1xuICAgICAgICB0aGlzLmRpc3BsYXkuZGlzcGxheUFuZ2xlICAgID0gNjtcbiAgICAgICAgdGhpcy5kaXNwbGF5LmRpZ2l0SGVpZ2h0ICAgICA9IDIwO1xuICAgICAgICB0aGlzLmRpc3BsYXkuZGlnaXRXaWR0aCAgICAgID0gMTQ7XG4gICAgICAgIHRoaXMuZGlzcGxheS5kaWdpdERpc3RhbmNlICAgPSAyLjU7XG4gICAgICAgIHRoaXMuZGlzcGxheS5zZWdtZW50V2lkdGggICAgPSAyO1xuICAgICAgICB0aGlzLmRpc3BsYXkuc2VnbWVudERpc3RhbmNlID0gMC4zO1xuICAgICAgICB0aGlzLmRpc3BsYXkuc2VnbWVudENvdW50ICAgID0gNztcbiAgICAgICAgdGhpcy5kaXNwbGF5LmNvcm5lclR5cGUgICAgICA9IDM7XG4gICAgICAgIHRoaXMuZGlzcGxheS5jb2xvck9uICAgICAgICAgPSBcIiNlOTVkMGZcIjtcbiAgICAgICAgdGhpcy5kaXNwbGF5LmNvbG9yT2ZmICAgICAgICA9IFwiIzRiMWUwNVwiO1xuICAgICAgICB0aGlzLmRpc3BsYXkuZHJhdygpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm5nT25Jbml0XCIpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRpc3BsYXlWYWx1ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGlzcGxheUlkKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5LnNldFZhbHVlKHRoaXMuZGlzcGxheVZhbHVlKTtcbiAgfVxuXG4gIHJlc2V0KCk6dm9pZHtcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXNldFwiKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5VmFsdWUgPSBcIjg4Ojg4Ojg4XCI7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGlzcGxheVZhbHVlKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5kaXNwbGF5SWQpO1xuICAgICAgICB0aGlzLmRpc3BsYXkuc2V0VmFsdWUodGhpcy5kaXNwbGF5VmFsdWUpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZWdtZW50RGlzcGxheUNvbXBvbmVudCB9IGZyb20gJy4vc2VnbWVudC1kaXNwbGF5LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1NlZ21lbnREaXNwbGF5Q29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICBdLFxuICBleHBvcnRzOiBbU2VnbWVudERpc3BsYXlDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFNlZ21lbnREaXNwbGF5TW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0lBT0U7S0FBaUI7O2dCQUxsQixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OztnQ0FKRDtDQUVBOzs7Ozs7QUNGQTtJQWtDRTtRQUNNLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDbEM7SUFkQSxzQkFDVyxpREFBWTs7Ozs7UUFEdkIsVUFDd0IsU0FBaUI7WUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7U0FDaEM7OztPQUFBO0lBRUQsc0JBQ1csb0RBQWU7Ozs7O1FBRDFCLFVBQzJCLFlBQW9CO1lBQ3pDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1NBQ3RDOzs7T0FBQTs7OztJQVFELDBDQUFROzs7SUFBUjtRQUNNLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQVcsVUFBVSxDQUFDO1FBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFNLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBTyxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQVEsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFLLEdBQUcsQ0FBQztRQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBTSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDO1FBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFNLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBUSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQVcsU0FBUyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFVLFNBQVMsQ0FBQztRQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ3pCOzs7O0lBRUQsaURBQWU7OztJQUFmO1FBQ00sT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7S0FDOUM7Ozs7SUFFRCx1Q0FBSzs7O0lBQUw7UUFDTSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDO1FBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUM5Qzs7Z0JBbkVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUUsNFFBUVQ7aUJBRUY7Ozs7OytCQU9FLEtBQUssU0FBQyxXQUFXO2tDQUtqQixLQUFLLFNBQUMsY0FBYzs7SUE2Q3ZCLDhCQUFDO0NBckVEOzs7Ozs7QUNMQTtJQUdBO0tBTXFDOztnQkFOcEMsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDO29CQUN2QyxPQUFPLEVBQUUsRUFDUjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztpQkFDbkM7O0lBQ21DLDJCQUFDO0NBTnJDOzs7Ozs7Ozs7Ozs7OzsifQ==