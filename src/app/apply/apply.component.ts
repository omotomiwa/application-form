import { Component, OnInit } from '@angular/core';
import {trigger,style,transition,animate,keyframes,query,stagger,state,} from "@angular/animations";
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css'],
  animations : [

    trigger('changeDivSize', [
      state('initial', style({
        backgroundColor: 'blue',
        width: '80px',
        height: '40px'
      })),
      state('final', style({
        backgroundColor: 'green',
        width: '80px',
        height: '40px',
       
        
      })),
      transition('initial=>final', animate('1000ms')),
      // transition('final=>initial', animate('1000ms'))
    ]),

    
  ]
  
})
export class ApplyComponent implements OnInit {
  currentState = 'initial';

changeState() {
  this.currentState = this.currentState === 'initial' ? 'final': "final"
}

  constructor() { }

  ngOnInit() {
  }
 
}
