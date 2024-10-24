import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitulosPageComponent } from './capitulos-page.component';

describe('CapitulosPageComponent', () => {
  let component: CapitulosPageComponent;
  let fixture: ComponentFixture<CapitulosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapitulosPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapitulosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
