import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocomlpeteComponent } from './autocomlpete.component';

describe('AutocomlpeteComponent', () => {
  let component: AutocomlpeteComponent;
  let fixture: ComponentFixture<AutocomlpeteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocomlpeteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocomlpeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
