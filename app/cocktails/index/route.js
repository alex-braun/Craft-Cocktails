// import Ember from 'ember';
//
// export default Ember.Route.extend({
//
//   model() {
//     return this.store.findAll('cocktail');
//   }
//
// });

import Ember from 'ember';

export default Ember.Route.extend({

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
