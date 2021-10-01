import { Component, OnInit } from '@angular/core';
import { BudgetItem } from "../../shared/models/budget-item.model";
import { UpdateEvent } from "../budget-item-list/budget-item-list.component";
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  totalBuget: number = 0 ;
  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: BudgetItem){
    this.budgetItems.push(newItem)
    this.totalBuget += newItem.amount;
  }

  deleteItem(item: BudgetItem){
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
      this.totalBuget -= item.amount;

  }
  updateItem(updateEvent :UpdateEvent){

     this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] = updateEvent.new;

     //update tootal budget
     this.totalBuget -= updateEvent.old.amount;
     this.totalBuget += updateEvent.new.amount;
  }

}
