import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IInvoice } from 'src/interfaces/Invoice.inerface';
import { InvoiceServices } from 'src/services/Invoice.Services';
import {
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
  FormGroup,
} from '@angular/forms';
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})
export class InvoiceComponent implements OnInit {
  constructor(
    private invoiceServices: InvoiceServices,
    private route: Router,
    private routes: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.routes.paramMap.subscribe((params) => {
      this.Id = (params.get('id') as unknown as number) || undefined;
    });
    this.invoiceServices.GetAll().subscribe(
      (data) => {
        console.log(data, 'data from api');
        this.Items = data.map((item) => {
          return {
            InvoiceId: item.tourId,
            InvoiceData: item.CreatedDate,
            InvoiceName: item.tourTitel,
            IsSelected: false,
          };
        });
      },
      (err) => console.log(err)
    );
    this.ItemState = false;
    let body = document.body as HTMLBodyElement;
    let script = document.createElement('script') as HTMLScriptElement;
    script.src = '../../assets/js/alerts.js';
    script.innerHTML = '';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
    script.src = '../../assets/js/avgrund.js';
    body.appendChild(script);
  }
  InvoiceForm = new FormGroup({
    invoiceId: new FormControl('', Validators.required),
    invoiceDate: new FormControl('', Validators.required),
    invoiceName: new FormControl('', Validators.required),
    items: new FormArray([], Validators.required),
  });

  Id?: number;
  Items: Array<IInvoice> = [] as Array<IInvoice>;
  ItemState?: boolean;

  GetControl(NameOfControl: string) {
    return this.InvoiceForm.get(NameOfControl);
  }
  showItem(): void {
    this.ItemState = true;
  }
  AddItems(): any {
    this.Items.map((item) => {
      if (
        item.IsSelected &&
        !this.CheckIfItemExistsInFromGroups(item.InvoiceId)
      ) {
        (this.InvoiceForm.get('items') as FormArray).push(
          new FormGroup({
            id: new FormControl(item.InvoiceId),
            name: new FormControl(item.InvoiceName),
            qty: new FormControl(1, Validators.required),
            Price: new FormControl(50),
          })
        );
      }
    });
    this.ItemState = false;
  }
  GetFormArray(FormArrayName: string) {
    let items = <FormArray>this.InvoiceForm.get(FormArrayName);
    return items;
  }

  // check from item
  CheckIfItemExistsInFromGroups(id: number): boolean {
    const formItems = this.InvoiceForm.get('items') as FormArray;
    for (let item of formItems.controls) {
      console.log('id', item.get('id')?.value);
      if ((item.get('id')?.value as number) === id) return true;
    }
    console.log('this invoice not exists');
    return false;
  }
  getInvoiceIndex(item: IInvoice): number {
    const formItems = this.InvoiceForm.get('items') as FormArray;
    for (let i of formItems.controls) {
      if (i.get('id')?.value === item.InvoiceId) return item.InvoiceId;
    }
    return 0;
  }
  GetIndex(id: number): number {
    const items = (this.GetControl('items') as FormArray).controls;
    for (let i = 0; i < items.length; i++) {
      if (items[i].get('id')?.value === id) {
        return i;
      }
    }
    return 0;
  }
  handleSelected(id: number, IsSelected: boolean) {
    if (!IsSelected) {
      (this.GetControl('items') as FormArray).controls.splice(
        this.GetIndex(id),
        1
      );
    }
  }
}
