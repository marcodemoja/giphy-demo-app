import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  namespace: 'v1',
  host: 'http://api.giphy.com',

  urlForQuery: function(){
    return this.buildURL('gifs/search?api_key=dc6zaTOxFJmzC');

  },

  pathForType: function(type) {
    return type;
  },

  shouldReloadAll: function(){
    return true;
  }

});
