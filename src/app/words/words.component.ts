import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {

  @Input() wordItems
  constructor() { }

  ngOnInit() {
    
  }
}
