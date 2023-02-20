import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  Islogin:boolean=true
  @Input()technology:string | undefined;
  @Input('tech') name: any;        //aliasing
  

  @Input()count!: number;
 
  @Output() countChanged: EventEmitter<number> =   new EventEmitter();
 
    increment() {
        this.count++;
        this.countChanged.emit(this.count);
      }
      decrement() {
        this.count--;
        this.countChanged.emit(this.count);
    }



  childMsg(){
    prompt('The @viewchild decorated is initiate ')
  }  

  childTEmplateRefrenceMsg(){
    prompt('The template reference is initiate  to call this ')
  } 

  items= [
    { name:'Angular', active:true},
    { name:'React', active:true},
    { name:'Typescript', active:true},
    { name:'FoxPro', active:false},
    { name:'Javascript', active:true},
    { name:'ASP.NET Core', active:true},
    { name:'DBase', active:false}
  ]
  


  constructor() { }


 
  ngOnInit(): void {
  }

}



//Just go to tsconfig.json and set

//"compilerOptions": 
 //   "strictPropertyInitialization": false,
  

