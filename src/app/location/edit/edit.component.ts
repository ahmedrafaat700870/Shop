import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
  FormControl,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TbLocation } from 'src/interfaces/Location.interface';
import { LocationServices } from 'src/services/Location.services';
// import {formGroup}
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private locationServices: LocationServices
  ) {}
  LocationForm = this.fb.group({
    LocationName: ['', [Validators.required]], // , Validators.min(5)
  });
  LocationSubmit() {
    this.locationServices
      .CheckByName(this.LocationForm.value.LocationName as string)
      .subscribe(
        (data) => {
          this.validate = data as unknown as boolean;
          if (this.validate) {
            // valid
            // update data
            console.log('valid');
            console.log(this.validate, 'check form api');
            // bund object
            this.location = {
              locationId: this.id,
              locationName: this.LocationForm.value.LocationName as string,
            } as TbLocation;
            // check if in page update or page edit
            if (this.pageState) {
              // then update
              this.locationServices
                .Update(this.id as unknown as number, this.location)
                .subscribe((data) => {
                  console.log(data, ' Update Page');
                  this.LocationForm.get('LocationName')?.reset();
                });
            } else {
              // then edit
              this.locationServices.Edit(this.location).subscribe((data) => {
                console.log(data, 'Edit page');
                console.log(this.LocationForm.get('LocationName'));
                this.LocationForm.get('LocationName')?.reset();
              });
            }
          } else {
            console.log(this.validate, 'check form api');
            console.log('invalid');
            (this.LocationForm.get('LocationName') as FormControl).setErrors([
              'not valid',
            ]);
            // this name is exists
            // not valid
            // this.LocationForm.reset();
            // this.LocationForm.disabled;
            // show error
          }
        },
        (err) => {}
      );
  }
  validatePhone(): { [key: string]: any } | null {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (control.value && control.value.length != 10) {
        return { phoneNumberInvalid: true };
      }
      return null;
    };
  }
  GetFormControl() {
    return this.LocationForm.get('LocationName');
  }

  // ValidateLocation(): { [key: string]: any } | null {
  //   return (control: AbstractControl): { [key: string]: boolean } | null => {
  //     this.locationServices.GetByName(control.value).subscribe(
  //       (data) => {
  //         console.log(data);
  //         this.validate = data;
  //       },
  //       (err) => console.log(err)
  //     );
  //     if (this.validate === null) {
  //       return { LocationInvalid: true };
  //     } else return null;
  //   };
  // }
  validate: boolean = false;
  id?: number;
  location: TbLocation = {} as TbLocation;
  pageState: boolean = false; // means edit;
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      if (
        (params.get('id') as unknown as number) != 0 &&
        params.get('id') != undefined
      ) {
        this.id = params.get('id') as unknown as number;
        this.pageState = true; // mean update
      }
    });

    let body = document.body as HTMLBodyElement;
    let script = document.createElement('script') as HTMLScriptElement;
    script.src = '../../../assets/js/typeahead.js';
    script.innerHTML = '';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
    script.src = '../../../assets/js/select2.js';
    body.appendChild(script);
  }
}
