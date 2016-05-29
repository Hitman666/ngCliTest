import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { NgCliTestAppComponent } from '../app/ng-cli-test.component';

beforeEachProviders(() => [NgCliTestAppComponent]);

describe('App: NgCliTest', () => {
  it('should create the app',
      inject([NgCliTestAppComponent], (app: NgCliTestAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng-cli-test works!\'',
      inject([NgCliTestAppComponent], (app: NgCliTestAppComponent) => {
    expect(app.title).toEqual('ng-cli-test works!');
  }));
});
