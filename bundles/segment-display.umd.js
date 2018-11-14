(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('segment-display', ['exports', '@angular/core'], factory) :
    (factory((global['segment-display'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var SegmentDisplayService = /** @class */ (function () {
        function SegmentDisplayService() {
        }
        SegmentDisplayService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SegmentDisplayService.ctorParameters = function () { return []; };
        /** @nocollapse */ SegmentDisplayService.ngInjectableDef = i0.defineInjectable({ factory: function SegmentDisplayService_Factory() { return new SegmentDisplayService(); }, token: SegmentDisplayService, providedIn: "root" });
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
             */ function (displayId) {
                this.displayId = displayId;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SegmentDisplayComponent.prototype, "setDisplayValue", {
            set: /**
             * @param {?} displayValue
             * @return {?}
             */ function (displayValue) {
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
            { type: i0.Component, args: [{
                        selector: 'lib-SegmentDisplay',
                        template: "\n\t<canvas [id]=this.displayId width=\"600\" height=\"100\" style=\"background-color:rgb(10,10,10);\" >\n\t\tYour browser is unfortunately not supported.\n\t</canvas>\n\t<button (click)=\"reset()\">Reset</button>\n    <p>\n      segment-display works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        SegmentDisplayComponent.ctorParameters = function () { return []; };
        SegmentDisplayComponent.propDecorators = {
            setDisplayId: [{ type: i0.Input, args: ['displayId',] }],
            setDisplayValue: [{ type: i0.Input, args: ['displayValue',] }]
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
            { type: i0.NgModule, args: [{
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

    exports.SegmentDisplayService = SegmentDisplayService;
    exports.SegmentDisplayComponent = SegmentDisplayComponent;
    exports.SegmentDisplayModule = SegmentDisplayModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VnbWVudC1kaXNwbGF5LnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vc2VnbWVudC1kaXNwbGF5L2xpYi9zZWdtZW50LWRpc3BsYXkuc2VydmljZS50cyIsIm5nOi8vc2VnbWVudC1kaXNwbGF5L2xpYi9zZWdtZW50LWRpc3BsYXkuY29tcG9uZW50LnRzIiwibmc6Ly9zZWdtZW50LWRpc3BsYXkvbGliL3NlZ21lbnQtZGlzcGxheS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTZWdtZW50RGlzcGxheVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlZ21lbnREaXNwbGF5IH0gZnJvbSAnbm9kZV9tb2R1bGVzLzNxdWFya3Mtc2VnbWVudC1kaXNwbGF5L3NlZ21lbnQtZGlzcGxheS5qcyc7XG5cbmRlY2xhcmUgdmFyIFNlZ21lbnREaXNwbGF5OiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1TZWdtZW50RGlzcGxheScsXG4gIHRlbXBsYXRlOiBgXG5cdDxjYW52YXMgW2lkXT10aGlzLmRpc3BsYXlJZCB3aWR0aD1cIjYwMFwiIGhlaWdodD1cIjEwMFwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTAsMTAsMTApO1wiID5cblx0XHRZb3VyIGJyb3dzZXIgaXMgdW5mb3J0dW5hdGVseSBub3Qgc3VwcG9ydGVkLlxuXHQ8L2NhbnZhcz5cblx0PGJ1dHRvbiAoY2xpY2spPVwicmVzZXQoKVwiPlJlc2V0PC9idXR0b24+XG4gICAgPHA+XG4gICAgICBzZWdtZW50LWRpc3BsYXkgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFNlZ21lbnREaXNwbGF5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgZGlzcGxheUlkOiBzdHJpbmc7XG4gIHB1YmxpYyBkaXNwbGF5VmFsdWU6IHN0cmluZztcbiAgcHJpdmF0ZSBkaXNwbGF5OiBhbnk7XG5cbiAgQElucHV0KCdkaXNwbGF5SWQnKVxuICBwdWJsaWMgc2V0IHNldERpc3BsYXlJZChkaXNwbGF5SWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLmRpc3BsYXlJZCA9IGRpc3BsYXlJZDtcbiAgfVxuXG4gIEBJbnB1dCgnZGlzcGxheVZhbHVlJylcbiAgcHVibGljIHNldCBzZXREaXNwbGF5VmFsdWUoZGlzcGxheVZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5kaXNwbGF5VmFsdWUgPSBkaXNwbGF5VmFsdWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjb25zdHJ1Y3RvclwiKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5kaXNwbGF5VmFsdWUpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRpc3BsYXlJZCk7XG4gfVxuXG4gIG5nT25Jbml0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm5nT25Jbml0XCIpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRpc3BsYXlWYWx1ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGlzcGxheUlkKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5ID0gbmV3IFNlZ21lbnREaXNwbGF5KHRoaXMuZGlzcGxheUlkKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5LnBhdHRlcm4gICAgICAgICA9IFwiIyM6IyM6IyNcIjtcbiAgICAgICAgdGhpcy5kaXNwbGF5LmRpc3BsYXlBbmdsZSAgICA9IDY7XG4gICAgICAgIHRoaXMuZGlzcGxheS5kaWdpdEhlaWdodCAgICAgPSAyMDtcbiAgICAgICAgdGhpcy5kaXNwbGF5LmRpZ2l0V2lkdGggICAgICA9IDE0O1xuICAgICAgICB0aGlzLmRpc3BsYXkuZGlnaXREaXN0YW5jZSAgID0gMi41O1xuICAgICAgICB0aGlzLmRpc3BsYXkuc2VnbWVudFdpZHRoICAgID0gMjtcbiAgICAgICAgdGhpcy5kaXNwbGF5LnNlZ21lbnREaXN0YW5jZSA9IDAuMztcbiAgICAgICAgdGhpcy5kaXNwbGF5LnNlZ21lbnRDb3VudCAgICA9IDc7XG4gICAgICAgIHRoaXMuZGlzcGxheS5jb3JuZXJUeXBlICAgICAgPSAzO1xuICAgICAgICB0aGlzLmRpc3BsYXkuY29sb3JPbiAgICAgICAgID0gXCIjZTk1ZDBmXCI7XG4gICAgICAgIHRoaXMuZGlzcGxheS5jb2xvck9mZiAgICAgICAgPSBcIiM0YjFlMDVcIjtcbiAgICAgICAgdGhpcy5kaXNwbGF5LmRyYXcoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJuZ09uSW5pdFwiKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5kaXNwbGF5VmFsdWUpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRpc3BsYXlJZCk7XG4gICAgICAgIHRoaXMuZGlzcGxheS5zZXRWYWx1ZSh0aGlzLmRpc3BsYXlWYWx1ZSk7XG4gIH1cblxuICByZXNldCgpOnZvaWR7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzZXRcIik7XG4gICAgICAgIHRoaXMuZGlzcGxheVZhbHVlID0gXCI4ODo4ODo4OFwiO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRpc3BsYXlWYWx1ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGlzcGxheUlkKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5LnNldFZhbHVlKHRoaXMuZGlzcGxheVZhbHVlKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VnbWVudERpc3BsYXlDb21wb25lbnQgfSBmcm9tICcuL3NlZ21lbnQtZGlzcGxheS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtTZWdtZW50RGlzcGxheUNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZXhwb3J0czogW1NlZ21lbnREaXNwbGF5Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTZWdtZW50RGlzcGxheU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiQ29tcG9uZW50IiwiSW5wdXQiLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBT0U7U0FBaUI7O29CQUxsQkEsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7Ozs7b0NBSkQ7S0FFQTs7Ozs7O0FDRkE7UUFrQ0U7WUFDTSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2xDO1FBZEEsc0JBQ1csaURBQVk7Ozs7Z0JBRHZCLFVBQ3dCLFNBQWlCO2dCQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQzthQUNoQzs7O1dBQUE7UUFFRCxzQkFDVyxvREFBZTs7OztnQkFEMUIsVUFDMkIsWUFBb0I7Z0JBQ3pDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO2FBQ3RDOzs7V0FBQTs7OztRQVFELDBDQUFROzs7WUFBUjtnQkFDTSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNsRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBVyxVQUFVLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFNLENBQUMsQ0FBQztnQkFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQU8sRUFBRSxDQUFDO2dCQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBUSxFQUFFLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFLLEdBQUcsQ0FBQztnQkFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQU0sQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFNLENBQUMsQ0FBQztnQkFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQVEsQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBVyxTQUFTLENBQUM7Z0JBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFVLFNBQVMsQ0FBQztnQkFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN6Qjs7OztRQUVELGlEQUFlOzs7WUFBZjtnQkFDTSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUM5Qzs7OztRQUVELHVDQUFLOzs7WUFBTDtnQkFDTSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQztnQkFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDOUM7O29CQW5FRkMsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxvQkFBb0I7d0JBQzlCLFFBQVEsRUFBRSw0UUFRVDtxQkFFRjs7Ozs7bUNBT0VDLFFBQUssU0FBQyxXQUFXO3NDQUtqQkEsUUFBSyxTQUFDLGNBQWM7O1FBNkN2Qiw4QkFBQztLQXJFRDs7Ozs7O0FDTEE7UUFHQTtTQU1xQzs7b0JBTnBDQyxXQUFRLFNBQUM7d0JBQ1IsWUFBWSxFQUFFLENBQUMsdUJBQXVCLENBQUM7d0JBQ3ZDLE9BQU8sRUFBRSxFQUNSO3dCQUNELE9BQU8sRUFBRSxDQUFDLHVCQUF1QixDQUFDO3FCQUNuQzs7UUFDbUMsMkJBQUM7S0FOckM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==