import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ManageLeaves } from './manage-leaves';

describe('ManageLeaves', () => {
  let component: ManageLeaves;
  let fixture: ComponentFixture<ManageLeaves>;

  beforeEach(async () => {
    localStorage.setItem('currentUser', JSON.stringify({ id: 1, email: 'admin@test.com' }));

    await TestBed.configureTestingModule({
      imports: [ManageLeaves],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ManageLeaves);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  afterEach(() => {
    localStorage.removeItem('currentUser');
  });
});
