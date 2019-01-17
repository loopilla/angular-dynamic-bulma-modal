import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBComponent } from './modal-b.component';

describe('ModalBComponent', () => {
  let component: ModalBComponent;
  let fixture: ComponentFixture<ModalBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
