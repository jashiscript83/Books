var app = new Vue({
    el: '#app',
    data: {
        books: [],
        inputvalue: "",
        titulos: "",
        bookfiltered: [],
        booksoriginal: [],

    },
    created: function () {
        this.getData();


    },

    methods: {

        getData: function () {
            fetch("https:/api.myjson.com/bins/1h3vb3", {
                method: "GET"

            }).then(function (response) {
                if (response.ok) {
                    console.log(2);

                    return response.json();
                }

            }).then(function (json) {
                app.books = json.books;
                app.booksoriginal = json.books
                app.titulos;




            }).catch(function (error) {
                console.log("Request failed:" + error.message);
            });


        },

        filter: function () {

            this.bookfiltered = [];
            this.books = this.booksoriginal
           

            for (var r = 0; r < this.books.length; r++) {

                this.titulos = this.books[r].titulo.toUpperCase();
               
                if (this.titulos.includes(this.inputvalue.toUpperCase())) {
                    this.bookfiltered.push(this.books[r])
                }


            }

          
            this.books = this.bookfiltered;


        }


    },



})
