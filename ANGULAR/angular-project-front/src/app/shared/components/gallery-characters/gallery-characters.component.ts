import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-characters',
  templateUrl: './gallery-characters.component.html',
  styleUrls: ['./gallery-characters.component.scss']
})
export class GalleryCharactersComponent implements OnInit {

  @Input() list: any;
 
  constructor() { }

  ngOnInit(): void {
    
    console.log(this.list)
  }

}

/* interface Characters {
  name: string;
  src: string;
  alt: string;
} */