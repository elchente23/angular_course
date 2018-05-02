import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(imagenes: any[], position: number = 1): any {
    const noImage = 'assets/img/noimage.png';
    
    if(!imagenes || imagenes.length < position) {
      return noImage;
    } else {
      return imagenes[position].url;
    }
  }
}
