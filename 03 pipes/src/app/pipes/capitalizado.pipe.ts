import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
    name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {
    transform(value: string, todas: boolean = true) : string {

        value = value.toLocaleLowerCase();

        let nombres = value.split(' ');

        if(todas) {
            for(let i in nombres) {
                nombres[i] = nombres[i][0].toLocaleUpperCase() + nombres[i].substr(1);
            }
        } else {
            nombres[0] = nombres[0][0].toLocaleUpperCase() + nombres[0].substr(1);
        }

        return nombres.join(' ');
    }
}