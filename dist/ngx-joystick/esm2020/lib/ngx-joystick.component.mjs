import { Component, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import * as nipplejs from 'nipplejs';
import { fromEvent, Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export class NgxJoystickComponent {
    constructor(el) {
        this.el = el;
        this.move = new EventEmitter();
        this.start = new EventEmitter();
        this.end = new EventEmitter();
        this.dir = new EventEmitter();
        this.dirUp = new EventEmitter();
        this.dirDown = new EventEmitter();
        this.dirLeft = new EventEmitter();
        this.dirRight = new EventEmitter();
        this.plain = new EventEmitter();
        this.plainUp = new EventEmitter();
        this.plainDown = new EventEmitter();
        this.plainLeft = new EventEmitter();
        this.plainRight = new EventEmitter();
        this.touchMoveSubscription = new Subscription();
    }
    ngOnInit() {
        this.interval = window.setInterval(() => {
            if (this.joystickContainer &&
                this.joystickContainer.nativeElement.clientWidth &&
                this.joystickContainer.nativeElement.clientHeight) {
                if (!this.options) {
                    this.options = this.getDefaultOptions();
                }
                else {
                    this.options.zone = this.el.nativeElement;
                }
                this.manager = nipplejs.create(this.options);
                this.setupEvents();
                window.clearInterval(this.interval);
            }
        }, 100);
    }
    ngOnDestroy() {
        window.clearInterval(this.interval);
        this.manager.destroy();
        this.touchMoveSubscription.unsubscribe();
    }
    ngAfterViewInit() {
        this.touchMoveSubscription = fromEvent(this.el.nativeElement, 'touchmove').subscribe((event) => {
            event.preventDefault();
            event.stopPropagation();
        });
    }
    getDefaultOptions() {
        const options = {
            zone: this.el.nativeElement,
            mode: 'static',
            position: { left: '50%', top: '50%' },
            color: 'blue'
        };
        return options;
    }
    emitEvent(event, emitter) {
        const joystickEvent = { event: event.event, data: event.data };
        emitter.emit(joystickEvent);
    }
    setupEvents() {
        this.manager.on('move', (event, data) => { this.emitEvent({ event, data }, this.move); });
        this.manager.on('start', (event, data) => { this.emitEvent({ event, data }, this.start); });
        this.manager.on('end', (event, data) => { this.emitEvent({ event, data }, this.end); });
        this.manager.on('dir', (event, data) => { this.emitEvent({ event, data }, this.dir); });
        this.manager.on('dir:up', (event, data) => { this.emitEvent({ event, data }, this.dirUp); });
        this.manager.on('dir:down', (event, data) => { this.emitEvent({ event, data }, this.dirDown); });
        this.manager.on('dir:left', (event, data) => { this.emitEvent({ event, data }, this.dirLeft); });
        this.manager.on('dir:right', (event, data) => { this.emitEvent({ event, data }, this.dirRight); });
        this.manager.on('plain', (event, data) => { this.emitEvent({ event, data }, this.plain); });
        this.manager.on('plain:up', (event, data) => { this.emitEvent({ event, data }, this.plainUp); });
        this.manager.on('plain:down', (event, data) => { this.emitEvent({ event, data }, this.plainDown); });
        this.manager.on('plain:left', (event, data) => { this.emitEvent({ event, data }, this.plainLeft); });
        this.manager.on('plain:right', (event, data) => { this.emitEvent({ event, data }, this.plainRight); });
    }
}
NgxJoystickComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.1", ngImport: i0, type: NgxJoystickComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
NgxJoystickComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.1.1", type: NgxJoystickComponent, selector: "ngx-joystick", inputs: { options: "options" }, outputs: { move: "move", start: "start", end: "end", dir: "dir", dirUp: "dirUp", dirDown: "dirDown", dirLeft: "dirLeft", dirRight: "dirRight", plain: "plain", plainUp: "plainUp", plainDown: "plainDown", plainLeft: "plainLeft", plainRight: "plainRight" }, viewQueries: [{ propertyName: "joystickContainer", first: true, predicate: ["joystickContainer"], descendants: true }], ngImport: i0, template: `
  <div #joystickContainer style="width: 100%; height: 100%" id="static"></div>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.1", ngImport: i0, type: NgxJoystickComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-joystick', template: `
  <div #joystickContainer style="width: 100%; height: 100%" id="static"></div>
  ` }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { joystickContainer: [{
                type: ViewChild,
                args: ['joystickContainer']
            }], options: [{
                type: Input
            }], move: [{
                type: Output
            }], start: [{
                type: Output
            }], end: [{
                type: Output
            }], dir: [{
                type: Output
            }], dirUp: [{
                type: Output
            }], dirDown: [{
                type: Output
            }], dirLeft: [{
                type: Output
            }], dirRight: [{
                type: Output
            }], plain: [{
                type: Output
            }], plainUp: [{
                type: Output
            }], plainDown: [{
                type: Output
            }], plainLeft: [{
                type: Output
            }], plainRight: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWpveXN0aWNrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1qb3lzdGljay9zcmMvbGliL25neC1qb3lzdGljay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBeUIsU0FBUyxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNoSSxPQUFPLEtBQUssUUFBUSxNQUFNLFVBQVUsQ0FBQztBQUNyQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFjL0MsTUFBTSxPQUFPLG9CQUFvQjtJQXdCL0IsWUFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUFuQnhCLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQztRQUN6QyxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQWlCLENBQUM7UUFDMUMsUUFBRyxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDO1FBQ3hDLFFBQUcsR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQztRQUN4QyxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQWlCLENBQUM7UUFDMUMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDO1FBQzVDLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQztRQUM1QyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWlCLENBQUM7UUFDN0MsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDO1FBQzFDLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQztRQUM1QyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQWlCLENBQUM7UUFDOUMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDO1FBQzlDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQztRQUtqRCwwQkFBcUIs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RSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNGLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvRixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pHLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvRixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25HLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RyxDQUFDOztpSEF6RlUsb0JBQW9CO3FHQUFwQixvQkFBb0IsMmNBTHJCOztHQUVUOzJGQUdVLG9CQUFvQjtrQkFQaEMsU0FBUzsrQkFDRSxjQUFjLFlBQ2Q7O0dBRVQ7aUdBSStCLGlCQUFpQjtzQkFBaEQsU0FBUzt1QkFBQyxtQkFBbUI7Z0JBRXJCLE9BQU87c0JBQWYsS0FBSztnQkFFSSxJQUFJO3NCQUFiLE1BQU07Z0JBQ0csS0FBSztzQkFBZCxNQUFNO2dCQUNHLEdBQUc7c0JBQVosTUFBTTtnQkFDRyxHQUFHO3NCQUFaLE1BQU07Z0JBQ0csS0FBSztzQkFBZCxNQUFNO2dCQUNHLE9BQU87c0JBQWhCLE1BQU07Z0JBQ0csT0FBTztzQkFBaEIsTUFBTTtnQkFDRyxRQUFRO3NCQUFqQixNQUFNO2dCQUNHLEtBQUs7c0JBQWQsTUFBTTtnQkFDRyxPQUFPO3NCQUFoQixNQUFNO2dCQUNHLFNBQVM7c0JBQWxCLE1BQU07Z0JBQ0csU0FBUztzQkFBbEIsTUFBTTtnQkFDRyxVQUFVO3NCQUFuQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgRWxlbWVudFJlZiwgT25EZXN0cm95LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIG5pcHBsZWpzIGZyb20gJ25pcHBsZWpzJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSm95c3RpY2tFdmVudCB7XG4gIGV2ZW50OiBuaXBwbGVqcy5FdmVudERhdGE7XG4gIGRhdGE6IG5pcHBsZWpzLkpveXN0aWNrT3V0cHV0RGF0YTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWpveXN0aWNrJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiAjam95c3RpY2tDb250YWluZXIgc3R5bGU9XCJ3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlXCIgaWQ9XCJzdGF0aWNcIj48L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4Sm95c3RpY2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ2pveXN0aWNrQ29udGFpbmVyJykgam95c3RpY2tDb250YWluZXI6IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KCkgb3B0aW9uczogbmlwcGxlanMuSm95c3RpY2tNYW5hZ2VyT3B0aW9ucztcblxuICBAT3V0cHV0KCkgbW92ZSA9IG5ldyBFdmVudEVtaXR0ZXI8Sm95c3RpY2tFdmVudD4oKTtcbiAgQE91dHB1dCgpIHN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxKb3lzdGlja0V2ZW50PigpO1xuICBAT3V0cHV0KCkgZW5kID0gbmV3IEV2ZW50RW1pdHRlcjxKb3lzdGlja0V2ZW50PigpO1xuICBAT3V0cHV0KCkgZGlyID0gbmV3IEV2ZW50RW1pdHRlcjxKb3lzdGlja0V2ZW50PigpO1xuICBAT3V0cHV0KCkgZGlyVXAgPSBuZXcgRXZlbnRFbWl0dGVyPEpveXN0aWNrRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBkaXJEb3duID0gbmV3IEV2ZW50RW1pdHRlcjxKb3lzdGlja0V2ZW50PigpO1xuICBAT3V0cHV0KCkgZGlyTGVmdCA9IG5ldyBFdmVudEVtaXR0ZXI8Sm95c3RpY2tFdmVudD4oKTtcbiAgQE91dHB1dCgpIGRpclJpZ2h0ID0gbmV3IEV2ZW50RW1pdHRlcjxKb3lzdGlja0V2ZW50PigpO1xuICBAT3V0cHV0KCkgcGxhaW4gPSBuZXcgRXZlbnRFbWl0dGVyPEpveXN0aWNrRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBwbGFpblVwID0gbmV3IEV2ZW50RW1pdHRlcjxKb3lzdGlja0V2ZW50PigpO1xuICBAT3V0cHV0KCkgcGxhaW5Eb3duID0gbmV3IEV2ZW50RW1pdHRlcjxKb3lzdGlja0V2ZW50PigpO1xuICBAT3V0cHV0KCkgcGxhaW5MZWZ0ID0gbmV3IEV2ZW50RW1pdHRlcjxKb3lzdGlja0V2ZW50PigpO1xuICBAT3V0cHV0KCkgcGxhaW5SaWdodCA9IG5ldyBFdmVudEVtaXR0ZXI8Sm95c3RpY2tFdmVudD4oKTtcblxuICBtYW5hZ2VyOiBuaXBwbGVqcy5Kb3lzdGlja01hbmFnZXI7XG5cbiAgcHJpdmF0ZSBpbnRlcnZhbDogbnVtYmVyO1xuICBwcml2YXRlIHRvdWNoTW92ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmpveXN0aWNrQ29udGFpbmVyICYmXG4gICAgICAgIHRoaXMuam95c3RpY2tDb250YWluZXIubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCAmJlxuICAgICAgICB0aGlzLmpveXN0aWNrQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgICApIHtcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy56b25lID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWFuYWdlciA9IG5pcHBsZWpzLmNyZWF0ZSh0aGlzLm9wdGlvbnMpO1xuICAgICAgICB0aGlzLnNldHVwRXZlbnRzKCk7XG5cbiAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gICAgICB9XG4gICAgfSwgMTAwKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuICAgIHRoaXMubWFuYWdlci5kZXN0cm95KCk7XG4gICAgdGhpcy50b3VjaE1vdmVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnRvdWNoTW92ZVN1YnNjcmlwdGlvbiA9IGZyb21FdmVudCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd0b3VjaG1vdmUnKS5zdWJzY3JpYmUoKGV2ZW50OiBUb3VjaEV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldERlZmF1bHRPcHRpb25zKCk6IG5pcHBsZWpzLkpveXN0aWNrTWFuYWdlck9wdGlvbnMge1xuICAgIGNvbnN0IG9wdGlvbnM6IG5pcHBsZWpzLkpveXN0aWNrTWFuYWdlck9wdGlvbnMgPSB7XG4gICAgICB6b25lOiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBtb2RlOiAnc3RhdGljJyxcbiAgICAgIHBvc2l0aW9uOiB7IGxlZnQ6ICc1MCUnLCB0b3A6ICc1MCUnIH0sXG4gICAgICBjb2xvcjogJ2JsdWUnXG4gICAgfTtcbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIHByaXZhdGUgZW1pdEV2ZW50KGV2ZW50OiBhbnksIGVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+KSB7XG4gICAgY29uc3Qgam95c3RpY2tFdmVudDogSm95c3RpY2tFdmVudCA9IHsgZXZlbnQ6IGV2ZW50LmV2ZW50LCBkYXRhOiBldmVudC5kYXRhIH07XG4gICAgZW1pdHRlci5lbWl0KGpveXN0aWNrRXZlbnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXR1cEV2ZW50cygpIHtcbiAgICB0aGlzLm1hbmFnZXIub24oJ21vdmUnLCAoZXZlbnQsIGRhdGEpID0+IHsgdGhpcy5lbWl0RXZlbnQoe2V2ZW50LCBkYXRhfSwgdGhpcy5tb3ZlKTsgfSk7XG4gICAgdGhpcy5tYW5hZ2VyLm9uKCdzdGFydCcsIChldmVudCwgZGF0YSkgPT4geyB0aGlzLmVtaXRFdmVudCh7ZXZlbnQsIGRhdGF9LCB0aGlzLnN0YXJ0KTsgfSk7XG4gICAgdGhpcy5tYW5hZ2VyLm9uKCdlbmQnLCAoZXZlbnQsIGRhdGEpID0+IHsgdGhpcy5lbWl0RXZlbnQoe2V2ZW50LCBkYXRhfSwgdGhpcy5lbmQpOyB9KTtcbiAgICB0aGlzLm1hbmFnZXIub24oJ2RpcicsIChldmVudCwgZGF0YSkgPT4geyB0aGlzLmVtaXRFdmVudCh7ZXZlbnQsIGRhdGF9LCB0aGlzLmRpcik7IH0pO1xuICAgIHRoaXMubWFuYWdlci5vbignZGlyOnVwJywgKGV2ZW50LCBkYXRhKSA9PiB7IHRoaXMuZW1pdEV2ZW50KHtldmVudCwgZGF0YX0sIHRoaXMuZGlyVXApOyB9KTtcbiAgICB0aGlzLm1hbmFnZXIub24oJ2Rpcjpkb3duJywgKGV2ZW50LCBkYXRhKSA9PiB7IHRoaXMuZW1pdEV2ZW50KHtldmVudCwgZGF0YX0sIHRoaXMuZGlyRG93bik7IH0pO1xuICAgIHRoaXMubWFuYWdlci5vbignZGlyOmxlZnQnLCAoZXZlbnQsIGRhdGEpID0+IHsgdGhpcy5lbWl0RXZlbnQoe2V2ZW50LCBkYXRhfSwgdGhpcy5kaXJMZWZ0KTsgfSk7XG4gICAgdGhpcy5tYW5hZ2VyLm9uKCdkaXI6cmlnaHQnLCAoZXZlbnQsIGRhdGEpID0+IHsgdGhpcy5lbWl0RXZlbnQoe2V2ZW50LCBkYXRhfSwgdGhpcy5kaXJSaWdodCk7IH0pO1xuICAgIHRoaXMubWFuYWdlci5vbigncGxhaW4nLCAoZXZlbnQsIGRhdGEpID0+IHsgdGhpcy5lbWl0RXZlbnQoe2V2ZW50LCBkYXRhfSwgdGhpcy5wbGFpbik7IH0pO1xuICAgIHRoaXMubWFuYWdlci5vbigncGxhaW46dXAnLCAoZXZlbnQsIGRhdGEpID0+IHsgdGhpcy5lbWl0RXZlbnQoe2V2ZW50LCBkYXRhfSwgdGhpcy5wbGFpblVwKTsgfSk7XG4gICAgdGhpcy5tYW5hZ2VyLm9uKCdwbGFpbjpkb3duJywgKGV2ZW50LCBkYXRhKSA9PiB7IHRoaXMuZW1pdEV2ZW50KHtldmVudCwgZGF0YX0sIHRoaXMucGxhaW5Eb3duKTsgfSk7XG4gICAgdGhpcy5tYW5hZ2VyLm9uKCdwbGFpbjpsZWZ0JywgKGV2ZW50LCBkYXRhKSA9PiB7IHRoaXMuZW1pdEV2ZW50KHtldmVudCwgZGF0YX0sIHRoaXMucGxhaW5MZWZ0KTsgfSk7XG4gICAgdGhpcy5tYW5hZ2VyLm9uKCdwbGFpbjpyaWdodCcsIChldmVudCwgZGF0YSkgPT4geyB0aGlzLmVtaXRFdmVudCh7ZXZlbnQsIGRhdGF9LCB0aGlzLnBsYWluUmlnaHQpOyB9KTtcbiAgfVxuXG59XG4iXX0=