import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerationOneComponent } from './generation-one.component';

describe('GenerationOneComponent', () => {
  let component: GenerationOneComponent;
  let fixture: ComponentFixture<GenerationOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerationOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerationOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
