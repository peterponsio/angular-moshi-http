import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMoshiHttpComponent } from './angular-moshi-http.component';

describe('AngularMoshiHttpComponent', () => {
  let component: AngularMoshiHttpComponent;
  let fixture: ComponentFixture<AngularMoshiHttpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularMoshiHttpComponent]
    });
    fixture = TestBed.createComponent(AngularMoshiHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
