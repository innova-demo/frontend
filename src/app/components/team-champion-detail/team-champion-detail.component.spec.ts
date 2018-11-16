import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamChampionDetailComponent } from './team-champion-detail.component';

describe('TeamChampionDetailComponent', () => {
  let component: TeamChampionDetailComponent;
  let fixture: ComponentFixture<TeamChampionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamChampionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamChampionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
