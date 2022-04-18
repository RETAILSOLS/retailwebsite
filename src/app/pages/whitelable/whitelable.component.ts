import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whitelable',
  templateUrl: './whitelable.component.html',
  styleUrls: ['./whitelable.component.scss']
})
export class WhitelableComponent implements OnInit {
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
