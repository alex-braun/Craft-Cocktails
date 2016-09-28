import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  category: DS.attr('string'),
  instructions: DS.attr(),
  ingredients: DS.attr(),
  image_url: DS.attr('string'),
  user_id:DS.attr('integer'),

  isValid: Ember.computed.notEmpty('name')
});
