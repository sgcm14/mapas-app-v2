import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullScreenComponent } from 'src/app/mapas/pages/full-screen/full-screen.component';

describe('FullScreenComponent', () => {
  let component: FullScreenComponent;
  let fixture: ComponentFixture<FullScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
