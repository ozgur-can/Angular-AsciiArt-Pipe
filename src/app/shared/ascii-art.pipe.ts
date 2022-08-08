// @ts-nocheck
import { Pipe, PipeTransform } from '@angular/core';
import figlet from 'figlet';
// import standardFont from 'figlet/importable-fonts/Standard.js';
import standardFont from 'figlet/importable-fonts/Isometric3.js';

@Pipe({
  name: 'asciiart'
})
export class AsciiArtPipe implements PipeTransform {
  transform(value: string) {
    // load font for figlet package
    figlet.parseFont('Isometric3', standardFont);

    // initial value for ascii
    let asciiArt: string = '';

    figlet.text(value, { font: 'Isometric3' }, (err, data) => {
      if (err) {
        throw new Error(
          'problem occured while transforming text to ascii art!'
        );
      }
      // set ascii value to pipe
      asciiArt = data;
    });

    // return ascii art
    return asciiArt;
  }
}
