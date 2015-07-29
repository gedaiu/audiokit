import Ember from 'ember';
import PollingRouteModel from "../mixins/polling-route-model";

export default Ember.Route.extend(PollingRouteModel, {
  poll: function() {
      var _this = this;

      Ember.run.later( function() {
        console.log('later!');
        _this.reload();
        _this.poll();
      }, 500);
   }.observes('didLoad'),

  _getURL: function() {
    return 'http://' + localStorage.ipAddress + ':' + localStorage.port + '/devices';
  },

  model: function() {
    var _this = this;

    return new Ember.RSVP.Promise(function(resolve, reject) {
      return $.getJSON(_this._getURL(), function(data) {
        resolve(data);
      }).fail(function() {
        reject( "error" );
      });
    });
  }
});
