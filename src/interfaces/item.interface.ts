export interface IItem {
  tourId: number;
  IsNew: boolean;
  Sale?: number;
  Description: string;
  TourPrice: number;
  tourTitel: string;
  CreatedDate: Date;
  IsDeleted?: boolean;
  VideoSrc?: string;
  CategoryId?: number;
  LocationId?: number;
  LocationHomePageId?: number;

  Category?: any[];
  Location?: any[];
  LocationHomePage?: any[];
  TbDepartmentTours?: any[];
  TbInvoices?: any[];
  TbPhotos?: any[];
  TbReviews?: any[];
  TbTourOptions?: any[];
}
