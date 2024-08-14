import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreataccountComponent } from './creataccount.component';

describe('CreataccountComponent', () => {
  let component: CreataccountComponent;
  let fixture: ComponentFixture<CreataccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreataccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreataccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
