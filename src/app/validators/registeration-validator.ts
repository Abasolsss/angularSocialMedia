import { AbstractControl, ValidatorFn,ValidationErrors } from "@angular/forms";

export function profileNameValidation (compareName: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

        const formValue: string = control.value

        return formValue === compareName ? {invalidName: true} : null

        
    }
}


export function ageValidator(ageMinor: string): ValidatorFn {
    return(control: AbstractControl): ValidationErrors | null => {
        
        const testVal = control.value

        return testVal === ageMinor ? null : {minor: true}

    }
}
