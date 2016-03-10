import Ember from 'ember';

export default Ember.Component.extend({

  fitSize: function(){
    Ember.$('.modal').on('show', function () {
      Ember.$(this).find('.modal-body').css({
        width:'auto',
        height:'auto',
        'max-height':'100%'});
    });
  }.on('didInsertElement')

});
