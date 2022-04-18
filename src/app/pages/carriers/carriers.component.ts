import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carriers',
  templateUrl: './carriers.component.html',
  styleUrls: ['./carriers.component.scss']
})
export class CarriersComponent implements OnInit {

  SDDL = {
    singleSelection: true,
    idField: 'item_id',
    textField: 'item_text',
    enableCheckAll: false,
    itemsShowLimit: 3,
    allowSearchFilter: false,
    closeDropDownOnSelection:true,
  };

  Role_Type = [
    { item_id: "RTL Design Engineer", item_text: 'RTL Design Engineer' },
    { item_id: "RTL Verification Engineer", item_text: 'RTL Verification Engineer' },
    { item_id: "Physical Design Engineer", item_text: 'Physical Design Engineer' }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
