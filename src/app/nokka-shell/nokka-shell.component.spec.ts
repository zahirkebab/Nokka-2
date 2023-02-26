import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NokkaShellComponent } from './nokka-shell.component';

describe('NokkaShellComponent', () => {
  let component: NokkaShellComponent;
  let fixture: ComponentFixture<NokkaShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NokkaShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NokkaShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
