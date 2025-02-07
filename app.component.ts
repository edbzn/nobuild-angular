import { Component , signal } from '@angular/core';

function _ts_decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

class _AppComponent {
  public readonly title = signal('Hello, Angular!');
}

export const AppComponent = _ts_decorate([
  Component({
    selector: 'app-root',
    template: '<h1>{{ title() }}</h1>',
    styles: `h1 { text-align: center; }`,
  })
], _AppComponent);



