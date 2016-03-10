import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    return new Ember.RSVP.hash({
      kittens: this.store.query('gif', {q: 'kittens',offset:0,limit:15} ),
      puppies: this.store.query('gif', {q:'puppies',offset:0,limit:15})
    });
  },

  actions:{
    showDialog: function(gif){
      Ember.$('.modal-body').html('<img id="'+gif.get('id')+'" src="'+gif.get('original')+'" />');
      let width = (parseInt(gif.get('original_width'))+36)+'px';
      Ember.$('.modal-dialog').css({
        width:width,
        height:'auto',
        'max-height':'100%'});

      Ember.$('.modal').modal().on('shown.bs.modal',function(){
      }.bind(this));
      Ember.$('.modal').modal().on('hidden.bs.modal', function() {
      }.bind(this));
    }
  }

});
