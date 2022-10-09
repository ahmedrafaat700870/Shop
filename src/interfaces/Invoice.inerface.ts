export interface IInvoice {
  InvoiceId: number;
  InvoiceName: string;
  InvoiceData: Date;
  IsSelected: boolean;
  Items?: Array<any>;
}
