import Ember from 'ember';

export default Ember.Mixin.create({
  /**
   Property to store the interval
   */
  polling_model_interval: null,

  /**
   Create the polling interval
   */
  activate: function() {
    this._super();
    this.clearInterval();
    var self = this;
    this.polling_model_interval = setInterval(function() {
      var obj = self.get('currentModel');
      self.refresh();
    }, 1000);
  },

  /**
   Destroy the polling interval on deactivate
   */
  deactivate: function() {
    this._super();
    this.clearInterval();
  },

  /**
   Helper to clear the interval
   */
  clearInterval: function() {
    if(this.polling_model_interval) {
      clearInterval(this.polling_model_interval);
    }
  },
});
