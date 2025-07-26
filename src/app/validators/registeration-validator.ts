import { AbstractControl, ValidatorFn,ValidationErrors } from "@angular/forms";

export function profileNameValidation (compareName: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

        const formValue: string = control.value

        return formValue === compareName ? {invalidName: true} : null

        
    }
}


export function ageValidator(): ValidatorFn {
    return(control: AbstractControl): ValidationErrors | null => {
    
        const monthValue = control.value

        const convertString = JSON.stringify(monthValue) as string

        const cutDateString = convertString.substring(1,10) as string

        const newDate = new Date(cutDateString)

        console.log(newDate.getFullYear())

       return monthValue === "minor" ? null : {minor: true}

    }
}
