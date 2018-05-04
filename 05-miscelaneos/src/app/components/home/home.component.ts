import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>
    <app-css></app-css>
    <app-clases></app-clases>
    <p [appResaltado]="'blue'">
      Hola mundo
    </p>
    <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements 
    OnInit, 
    DoCheck,
    AfterContentInit,
    AfterContentChecked, 
    AfterViewInit, 
    AfterViewChecked, 
    OnChanges, 
    OnDestroy {

  constructor() { 
    console.log('Constructor');
  }

  ngOnInit() {
    console.log('OnInit');
  }

  ngOnChanges() {
    console.log('OnChanges');
  }

  ngDoCheck() {
    console.log('DoCheck');
  }

  ngAfterContentInit() {
    console.log('AfterContentIni');
  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('AfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked');
  }

  ngOnDestroy() {
    console.log('OnDestroy');
  }
}
