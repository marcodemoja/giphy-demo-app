import Ember from 'ember';

export default Ember.Component.extend({

  perPage:15,
  isLoading:false,

  init:(function(){
    this._super();
    this.set('pageCount',this.get('data.meta.total_pages'));
    this.set('currentPage', this.get('data.meta.page'));
  }),

  actions: {
    showModal: function(gif){
      this.get('parentView.targetObject').send('showDialog',gif);
    },
    pageChanged: function(current) {
      let offset = current * this.get('perPage');
      let self = this;
      this.set('isLoading', true);
      this.get('parentView.targetObject.store').query('gif',{q: this.get('qSearch'),offset:offset,limit:this.get('perPage')})
        .then(function(data){
            self.set('data', data);
            self.set('isLoading', false);
        });
    }
  }
});
