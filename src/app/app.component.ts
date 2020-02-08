import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgAss3';
  items = [];
  display = false;
  count = 1;
  onClick(){
    this.display = !this.display;
    this.items.push(this.count);
    this.count++;
  }
  getBackground(data:any){
    let index = this.items.indexOf(data);
    return index > 3 ? 'blue' : '';
  }
  getColor(data:any){
    let index = this.items.indexOf(data);
    return index > 3 ? 'white' : '';
  }
}
