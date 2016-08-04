import {Directive} from '@angular/core';
import {NG_VALIDATORS} from '@angular/forms';


import * as validators from './validators';


function createValidator(type) {
  const validator = validators[type];
  return function customValidator(c: any): {[key: string]: boolean} {
    if (c.value !== undefined && c.value !== null && validator(c.value)) {
      return null;
    }
    return {[type]: true};
  }
}

@Directive({
  selector: '' +
    '[ac-is-credit-card][ngModel],' +
    '[ac-is-credit-card][formControl],' +
    '[acIsCredit-card][ngModel],' +
    '[acIsCredit-card][formControl]' +
  '',
  providers: [{
    provide: NG_VALIDATORS,
    useValue: createValidator('isCreditCard'),
    multi: true
  }]
})
export class AcIsCreditCardValidator {}

@Directive({
  selector: '' +
    '[ac-is-base-64][ngModel],' +
    '[ac-is-base-64][formControl],' +
    '[acIsBase64][ngModel],' +
    '[acIsBase64][formControl]' +
  '',
  providers: [{
    provide: NG_VALIDATORS,
    useValue: createValidator('isBase64'),
    multi: true
  }]
})
export class AcIsBase64Validator {}

@Directive({
  selector: '' +
    '[ac-is-email][ngModel],' +
    '[ac-is-email][formControl],' +
    '[acIsEmail][ngModel],' +
    '[acIsEmail][formControl]' +
  '',
  providers: [{
    provide: NG_VALIDATORS,
    useValue: createValidator('isEmail'),
    multi: true
  }]
})
export class AcIsEmailValidator {}

@Directive({
  selector: '' +
    '[ac-is-json][ngModel],' +
    '[ac-is-json][formControl],' +
    '[acIsJson][ngModel],' +
    '[acIsJson][formControl]' +
  '',
  providers: [{
    provide: NG_VALIDATORS,
    useValue: createValidator('isJSON'),
    multi: true
  }]
})
export class AcIsJSONValidator {}

@Directive({
  selector: '' +
    '[ac-is-phone][ngModel],' +
    '[ac-is-phone][formControl],' +
    '[acIsPhone][ngModel],' +
    '[acIsPhone][formControl]' +
  '',
  providers: [{
    provide: NG_VALIDATORS,
    useValue: createValidator('isPhone'),
    multi: true
  }]
})
export class AcIsPhoneValidator {}

@Directive({
  selector: '' +
    '[ac-is-uuid][ngModel],' +
    '[ac-is-uuid][formControl],' +
    '[acIsUUID][ngModel],' +
    '[acIsUUID][formControl]' +
  '',
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
