import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevCmdComponent } from './dev-cmd.component';

describe('DevCmdComponent', () => {
  let component: DevCmdComponent;
  let fixture: ComponentFixture<DevCmdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevCmdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevCmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
