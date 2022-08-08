import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-ascii-art-form',
  templateUrl: './ascii-art-form.component.html',
  styleUrls: ['./ascii-art-form.component.css']
})


export class AsciiArtFormComponent implements OnInit {
  text: string = '';
  fontName: string = 'Standard';
  
  constructor() { }

  ngOnInit(): void {
  }

  onFontChange(event: Event) {
    //@ts-ignore
    const selectedFontName = event.target.value;
    this.fontName = selectedFontName; 
  }
}
