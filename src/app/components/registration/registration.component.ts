import {ChangeDetectionStrategy, Component} from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {FormControl, FormGroup, ReactiveFormsModule, Validators,FormsModule} from '@angular/forms'
import { ageValidator, profileNameValidation } from '../../validators/registeration-validator';


@Component({
  selector: 'app-registration',
  imports: [ReactiveFormsModule,MatFormFieldModule, MatInputModule, MatDatepickerModule, MatIconModule,FormsModule],
  templateUrl: './registration.component.html',
  providers: [provideNativeDateAdapter()],
  styleUrl: './registration.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class RegistrationComponent {

  private readonly _currentYear = new Date().getFullYear();

  readonly minDate = new Date(this._currentYear - 30, 0, 1);
  readonly maxDate = new Date(this._currentYear + 0, 11, 31);

  // minorCheck: string = ""

  onSubmit() {

      const newDate: Date = new Date();
      const currentYear: number = newDate.getFullYear();


      //user birthdate information
      const testDate: any = this.profileForm.value.birthDate
      const getYear: number = testDate.getFullYear()
      const getMonth: number = testDate.getMonth() +  1
      const getDate: number = testDate.getDate()
      
      console.log(testDate.getFullYear())
      //user check minority
      if(currentYear - getYear < 18) {
      
      } else {
      
      }
    }




  profileForm = new FormGroup ({
    firstName: new FormControl('',[
      Validators.required,
      profileNameValidation("rodulfo")
    ]),
    lastName: new FormControl('',[
      Validators.required
    ]),
    Gender: new FormControl(''),
    birthDate: new FormControl('',[
      ageValidator(),
      Validators.required
    ]),
    userName: new FormControl(''),
    passWord: new FormControl(''),
  })
  
  get firstName () {
    return this.profileForm.get('firstName') 
  }

  get lastName () {
    return this.profileForm.get('lastName') 
  }

get birthDate () {
  return this.profileForm.get('birthDate')
}


}
