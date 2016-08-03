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


@Directive({
  selector: '[ac-is-credit-card]',
  providers: [{
    provide: NG_VALIDATORS,
    useValue: isCreditCard,
    multi: true
  }]
})
export class AcIsCreditCardValidator {}

@Directive({
  selector: '[ac-is-base-64]',
  providers: [{
    provide: NG_VALIDATORS,
    useValue: isBase64,
    multi: true
  }]
})
export class AcIsBase64Validator {}

@Directive({
  selector: '[ac-is-email]',
  providers: [{
    provide: NG_VALIDATORS,
    useValue: isEmail,
    multi: true
  }]
})
export class AcIsEmailValidator {}

@Directive({
  selector: '[ac-is-json]',
  providers: [{
    provide: NG_VALIDATORS,
    useValue: isJSON,
    multi: true
  }]
})
export class AcIsJSONValidator {}

@Directive({
  selector: '[ac-is-phone]',
  providers: [{
    provide: NG_VALIDATORS,
    useValue: isPhone,
    multi: true
  }]
})
export class AcIsPhoneValidator {}

@Directive({
  selector: '[ac-is-uuid]',
  providers: [{
    provide: NG_VALIDATORS,
    useValue: isUUID,
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
