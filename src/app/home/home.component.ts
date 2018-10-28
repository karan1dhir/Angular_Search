import { Component, OnInit } from '@angular/core';
import {WordsService} from '../home/words.service';
import { Word } from 'models/word';
@Component({ 
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items:Array<string>
  constructor(private getWordsService:WordsService) {
    
   }

  ngOnInit() {
   
  }
  getInputData(name){ 
    this.getWordsService.makeWordsRequest(name.value).subscribe((data:Word)=>{
      this.items = data.result
      console.log(data.result);
    })
  }
}
