import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'getKeys',
    pure: false
})
export class GetKeys implements PipeTransform {

    transform(value: any): any {
        let keys = [];

        for(let key in value) {
            keys.push(key);
        }
        return keys;
    }
}