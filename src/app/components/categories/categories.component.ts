import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  selectedColour: string = "Red";
  selectedGender: string = "Female";
  selectedType: string = "Casual";
  selectedPrice: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectGender() {
    console.log("Selected Gender = ", this.selectedGender);
  }

  onSelectColour() {
    console.log("Selected Colour = ", this.selectedColour);
  }

  onSelectType() {
    console.log("Selected Type = ", this.selectedType);
  }

}
