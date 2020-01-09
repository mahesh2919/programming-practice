import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowaydatabindComponent } from './twowaydatabind.component';

describe('TwowaydatabindComponent', () => {
  let component: TwowaydatabindComponent;
  let fixture: ComponentFixture<TwowaydatabindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwowaydatabindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwowaydatabindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
