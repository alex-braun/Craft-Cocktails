import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),

  user: Ember.computed.alias('auth.credentials.email'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  isAdmin: Ember.computed.alias('auth.isAdmin'),
  queryParams: {
    limit: { refreshModel: true },
    letter: { refreshModel: true }
  },

  model(params) {

    if (params.limit === 'all') {
      return this.store.findAll('cocktail');
    }

    return this.store.query('cocktail', {
      orderBy: 'name',
      startAt: params.letter,
      // endAt: params.letter,
      endAt: params.letter+"\uf8ff"
    });
  },

  actions: {

    deleteCocktail(cocktail) {

      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        cocktail.destroyRecord();
      }
    }
  }
});
