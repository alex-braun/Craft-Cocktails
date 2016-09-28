import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  category: DS.attr('string'),
  directions: DS.attr(),
  ingredients: DS.attr(),
  imageurl: DS.attr('string'),
  // user:DS.attr('user'),

  isValid: Ember.computed.notEmpty('name')
});
