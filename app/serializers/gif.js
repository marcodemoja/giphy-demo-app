import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({

  normalizeQueryResponse: function(store, type, payload) {
    var data = {};
    data.data = [];
    data.meta = {};
    payload.data.forEach(function(item){
      let page;
      let total_pages = (Math.round(payload.pagination.total_count/payload.pagination.count));

      if(payload.pagination.offset === 0) {
        page = 1;
      }else {
        page = Math.round(payload.pagination.offset / payload.pagination.count);
      }
      data.meta.total_pages = total_pages;
      data.meta.per_page = payload.pagination.count;
      data.meta.page = page;
      data.data.push({
        id: item.id,
        type: type.modelName,
        attributes:{
          title: item.title,
          embed_url: item.embed_url,
          user: item.user,
          bitly_gif_url: item.bitly_gif_url,
          url_gif_small:item.images.fixed_height_still.url,
          fixed_width_still:item.images.fixed_width_still.url,
          fixed_height:item.images.fixed_height.url,
          original_still:item.images.original_still.url,
          original:item.images.original.url,
          original_width: item.images.original.width
        }
      });
    });
    return data;
  },

  keyForAttribute: function(key) {
    return key;
  },
  keyForRelation: function(key){
    return key;
  }

});
