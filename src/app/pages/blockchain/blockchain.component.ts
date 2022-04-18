import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.scss']
})
export class BlockchainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.bindfunctions();
  }

  bindfunctions() {

    window.onscroll = function() {myFunction()};
    var header = document.getElementById("myHeader1");
    var sticky = header.offsetTop;
    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky1");
      } else {
        header.classList.remove("sticky1");
      }
    }


  }


}
