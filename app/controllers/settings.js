import Ember from 'ember';

export default Ember.Controller.extend({
  ipAddress: localStorage.ipAddress,
  port: localStorage.port,

  actions: {
    submit: function() {
      localStorage.ipAddress = this.get('ipAddress');
      localStorage.port = this.get('port');
    }
  }
});
