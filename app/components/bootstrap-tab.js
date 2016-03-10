import Ember from 'ember';

export default Ember.Component.extend({

  initTabs: (function() {
    Ember.$('#tabs a').click(function (e) {
      e.preventDefault();
      Ember.$(this).tab('show');
      Ember.$(this).css('background-color','#fff').css('color','#2b669a');
    });
  }).on('didInsertElement')






});
