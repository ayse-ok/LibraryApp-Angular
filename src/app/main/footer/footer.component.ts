import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentDateStr: string = new Date().getFullYear().toString();

  currentDate = this.datepipe.transform(new Date, 'dd-MM-yyyy');
  
  constructor(public datepipe: DatePipe) { }

  ngOnInit(): void {
  }

}
