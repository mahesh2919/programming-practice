import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRefrenceComponent } from './template-refrence.component';

describe('TemplateRefrenceComponent', () => {
  let component: TemplateRefrenceComponent;
  let fixture: ComponentFixture<TemplateRefrenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateRefrenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateRefrenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
