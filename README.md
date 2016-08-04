<p align="center">
  <a href="http://courses.angularclass.com/courses/angular-2-fundamentals" target="_blank">
    <img width="438" alt="Angular 2 Fundamentals" src="https://cloud.githubusercontent.com/assets/1016365/17200649/085798c6-543c-11e6-8ad0-2484f0641624.png">
  </a>
</p>

___

# Angular 2 Form Validators
Angular 2 form validators by @AngularClass

# Request a validator that is missing
[Submit a Request](https://github.com/AngularClass/angular2-form-validators/issues/new) and I will create it and include it here.



## Installing

`npm install --save @angularclass/form-validators`

# Directives
```
ac-is-credit-card
ac-is-base-64
ac-is-email
ac-is-json
ac-is-phone
ac-is-uuid
```

## Example
```typescript
import {
  ANGULARCLASS_FORM_VALIDATOR_DIRECTIVES
}  from '@angularclass/form-validators';

@Component({
  selector: 'app',
  directives: [
    ANGULARCLASS_FORM_VALIDATOR_DIRECTIVES
  ],
  template: `
  <form>
    <input ac-is-credit-card>
    <input ac-is-base-64>
    <input ac-is-email>
    <input ac-is-json>
    <input ac-is-phone>
    <input ac-is-uuid>
  </form>
  `
})
class App {
}
```
Another example
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'about',
  template: `
    About
    <form #form="ngForm" (ngSubmit)="onSubmit(form.value, form)" novalidate>
      <div>
        <label>
          <input
            #inputEmail="ngModel"
            name="inputEmail"
            [(ngModel)]="email"
            ac-is-email
          >
        </label>
      </div>

      <div *ngIf="form.submitted && inputEmail?.errors?.isEmail" style="background-color: red">
        Please use a valid email address
      </div>

      <button>Submit</button>

    </form>
  `
})
export class About {
  localState = {
    email: ''
  };

  onSubmit(value, form) {
    if (form.valid) {
      console.log('form value', value);
    } else {
      console.log('form invalid');
    }
  }
}
```
___

enjoy — **AngularClass**

<br><br>

[![AngularClass](https://cloud.githubusercontent.com/assets/1016365/9863770/cb0620fc-5af7-11e5-89df-d4b0b2cdfc43.png  "Angular Class")](https://angularclass.com)
##[AngularClass](https://angularclass.com)
> Learn AngularJS, Angular 2, and Modern Web Development from the best.
> Looking for corporate Angular training, want to host us, or Angular consulting? hello@angularclass.com
