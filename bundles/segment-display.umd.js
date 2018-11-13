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
        }
        /**
         * @return {?}
         */
        SegmentDisplayComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SegmentDisplayComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-SegmentDisplay',
                        template: "\n    <p>\n      segment-display works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        SegmentDisplayComponent.ctorParameters = function () { return []; };
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VnbWVudC1kaXNwbGF5LnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vc2VnbWVudC1kaXNwbGF5L2xpYi9zZWdtZW50LWRpc3BsYXkuc2VydmljZS50cyIsIm5nOi8vc2VnbWVudC1kaXNwbGF5L2xpYi9zZWdtZW50LWRpc3BsYXkuY29tcG9uZW50LnRzIiwibmc6Ly9zZWdtZW50LWRpc3BsYXkvbGliL3NlZ21lbnQtZGlzcGxheS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTZWdtZW50RGlzcGxheVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItU2VnbWVudERpc3BsYXknLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgc2VnbWVudC1kaXNwbGF5IHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBTZWdtZW50RGlzcGxheUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VnbWVudERpc3BsYXlDb21wb25lbnQgfSBmcm9tICcuL3NlZ21lbnQtZGlzcGxheS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtTZWdtZW50RGlzcGxheUNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZXhwb3J0czogW1NlZ21lbnREaXNwbGF5Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTZWdtZW50RGlzcGxheU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiQ29tcG9uZW50IiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQU9FO1NBQWlCOztvQkFMbEJBLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7O29DQUpEO0tBRUE7Ozs7OztBQ0ZBO1FBYUU7U0FBaUI7Ozs7UUFFakIsMENBQVE7OztZQUFSO2FBQ0M7O29CQWRGQyxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjt3QkFDOUIsUUFBUSxFQUFFLHVEQUlUO3FCQUVGOzs7O1FBUUQsOEJBQUM7S0FoQkQ7Ozs7OztBQ0ZBO1FBR0E7U0FNcUM7O29CQU5wQ0MsV0FBUSxTQUFDO3dCQUNSLFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDO3dCQUN2QyxPQUFPLEVBQUUsRUFDUjt3QkFDRCxPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztxQkFDbkM7O1FBQ21DLDJCQUFDO0tBTnJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=