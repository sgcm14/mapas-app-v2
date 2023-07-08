import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlonePageComponent } from 'src/app/alone/pages/alone-page/alone-page.component';

describe('AlonePageComponent', () => {
  let component: AlonePageComponent;
  let fixture: ComponentFixture<AlonePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ AlonePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlonePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
