import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstants} from './../../common/constants';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  selectedColour: string = "Red";
  selectedGender: string = "Female";
  selectedType: string = "Casual";
  selectedPrice: number = 0;
  availableColours: string[] = [];

  constructor(private route: Router,
              private categoryService: CategoryService) { }

  ngOnInit()  {
    this.loadColoursData();
  }

  async loadColoursData() {
    const colours = await this.categoryService.loadCategoryData();
    colours.subscribe(data => {this.availableColours = data;});
  }


  onSelectGender() {
    console.log("Selected Gender = ", this.selectedGender);
    this.route.navigateByUrl(`/categories/${GlobalConstants.CATEGORY_GENDER}/${this.selectedGender}`);
  }

  onSelectColour() {
    console.log("Selected Colour = ", this.selectedColour);
    this.route.navigateByUrl(`/categories/${GlobalConstants.CATEGORY_COLOUR}/${this.selectedColour}`);
  }

  onSelectType() {
    console.log("Selected Type = ", this.selectedType);
    this.route.navigateByUrl(`/categories/${GlobalConstants.CATEGORY_TYPE}/${this.selectedType}`);
  }

}
