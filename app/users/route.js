import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('cocktail');
    // return this.get('store').findAll('cocktail');
    // return this.get('store').find('cocktail', { editable: true });
//     this.get('store').query('cocktail', {
//       filter: {
//       editable: true
//     }
//     }).then(function(cocktail) {
//     return cocktail.get('cocktail');
// });
}
    // results this.get('store').query('cocktail', { filter: { editable: true } });

});
