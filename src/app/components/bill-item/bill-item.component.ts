import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill-item',
  templateUrl: './bill-item.component.html',
  styleUrls: ['./bill-item.component.css']

})
export class BillItemComponent implements OnInit {

  constructor() { }
@Input()
item: any | undefined
@Input()
isHighLight: boolean = false




  ngOnInit(): void {
  }

}
