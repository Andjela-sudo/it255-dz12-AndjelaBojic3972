import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function slikaValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        let expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
        let regex = new RegExp(expression);
        const slikaIsCorrect = control.value.match(regex)
        return slikaIsCorrect ? null : { incorrectSlika: true }
    }
}