import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('cocktail');
  },

  actions: {

    saveCocktail(newCocktail) {
      newCocktail.save().then(() => this.transitionTo('cocktails'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
