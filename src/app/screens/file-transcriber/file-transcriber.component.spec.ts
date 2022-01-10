/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FileTranscriberComponent } from './file-transcriber.component';

describe('FileTranscriberComponent', () => {
  let component: FileTranscriberComponent;
  let fixture: ComponentFixture<FileTranscriberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileTranscriberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileTranscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
