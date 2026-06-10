import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseEntry } from './expense-entry';

describe('ExpenseEntry', () => {
  let component: ExpenseEntry;
  let fixture: ComponentFixture<ExpenseEntry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseEntry],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpenseEntry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
