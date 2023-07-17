import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { DishService } from '../services/dish.service';
import { baseURL } from '../shared/baseurl';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
  dishes: Dish[] = [];
  selectedDish: Dish | undefined;
  constructor(private dishService: DishService){}
    //@Inject('baseURL') private baseURL : any) { }
  ngOnInit(): void {
    this.dishes = this.dishService.getDishes();
  }
  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }
  }
