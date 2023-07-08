import { ComponentFixture, TestBed } from '@angular/core/testing';
import * as mapboxgl from 'mapbox-gl'
import { environment } from 'src/environments/environment';

import { MiniMapaComponent } from 'src/app/mapas/components/mini-mapa/mini-mapa.component';

describe('MiniMapaComponent', () => {
  let component: MiniMapaComponent;
  let fixture: ComponentFixture<MiniMapaComponent>;

  (mapboxgl as any).accessToken = environment.mapboxToken;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniMapaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
