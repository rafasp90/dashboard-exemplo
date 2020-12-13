import { Component } from '@angular/core';
import { single } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'dashboard-exemplo';

  single: any[] = [];
  view: any[] = [500, 400]; 
  legend: boolean = true;
  legendPosition: string = 'below';

  resultados: any[] = [];

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {
    Object.assign(this, { single });
    console.log('result', this.single)

    const unique = [...new Set(this.single.map(item => item.name))];
    console.log('unique', unique)
    this.resultados = unique.map(item => this.single.filter(e => e.name == item));
    //console.log('meu result', result)
  }

  
  
  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
