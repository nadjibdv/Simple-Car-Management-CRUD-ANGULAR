import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarcarComponent } from './navbarcar.component';

describe('NavbarcarComponent', () => {
  let component: NavbarcarComponent;
  let fixture: ComponentFixture<NavbarcarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarcarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
