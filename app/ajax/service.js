import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';
import ENV from 'Craft-Cocktails/config/environment';

export default AjaxService.extend({
  host: ENV.apiHost, //deployment step
  auth: Ember.inject.service(),
  headers: Ember.computed('auth.credentials.token', {
    get () {
      let headers = {};
      const token = this.get('auth.credentials.token');
      if (token) {
        headers.Authorization = `Token token=${token}`;
      }

      return headers;
    },
  }),
});
