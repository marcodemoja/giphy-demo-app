import DS from 'ember-data';

export default DS.Model.extend({
  embed_url: DS.attr('string'),
  bitly_gif_url: DS.attr('string'),
  url_gif_small: DS.attr('string'),
  fixed_width_still: DS.attr('string'),
  fixed_height: DS.attr('string'),
  original_still: DS.attr('string'),
  original:DS.attr('string'),
  original_width: DS.attr('string'),
  images: DS.hasMany('image')

});
