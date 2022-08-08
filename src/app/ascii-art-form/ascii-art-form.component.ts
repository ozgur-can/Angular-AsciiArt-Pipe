import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
@Component({
  selector: 'app-ascii-art-form',
  templateUrl: './ascii-art-form.component.html',
  styleUrls: ['./ascii-art-form.component.css'],
})
export class AsciiArtFormComponent implements OnInit {
  text: string = '';
  fontName: string = 'Standard';
  isSmallScreen = this.breakpointObserver.isMatched('(max-width: 768px)');

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void { }

  getInputMaxLength() {
    if (this.isSmallScreen) {
      return 2;
    } else return 5;
  }

  onFontChange(event: Event) {
    //@ts-ignore
    const selectedFontName = event.target.value;
    this.fontName = selectedFontName;
  }
}
