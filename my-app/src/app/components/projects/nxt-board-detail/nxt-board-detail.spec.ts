import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NxtBoardDetail } from './nxt-board-detail';

describe('NxtBoardDetail', () => {
  let component: NxtBoardDetail;
  let fixture: ComponentFixture<NxtBoardDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NxtBoardDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NxtBoardDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
