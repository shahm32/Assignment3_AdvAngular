import { Injectable } from '@angular/core';
import { Person } from '../Models/person.model'; 
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private personurl = '/assets/person.json'; 

  constructor(private http: HttpClient) {} 

 getPersonList(): Observable<Person[]> {
    return this.http.get<Person[]>
          (this.personurl);
  
  }
}