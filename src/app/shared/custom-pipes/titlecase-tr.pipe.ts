import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCaseTr'
})
export class TitleCaseTrPipe implements PipeTransform {

  transform(value:string): string {
    return this.toTitleCaseTR(value);
  }


 /**
 * Kelimelerin sadece ilk harfini buyuk hale cevirip yollar (Title Case)
 * Turkce karakterleri dogru cevirir.
 * . , ; ! : - ? ve bosluk karakterlerini kelime ayirici olarak sayar. 
 */
toTitleCaseTR(str:String) {
  return str
    .toLocaleLowerCase('tr-TR')
    .replace(/(?:^|\s|,|;|!|:|-|\.|\?)[a-z0-9ğçşüöı]/g, function (match) {
      return match.toLocaleUpperCase('tr-TR');
    });
}
}


