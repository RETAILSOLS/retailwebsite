import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.inputtrigger();
  }

inputtrigger(){

  $(function() {
  
    var checkbox = $("#trigger");
    var hidden = $("#hidden_fields");
    var populate = $("#populate");
    
    hidden.hide();
    
    checkbox.change(function() {
      
      if (checkbox.is(':checked')) {
        hidden.show();
        populate.val("Dude, this input got populated!");
      } else {
        
        hidden.hide();
        
      }
    });
  });
  
}

}
