import { NativeDateAdapter } from "@angular/material";

export class AppDateAdapter extends NativeDateAdapter {

    format(date: Date, displayFormat: Object): string {

        if (displayFormat === 'input') {
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            return `${year}-${month}-${day}`;
        } else {
            return date.toDateString();
        }
    }
}