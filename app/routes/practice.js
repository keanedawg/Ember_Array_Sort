import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return [{
            title: "Learning EmberJS",
            author: "Erik Hatchett"
        },{
            title: "Controllers are Dead",
            author: "Frank Treacy"
        },{
            title: "Diddly Doo",
            author: "No I'm Adrian"
        },{
            title: "Yisss",
            author: "Dank Sir"
        }];
    }
});
