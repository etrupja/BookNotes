export interface Book{
    $key?: string;
    author?: string;
    title?: string;
    category?:string;
    price?: number;
    dateadded?:  Date;
    dateread?: Date;
    description?: string;
    rate?: number;
    imageUrl?: string;
  }