import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WordsService {
  ApiUrl:string = "https://similarwords.p.mashape.com/moar?query=";
  constructor(private http:HttpClient) { 

  }
  makeWordsRequest(body){
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        'X-Mashape-Key' : 'VqDoWUFBCGmshxpJ3hCQilpoJuJfp1fuI8tjsncqusYyCZ35vq',
      })
    };
    return this.http.get(this.ApiUrl+body,httpOptions)
  }
}
