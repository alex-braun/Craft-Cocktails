import DS from 'ember-data';
import Ember from 'ember';
// import {belongsTo} from 'ember-data/relationships';

export default DS.Model.extend({
  name: DS.attr('string'),
  category: DS.attr('string'),
  directions: DS.attr(),
  ingredients: DS.attr(),
  imageurl: DS.attr('string'),
  user_id: DS.attr('number'),
  user: DS.attr(),

  isValid: Ember.computed.notEmpty('name')
});
