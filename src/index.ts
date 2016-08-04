import {Component, Directive, Host} from '@angular/core';
import {
  ControlGroup,
  NgIf,
  NgFor,
  NG_VALIDATORS,
  FORM_DIRECTIVES,
  NgControl,
  Validators,
  NgForm
} from '@angular/common';


import {
  isCreditCard,
  isBase64,
  isEmail,
  isJSON,
  isPhone,
  isUUID
} from './validators';

function wrapBoolean(fn, type) {
  return function validator(c: any): {[key: string]: boolean} {
    if (c.value !== undefined && c.value !== null && fn(c.value)) {
      return null;
    }
    return {[type]: true};
  }
}


@Directive({
  selector: '[ac-is-credit-card]',
  providers: [{
    provide: NG_VALIDATORS,
    useValue: wrapBoolean(isCreditCard, 'isCreditCard'),
    multi: true
  }]
})
export class AcIsCreditCardValidator {}

@Directive({
  selector: '[ac-is-base-64]',
  providers: [{
    provide: NG_VALIDATORS,
    useValue: wrapBoolean(isBase64, 'isBase64'),
    multi: true
  }]
})
export class AcIsBase64Validator {}

@Directive({
  selector: '[ac-is-email]',
  providers: [{
    provide: NG_VALIDATORS,
    useValue: wrapBoolean(isEmail, 'isEmail'),
    multi: true
  }]
})
export class AcIsEmailValidator {}

@Directive({
  selector: '[ac-is-json]',
  providers: [{
    provide: NG_VALIDATORS,
    useValue: wrapBoolean(isJSON, 'isJSON'),
    multi: true
  }]
})
export class AcIsJSONValidator {}

@Directive({
  selector: '[ac-is-phone]',
  providers: [{
    provide: NG_VALIDATORS,
    useValue: wrapBoolean(isPhone, 'isPhone'),
    multi: true
  }]
})
export class AcIsPhoneValidator {}

@Directive({
  selector: '[ac-is-uuid]',
  providers: [{
    provide: NG_VALIDATORS,
    useValue: wrapBoolean(isUUID, 'isUUID'),
    multi: true
  }]
})
export class AcIsUUIDValidator {}

export const ANGULARCLASS_FORM_VALIDATOR_DIRECTIVES = [
  AcIsBase64Validator,
  AcIsCreditCardValidator,
  AcIsEmailValidator,
  AcIsJSONValidator,
  AcIsPhoneValidator,
  AcIsUUIDValidator
];
