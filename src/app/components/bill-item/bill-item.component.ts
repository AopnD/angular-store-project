import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill-item',
  templateUrl: './bill-item.component.html',
  styles: [
  ]
})
export class BillItemComponent implements OnInit {

  constructor() { }
@Input()
item: any | undefined

  ngOnInit(): void {
  }

}
