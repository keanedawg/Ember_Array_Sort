import Ember from 'ember';




export default Ember.Controller.extend({
    sortKey: 'date',
    sortOrder: 'desc',
  /*  sortedRows: Ember.computed('sortKey', function() {
        return this.get('model').sortBy(this.get('sortKey'));
    }),*/

    sortedRows: Ember.computed.sort('model', 'sortKeyOrder'),

    sortKeyOrder: ["date:desc"],
    actions: {
        sortBy(sortKey, sortOrder) {
            this.set('sortKey', sortKey);
            this.set('sortOrder', sortOrder);
            this.set('sortKeyOrder', [sortKey + ":" + sortOrder])
        }
    }
});
