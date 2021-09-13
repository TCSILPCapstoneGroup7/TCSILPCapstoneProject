import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhantomUserComponent } from './phantom-user.component';

describe('PhantomUserComponent', () => {
  let component: PhantomUserComponent;
  let fixture: ComponentFixture<PhantomUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhantomUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhantomUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
