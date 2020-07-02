import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  upload(file: File): Observable<any> {
    const fd = new FormData();
    fd.append('pdf', file, file.name);
    return this.http.post(`${this.URL}/upload`, fd);
  }
}
