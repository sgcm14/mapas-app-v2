import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter-alone',
  standalone: true,
  templateUrl: './counter-alone.component.html',
  styleUrls: ['./counter-alone.component.scss']
})
export class CounterAloneComponent {

  @Input()
  public counter: number = 10;

}
