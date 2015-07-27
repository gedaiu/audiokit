import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [{
        name: "Bogdan's phone",
        id: '12:A2:25:B4:FA:23',
        isFavorite: false,
        isConnected: false
      }, {
        name: "Bogdan's IPod",
        id: '12:A2:25:B4:FA:23',
        isFavorite: true,
        isConnected: true
      }
    ];
  }
});
