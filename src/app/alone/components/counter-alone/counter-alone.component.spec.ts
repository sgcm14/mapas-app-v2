import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterAloneComponent } from 'src/app/alone/components/counter-alone/counter-alone.component';

describe('CounterAloneComponent', () => {
  let component: CounterAloneComponent;
  let fixture: ComponentFixture<CounterAloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ CounterAloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterAloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
