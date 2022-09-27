import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Families } from '../models/families';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FamiliesService {
  private url = "Families";

  constructor(private http: HttpClient) { }

  public getFamilies() : Observable<Families[]>{
  
    return this.http.get<Families[]>(`${environment.apiUrl}/${this.url}`);
  }

  public updateFamilies(families: Families) : Observable<Families[]>{
  
    return this.http.put<Families[]>(
      `${environment.apiUrl}/${this.url}`,
      families
      );
  }

  public createFamilies(families: Families) : Observable<Families[]>{
  
    return this.http.post<Families[]>(
      `${environment.apiUrl}/${this.url}`,
      families
      );
  }

  public deleteFamilies(families: Families) : Observable<Families[]>{

    return this.http.delete<Families[]>(`${environment.apiUrl}/${this.url}/${families.id}`);
  }
}
