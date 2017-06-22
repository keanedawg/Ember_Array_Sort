import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return [{
            title: "Learning EmberJS",
            author: "Erik Hatchett",
            date: new Date(Date.now())
        },{
            title: "Controllers are Dead",
            author: "Frank Treacy",
            date: new Date(400000000)
        },{
            title: "Diddly Doo",
            author: "No I'm Adrian",
            date: new Date(103205000000)
        },{
            title: "Yisss",
            author: "Dank Sir",
            date: new Date(134200000000)
        }];
    }
});
