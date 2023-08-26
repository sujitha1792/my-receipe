import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ReceipeListService } from "../receipe/receipe.service";
import { Receipe } from "../receipe/receipe.model";

//it is used when we inject the service in another service
@Injectable({'providedIn': "root"})
export class DataStorageService {
    constructor(private http: HttpClient, private receipeService : ReceipeListService) {
        
    }

    storeReceipes() {
        const receipes = this.receipeService.getReceipes()
        this.http.put('https://receipe-710e4-default-rtdb.firebaseio.com/receipes.json', receipes).subscribe(response=>console.log('response', response))
    }

    fetchReceipes() {
        this.http.get<Receipe[]>('https://receipe-710e4-default-rtdb.firebaseio.com/receipes.json').subscribe(receipes => {
            this.receipeService.setReceipes(receipes)
        })
    }
}