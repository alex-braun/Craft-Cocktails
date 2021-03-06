import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('about');
  this.route('cocktails', function() {
   this.route('new');
   this.route('edit', { path: '/:cocktail_id/edit' });
 });
});

export default Router;
