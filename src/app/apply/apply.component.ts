import { Component,ViewChild, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import {trigger,style,transition,animate,keyframes,query,stagger,state,} from "@angular/animations";
 import { Content } from '@angular/compiler/src/render3/r3_ast';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';


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
export class ApplyComponent implements  AfterViewInit, OnDestroy,OnInit {
  @ViewChild('profileForm') public form: FormGroup;
  public person = {
    fullName: '',
    email: '',
    github: '',
    linkedin: '',
    cover: "",
};
public value = 0;
    public min = 0;
    public max = 5;
    public chunks = 5;

    public completeness = '0%';

    public progressStyle: {[key: string]: any} = {
      background: 'lightgreen'
  };

  public emptyStyle: {[key: string]: any} = {
    background: 'pink'
};

private formSubscription: Subscription;

public ngAfterViewInit(): void {
  this.formSubscription = this.form.valueChanges.subscribe(x => {
     const completed = Object.keys(this.form.value).reduce((acc, curr) => this.form.value[curr] ? acc + 1 : acc, 0);
     this.value = completed;
     this.completeness = (completed * 20) + '%';
  });
}

public ngOnDestroy(): void {
  this.formSubscription.unsubscribe();
}
  
  
  
  
  
  
  
  currentState = 'initial';

changeState() {
  this.currentState = this.currentState === 'initial' ? 'final': "final"
}

  
 
}
