import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var myArray = [{
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

        myArray.sort(function(a,b) {
            if (a.author > b.author) {
                console.log(a + " is greater than " + b);
                return 1;
            }
            else {
                console.log(b + " is greater than " + a);
                return -1;
            }
        });

        if ("dat" < "cat") {
            console.log("ayy");
        }

        console.log(myArray[2]);
        return myArray;
    }
});
