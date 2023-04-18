import { Component, OnInit } from '@angular/core';
import { SelectItemGroup } from 'primeng/api';
import { FormControl, FormGroup } from '@angular/forms';


interface City {
  name: string,
  code: string
}

interface Country {
  name: string,
  code: string
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  formGroup: FormGroup;

  cities: City[];

  selectedCity: City;
  selectedCities: City;

  groupedCities: SelectItemGroup[];

  selectedCountry: Country;

  value = 90
  value2 = 2
  bool = false

  stop

  constructor() { }

  ngOnInit(): void {

    this.formGroup = new FormGroup({
      value: new FormControl(),
      id: new FormControl(),
  });

    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
  ];

  this.groupedCities = [
    {
        label: 'Germany',
        value: 'de',
        items: [
            { label: 'Berlin', value: 'Berlin' },
            { label: 'Frankfurt', value: 'Frankfurt' },
            { label: 'Hamburg', value: 'Hamburg' },
            { label: 'Munich', value: 'Munich' }
        ]
    },
    {
        label: 'USA',
        value: 'us',
        items: [
            { label: 'Chicago', value: 'Chicago' },
            { label: 'Los Angeles', value: 'Los Angeles' },
            { label: 'New York', value: 'New York' },
            { label: 'San Francisco', value: 'San Francisco' }
        ]
    },
    {
        label: 'Japan',
        value: 'jp',
        items: [
            { label: 'Kyoto', value: 'Kyoto' },
            { label: 'Osaka', value: 'Osaka' },
            { label: 'Tokyo', value: 'Tokyo' },
            { label: 'Yokohama', value: 'Yokohama' }
        ]
    }
];

    this.stop = setInterval(a=>{this.value = this.value+1},1000)
    setTimeout(() => {
      clearInterval(this.stop);
      this.bool = true
    }, 3000);

  }

  action(e){
    console.log(this.value2);
    console.log(this.selectedCity);

    console.log(this.selectedCities);

    console.log(this.selectedCountry);

    console.log(this.formGroup.value);
    
    
    
  }

}

