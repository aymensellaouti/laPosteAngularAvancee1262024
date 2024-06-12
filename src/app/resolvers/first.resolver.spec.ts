import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { firstResolver } from './first.resolver';

describe('firstResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => firstResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
