import Ember from 'ember';

export default Ember.Controller.extend({

});
//   headerMessage: 'Coming Soon',
//   responseMessage: '',
//   emailAddress: '',
//
// //obtaining emailAddress from template
//   isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
//   isDisabled: Ember.computed('emailAddress', function() {
//     return this.get('emailAddress') === '';
//   }),
//
//   actions: {
// //response message is set in the template, under and if conditional that the
// //response is being saved.
//     saveInvitation() {
//       const email = this.get('emailAddress');
//       const newInvitation = this.store.createRecord('invitation', { email: email });
//       newInvitation.save().then((response) => {
//
//       this.set('responseMessage', `Thank you! We saved your email address with
//       the following id: ${response.get('id')}`);
//       this.set('emailAddress', '');
//     });
//       }
//     }
// });
