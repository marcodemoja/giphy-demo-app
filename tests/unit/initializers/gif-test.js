import Ember from 'ember';
import GifInitializer from 'giphy-api-demo/initializers/gif';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | gif', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  GifInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
