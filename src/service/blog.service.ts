import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class BlogService {
    
    constructor(private http: HttpClient) { 
        console.log("El cliente ha sido inicializado")
    }

    getMision(): Observable<any> {
        return this.http.get('assets/data/mision.json');
    }

    getVision(): Observable<any> {
        return this.http.get('assets/data/vision.json');
    }
}
