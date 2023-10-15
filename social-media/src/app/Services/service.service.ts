import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  // private registeredUsers: any[] = [];
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  registerUser(user): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  deleteUser(userId: number): Observable<void> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.delete<void>(url);
  }


  checkUserNameAndPass(email: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(this.apiUrl)
      .pipe(
        map((users: any[]) => {
          const user = users.find(u => u.email === email && u.password === password);
          return !!user; 
        }),
        catchError(error => {
          console.error('Error occurred:', error);
          return throwError(false); 
        })
      );
  }
}
