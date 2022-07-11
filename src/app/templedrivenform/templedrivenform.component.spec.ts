import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempledrivenformComponent } from './templedrivenform.component';

describe('TempledrivenformComponent', () => {
  let component: TempledrivenformComponent;
  let fixture: ComponentFixture<TempledrivenformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempledrivenformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempledrivenformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
