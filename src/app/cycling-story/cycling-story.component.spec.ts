import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyclingStoryComponent } from './cycling-story.component';

describe('CyclingStoryComponent', () => {
  let component: CyclingStoryComponent;
  let fixture: ComponentFixture<CyclingStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyclingStoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CyclingStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
