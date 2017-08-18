export interface Book{
    $key?: string;
    author?: string;
    title?: string;
    price?: number;
    dateadded?:  Date;
    dateread?: Date;
    description?: string;
    rate?: number;
    imageUrl?: string;
  }