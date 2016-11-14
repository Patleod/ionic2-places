import { Component } from '@angular/core';

/*
  Generated class for the HeaderContent component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'header-content',
  templateUrl: 'header-content.html'
})
export class HeaderContentComponent {

  text: string;

  constructor() {
    console.log('Hello HeaderContent Component');
    this.text = 'Hello World';
  }

}
