import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnagraficaDettaglioComponent } from './anagrafica-dettaglio.component';

describe('AnagraficaDettaglioComponent', () => {
  let component: AnagraficaDettaglioComponent;
  let fixture: ComponentFixture<AnagraficaDettaglioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnagraficaDettaglioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnagraficaDettaglioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
