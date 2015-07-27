import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [{
        name: "UPC 12123",
        isFavorite: false,
        isProtected: true,
        isConnected: false
      }, {
        name: "ubunrouter",
        isFavorite: true,
        isProtected: true,
        isConnected: true
      }, {
        name: "UPC Free",
        isFavorite: false,
        isProtected: false,
        isConnected: false
      }
    ];
  }
});
