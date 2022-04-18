import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  SDDL = {
    singleSelection: true,
    idField: 'item_id',
    textField: 'item_text',
    enableCheckAll: false,
    itemsShowLimit: 3,
    allowSearchFilter: false,
    closeDropDownOnSelection:true,
  };

  Company_Type = [
    { item_id: "IT", item_text: 'IT' },
    { item_id: "Healthcare", item_text: 'Healthcare' },
    { item_id: "Human Resource (HR)", item_text: 'Human Resource (HR)' },
    { item_id: "Real Estate", item_text: 'Real Estate' },
    { item_id: "Insurance", item_text: 'Insurance' },
    { item_id: "Banking", item_text: 'Banking' }
  ]
  
	
  constructor() { }

  ngOnInit(): void {
  }

}
 