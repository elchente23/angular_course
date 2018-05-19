import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenes'
})
export class ImagenesPipe implements PipeTransform {

  transform(image1: string, image2: string): string {
    
    let result: string = "",
        urlImage = "https://image.tmdb.org/t/p/w300";
    
    if(image1 == null && image2 == null) {
      result = "http://via.placeholder.com/300x169";
    } else if(image1 == null) {
      result = urlImage + image2;
    } else {
      result = urlImage + image1;
    } 
    return result;
  }

}
