import { Restaurant } from './restaurant/restaurant.model'
import { meat_api } from '../app.api'
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ErrorHandler } from '../app.error-handler'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item.model';

@Injectable()

export class RestaurantService {
    
    constructor(private http:Http){}

    restaurants(): Observable<Restaurant[]>{
        return this.http.get(`${meat_api}/restaurants`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    restaurantsById(id:string):Observable<Restaurant>{
        return this.http.get(`${meat_api}/restaurants/${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    reviewsOfRestaurant(id:string):Observable<any>{
        return this.http.get(`${meat_api}/restaurants/${id}/reviews`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    menuOfRestaurant(id: string):Observable<MenuItem[]>{
        return this.http.get(`${meat_api}/restaurants/${id}/menu`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    callMethod(url_api:string, path:string):Observable<any>{
        return this.http.get(`${url_api}${path}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }
}
















