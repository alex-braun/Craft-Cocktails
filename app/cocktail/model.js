import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  category: DS.attr('string'),
  instructions: DS.attr(),
  ingredients: DS.attr(),
  image-url: DS.attr('string'),
  user:DS.attr('user'),

  isValid: Ember.computed.notEmpty('name')
});
