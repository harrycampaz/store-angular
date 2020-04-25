import { AbstractControl, FormGroup} from '@angular/forms';

export class myValidator {

  static isPriceValid(control: AbstractControl) {

    const value = control.value;
    console.log(value);

    if (value > 10000) {
      return {price_invalid: true};
    }

    return null;

  }

  static mustMatch(controlName: string, matchingControlName: string) {

    console.log('Data Data');

    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    };
  }

}
