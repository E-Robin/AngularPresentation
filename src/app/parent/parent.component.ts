import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  technology:string='Angular'
  
  Counter = 5;
 
  countChangedHandler(count: number) {
    this.Counter = count;
    console.log(count);
  }



  @ViewChild(ChildComponent) child:ChildComponent;

  childmsg(){
    this.child.childMsg()
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
