import { OnInit, EventEmitter, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import * as nipplejs from 'nipplejs';
import * as i0 from "@angular/core";
export interface JoystickEvent {
    event: nipplejs.EventData;
    data: nipplejs.JoystickOutputData;
}
export declare class NgxJoystickComponent implements OnInit, OnDestroy, AfterViewInit {
    private el;
    joystickContainer: ElementRef;
    options: nipplejs.JoystickManagerOptions;
    move: EventEmitter<JoystickEvent>;
    start: EventEmitter<JoystickEvent>;
    end: EventEmitter<JoystickEvent>;
    dir: EventEmitter<JoystickEvent>;
    dirUp: EventEmitter<JoystickEvent>;
    dirDown: EventEmitter<JoystickEvent>;
    dirLeft: EventEmitter<JoystickEvent>;
    dirRight: EventEmitter<JoystickEvent>;
    plain: EventEmitter<JoystickEvent>;
    plainUp: EventEmitter<JoystickEvent>;
    plainDown: EventEmitter<JoystickEvent>;
    plainLeft: EventEmitter<JoystickEvent>;
    plainRight: EventEmitter<JoystickEvent>;
    manager: nipplejs.JoystickManager;
    private interval;
    private touchMoveSubscription;
    constructor(el: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    private getDefaultOptions;
    private emitEvent;
    private setupEvents;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxJoystickComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxJoystickComponent, "ngx-joystick", never, { "options": "options"; }, { "move": "move"; "start": "start"; "end": "end"; "dir": "dir"; "dirUp": "dirUp"; "dirDown": "dirDown"; "dirLeft": "dirLeft"; "dirRight": "dirRight"; "plain": "plain"; "plainUp": "plainUp"; "plainDown": "plainDown"; "plainLeft": "plainLeft"; "plainRight": "plainRight"; }, never, never, false>;
}
