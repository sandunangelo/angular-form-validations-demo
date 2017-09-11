import { Directive, Input } from "@angular/core";
import { AbstractControl, ValidatorFn, NG_VALIDATORS, Validator } from "@angular/forms";

@Directive({
    selector: '[forbiddenName]',
    providers: [{ provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true }]
})
export class ForbiddenValidatorDirective implements Validator {
    @Input() forbiddenName: string;

    validate(control: AbstractControl): { [key: string]: any } {
        return this.forbiddenName ? this.forbiddenNameValidator(new RegExp('^' + this.forbiddenName + '$', 'i'))(control)
            : null;
    }

    private forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            const forbidden = nameRe.test(control.value);
            return forbidden
                ? { 'forbiddenName': { value: control.value } }
                : null;
        };
    }
}
