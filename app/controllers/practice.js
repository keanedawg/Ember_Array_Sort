import Ember from 'ember';




export default Ember.Controller.extend({
    sortKey: 'date',
    sortOrder: 'desc',
  /*  sortedRows: Ember.computed('sortKey', function() {
        return this.get('model').sortBy(this.get('sortKey'));
    }),*/

    sortedRows: Ember.computed.sort('model', 'sortKeyOrder'),

//    sortKeyOrder: this.sortKey + ":" + this.sortOrder,

    sortKeyOrder: ["date" + ":" + "dest"],
    actions: {
        sortBy(sortKey) {
            this.set('sortKey', sortKey);
        }
    }
});
