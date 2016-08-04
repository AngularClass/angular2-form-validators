import {Directive} from '@angular/core';
import {NG_VALIDATORS} from '@angular/common';


import * as validators from './validators';


function createValidator(type) {
  const validator = validators[type];
  return function validator(c: any): {[key: string]: boolean} {
    if (c.value !== undefined && c.value !== null && validator(c.value)) {
      return null;
    }
    return {[type]: true};
  }
}

@Directive({
  selector: '[ac-is-credit-card]',
  providers: [{
    provide: NG_VALIDATORS,
    useValue: createValidator('isCreditCard'),
    multi: true
  }]
})
export class AcIsCreditCardValidator {}

@Directive({
  selector: '[ac-is-base-64]',
  providers: [{
    provide: NG_VALIDATORS,
    useValue: createValidator('isBase64'),
    multi: true
  }]
})
export class AcIsBase64Validator {}

@Directive({
  selector: '[ac-is-email]',
  providers: [{
    provide: NG_VALIDATORS,
    useValue: createValidator('isEmail'),
    multi: true
  }]
})
export class AcIsEmailValidator {}

@Directive({
  selector: '[ac-is-json]',
  providers: [{
    provide: NG_VALIDATORS,
    useValue: createValidator('isJSON'),
    multi: true
  }]
})
export class AcIsJSONValidator {}

@Directive({
  selector: '[ac-is-phone]',
  providers: [{
    provide: NG_VALIDATORS,
    useValue: createValidator('isPhone'),
    multi: true
  }]
})
export class AcIsPhoneValidator {}

@Directive({
  selector: '[ac-is-uuid]',
  providers: [{
    provide: NG_VALIDATORS,
    useValue: createValidator('isUUID'),
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
