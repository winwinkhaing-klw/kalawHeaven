import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: HttpClient) { }
  getDishes() : Dish[]{
  //getDishes(): Observable<Dish[]> {
    // return this.http.get<Dish[]>(baseURL + 'dishes');
    return DISHES;
  }
  getDish(id: number): Dish {
    return DISHES.filter((dish) => (dish.id === id))[0];
  }

  // getDish(id: number): Observable<Dish> {
  //   return this.http.get<Dish>(baseURL + 'dishes/' + id);
  // }
  getFeaturedDish(): Dish {
    return DISHES.filter((dish) => dish.featured)[0];
  }
  // getFeaturedDish(): Observable<Dish | any> {
  //   return this.http.get<Dish[]>(baseURL + 'dishes?featured=true').pipe(map(dishes => dishes[0]));
  // }
  getDishIds(): number[] | any{
    return DISHES.filter(dish => dish.id)[0].id;
  }
}
