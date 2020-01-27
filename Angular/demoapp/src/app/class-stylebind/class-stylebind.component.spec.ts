import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassStylebindComponent } from './class-stylebind.component';

describe('ClassStylebindComponent', () => {
  let component: ClassStylebindComponent;
  let fixture: ComponentFixture<ClassStylebindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassStylebindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassStylebindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
