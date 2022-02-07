import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZiyaretciComponent } from './ziyaretci.component';

describe('ZiyaretciComponent', () => {
  let component: ZiyaretciComponent;
  let fixture: ComponentFixture<ZiyaretciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZiyaretciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZiyaretciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
