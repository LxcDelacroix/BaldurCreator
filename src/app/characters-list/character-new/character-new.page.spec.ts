import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterNewPage } from './character-new.page';

describe('CharacterNewPage', () => {
  let component: CharacterNewPage;
  let fixture: ComponentFixture<CharacterNewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CharacterNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
