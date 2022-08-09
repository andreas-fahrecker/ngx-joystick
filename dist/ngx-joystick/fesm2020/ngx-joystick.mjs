import * as i0 from '@angular/core';
import { EventEmitter, Component, ViewChild, Input, Output, NgModule } from '@angular/core';
import * as nipplejs from 'nipplejs';
import { Subscription, fromEvent } from 'rxjs';

class NgxJoystickComponent {
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

class NgxJoystickModule {
}
NgxJoystickModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.1", ngImport: i0, type: NgxJoystickModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxJoystickModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.1.1", ngImport: i0, type: NgxJoystickModule, declarations: [NgxJoystickComponent], exports: [NgxJoystickComponent] });
NgxJoystickModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.1.1", ngImport: i0, type: NgxJoystickModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.1", ngImport: i0, type: NgxJoystickModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [NgxJoystickComponent],
                    imports: [],
                    exports: [NgxJoystickComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { NgxJoystickComponent, NgxJoystickModule };
//# sourceMappingURL=ngx-joystick.mjs.map
