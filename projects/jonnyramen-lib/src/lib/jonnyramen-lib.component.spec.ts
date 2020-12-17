import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JonnyramenLibComponent } from './jonnyramen-lib.component';

describe('JonnyramenLibComponent', () => {
  let component: JonnyramenLibComponent;
  let fixture: ComponentFixture<JonnyramenLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JonnyramenLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JonnyramenLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
