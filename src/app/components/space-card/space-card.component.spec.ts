import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SpaceCardComponent } from './space-card.component';

describe('SpaceCardComponent', () => {
  let component: SpaceCardComponent;
  let fixture: ComponentFixture<SpaceCardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
