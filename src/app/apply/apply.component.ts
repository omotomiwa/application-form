import { Component,ViewChild, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import {trigger,style,transition,animate,keyframes,query,stagger,state,} from "@angular/animations";
 import { Content } from '@angular/compiler/src/render3/r3_ast';
import { FormGroup, NgForm} from '@angular/forms';
import { Subscription } from 'rxjs';
import {MatSnackBar,MatSnackBarModule} from '@angular/material/snack-bar';



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
  
  
  person: { fullName: string; email: string; github: string; linkedin: string; cv: string; cover: string; };
  ngOnInit() {
   // throw new Error("Method not implemented.");
     this.person= {
    fullName: "",
    email: '',
    github: '',
    linkedin: '',
    cv: "",
    cover:""
    };


  }

  onSubmit(){
    console.log(this.person);
    
    
  }
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.open("Form Submitted", "Ok", {
      duration: 2000,
    });
  }
  

 


  @ViewChild('profileForm') public form: FormGroup;
  



public value = 0;
    public min = 0;
    public max = 6;
    public chunks = 6;

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
     this.completeness = (completed ) + '';
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
