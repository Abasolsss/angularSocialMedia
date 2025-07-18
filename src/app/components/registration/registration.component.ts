import {ChangeDetectionStrategy, Component} from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms'


@Component({
  selector: 'app-registration',
  imports: [ReactiveFormsModule,MatFormFieldModule, MatInputModule, MatDatepickerModule, MatIconModule],
  templateUrl: './registration.component.html',
  providers: [provideNativeDateAdapter()],
  styleUrl: './registration.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent {
  profileForm = new FormGroup ({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    Gender: new FormControl(''),
    birthDate: new FormControl(''),
    userName: new FormControl(''),
    passWord: new FormControl(''),
  })
  private readonly _currentYear = new Date().getFullYear();

  readonly minDate = new Date(this._currentYear - 30, 0, 1);
  readonly maxDate = new Date(this._currentYear + 0, 11, 31);


    onSubmit() {
      
      const newDate: Date = new Date();
      const currentYear: number = newDate.getFullYear();


      //user birthdate information
      const testDate: any = this.profileForm.value.birthDate
      const getYear: number = testDate.getFullYear()
      const getMonth: number = testDate.getMonth() +  1
      const getDate: number = testDate.getDate()
      


      console.log(this.profileForm.value)
      //user check minority
      if(currentYear - getYear < 18) {
        console.log("Minor")
      } else {
        console.log("Adult")
      }

    

    }


}
