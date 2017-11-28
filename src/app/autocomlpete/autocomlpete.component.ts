import { Component, OnInit , ElementRef} from '@angular/core';
import { SearchService } from '../services/search.service';
import { NodeSearchService } from '../services/node-search.service';
import { Country } from '../country';

@Component({
  selector: 'app-autocomlpete',
  templateUrl: './autocomlpete.component.html',
  styleUrls: ['./autocomlpete.component.css'],
  host: {
    '(document:click)': 'handleClick($event)',
  }
})
export class AutocomlpeteComponent implements OnInit {
  public query = '';
  public filteredList = [];
  public elementRef;

  constructor(myElement: ElementRef, public Search: NodeSearchService) {
      this.elementRef = myElement;
  }

  ngOnInit() {
  }

  /**
   * Called by the input element to get suggestions
   */
  lookup() {
    var obs = this.Search.autoComplete(this.query);
    // This is an asynch query that returns an Observable to which
    // we subscribe in order to read the results
    if (obs != null)
     var tempArr = [];
      obs.subscribe(val => { 
        var arr = JSON.parse(val);
        for (let i=0; i< arr.length; i++) {
          tempArr.push(arr[i]);
        }
        // Set the array values at once
        this.filteredList = tempArr;
      } ,
      err => console.error("Error:" +err));
  }

  /**
   * 
   * @param item Called by the input element to select a suggestion from the list
   */
  select(item){
      this.query = item;
      this.filteredList = [];
  }

  /**
   * Handles clicks on the suggestion to load value into the input field
   * @param event 
   */
  handleClick(event){
    var clickedComponent = event.target;
    var inside = false;
    do {
        if (clickedComponent === this.elementRef.nativeElement) {
            inside = true;
        }
       clickedComponent = clickedComponent.parentNode;
    } while (clickedComponent);
     if(!inside){
         this.filteredList = [];
     }
  }

}
