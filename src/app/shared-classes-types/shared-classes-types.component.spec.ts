import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedClassesTypesComponent } from './shared-classes-types.component';

describe('SharedClassesTypesComponent', () => {
  let component: SharedClassesTypesComponent;
  let fixture: ComponentFixture<SharedClassesTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedClassesTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedClassesTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
