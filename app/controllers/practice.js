import Ember from 'ember';




export default Ember.Controller.extend({
    sortKey: 'author',
    sortedRows: Ember.computed('sortKey', function() {
        return this.get('model').sortBy(this.get('sortKey'));
    }),

    actions: {
        sortBy(sortKey) {
            this.set('sortKey', sortKey);
        }
    }
});
