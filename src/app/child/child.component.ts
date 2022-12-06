import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {

  @Output() newItemEvent = new EventEmitter<string>();
  @Input() item = '';

  addNewItem(value:string){
    this.newItemEvent.emit(value);
  }

  
    
  }
