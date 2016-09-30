import DS from 'ember-data';
import Ember from 'ember';
// import {belongsTo} from 'ember-data/relationships';

export default DS.Model.extend({
  name: DS.attr('string'),
  category: DS.attr('string'),
  directions: DS.attr('string'),
  ingredients: DS.attr('string'),
  imageurl: DS.attr('string'),
  user_id: DS.attr('number'),
  user: DS.attr(),
  editable: DS.attr('boolean'),

  isValid: Ember.computed.notEmpty('name'),
});
