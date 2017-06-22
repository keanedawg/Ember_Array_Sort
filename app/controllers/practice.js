import Ember from 'ember';

var sortByAuthor = function(a,b) {
            if (a.author > b.author) {
                console.log(a + " is greater than " + b);
                return 1;
            }
            else {
                console.log(b + " is greater than " + a);
                return -1;
            }
        };

var sortByTitle = function(a,b) {
            if (a.title > b.title) {
                console.log(a + " is greater than " + b);
                return 1;
            }
            else {
                console.log(b + " is greater than " + a);
                return -1;
            }
        };



export default Ember.Controller.extend({

    actions: {
        sortAuthors() {
            var myModel = this.get('model');
            myModel.sort(sortByAuthor);
            console.log(myModel[0].author);
        },
        sortTitles() {
            var myModel = this.get('model');
            myModel.sort(sortByTitle);
            console.log(myModel[0].title);
        }
    }
});
