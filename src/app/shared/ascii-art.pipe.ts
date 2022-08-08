// @ts-nocheck
import { Pipe, PipeTransform } from '@angular/core';
import figlet from 'figlet';
import Standard from 'figlet/importable-fonts/Standard.js';
import Isometric3 from 'figlet/importable-fonts/Isometric3.js';
import Fuzzy from 'figlet/importable-fonts/Fuzzy.js';
import Fraktur from 'figlet/importable-fonts/Fraktur.js';
import Whimsy from 'figlet/importable-fonts/Whimsy.js';
@Pipe({
  name: 'asciiart',
})
export class AsciiArtPipe implements PipeTransform {
  transform(value: string, fontName: string) {
    let selectedFont: string = null;

    // font selection
    switch (fontName) {
      case 'Standard':
        selectedFont = Standard;
        break;
      case 'Isometric3':
        selectedFont = Isometric3;
        break;
      case 'Fuzzy':
        selectedFont = Fuzzy;
        break;
      case 'Fraktur':
        selectedFont = Fraktur;
        break;
      case 'Whimsy':
        selectedFont = Whimsy;
        break;

      default:
        break;
    }

    // load font for figlet package
    figlet.parseFont(fontName, selectedFont);

    // initial value for ascii
    let asciiArt: string = '';

    figlet.text(value, { font: fontName }, (err, data) => {
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
