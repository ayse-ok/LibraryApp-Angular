import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZiyaretciIslemlerComponent } from './ziyaretci-islemler.component';

describe('ZiyaretciIslemlerComponent', () => {
  let component: ZiyaretciIslemlerComponent;
  let fixture: ComponentFixture<ZiyaretciIslemlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZiyaretciIslemlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZiyaretciIslemlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
