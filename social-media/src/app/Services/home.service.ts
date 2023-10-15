import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface MyImageData {
  url: string;
  comments: string[];
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = 'http://localhost:3000/images'; 

  constructor(private http: HttpClient) { }

  getImages(): Observable<MyImageData[]> {
    return this.http.get<MyImageData[]>(this.apiUrl);
  }

  addImage(imageData: MyImageData): Observable<MyImageData> {
    return this.http.post<MyImageData>(this.apiUrl, imageData);
  }

  addComment(imageIndex: number, comment: string): Observable<any> {
    const imageUrl = `${this.apiUrl}/${imageIndex}`;
    const updatedImage = { comment };
    return this.http.put(imageUrl, updatedImage);
  }
}
