import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterAloneComponent } from 'src/app/alone/components/counter-alone/counter-alone.component';

@Component({
  selector: 'app-alone-page',
  standalone: true,
  imports: [CommonModule, CounterAloneComponent],
  templateUrl: './alone-page.component.html',
  styleUrls: ['./alone-page.component.scss']
})
export class AlonePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
