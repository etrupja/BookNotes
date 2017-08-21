export interface Book{
    $key?: string;
    author?: string;
    title?: string;
    price?: number;
    dateadded?:  Date;
    // isRead?:boolean;
    dateread?: Date;
    description?: string;
    rate?: number;
    // imageUrl?: string;
  }