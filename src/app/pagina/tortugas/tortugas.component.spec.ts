import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TortugasComponent } from './tortugas.component';

describe('TortugasComponent', () => {
  let component: TortugasComponent;
  let fixture: ComponentFixture<TortugasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TortugasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TortugasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
