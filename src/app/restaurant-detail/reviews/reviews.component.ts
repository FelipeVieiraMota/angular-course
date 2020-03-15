import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'app/restaurants/restaurants.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews:Observable<any>

  constructor( private restaurantService:RestaurantService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.reviews = this.restaurantService
      .reviewsOfRestaurant(this.route.parent.snapshot.params['id'])
  }

  private getImage(rating:number):string{
    if(rating < 3)
      return "assets/img/reactions/pissed.png"
    else if(rating > 3 && rating <= 4)
      return "assets/img/reactions/soso.png"
    else
      return "assets/img/reactions/loved.png"
  }

}
