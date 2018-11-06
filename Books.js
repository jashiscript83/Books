var app = new Vue({
    el: '#app',
    data: {
        books: [],
        inputvalue: "",
        titulos: "",
        bookfiltered: [],
        booksoriginal:[],

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

                app.booksoriginal=json.books
                app.titulos;




            }).catch(function (error) {
                console.log("Request failed:" + error.message);
            });


        },

        filter: function () {
//             var none=document.getElementById("none")
//            var block=document.getElementById("f1_card")
            this.bookfiltered = [];
            this.books = this.booksoriginal
            console.log(this.books.length)
            console.log(this.inputvalue)
                        console.log(this.bookfiltered)

            for (var r = 0; r <this.books.length; r++) {

                this.titulos = this.books[r].titulo.toUpperCase();
                console.log((this.titulos.includes(this.inputvalue.toUpperCase())) )
                if (this.titulos.includes(this.inputvalue.toUpperCase())) {
                    this.bookfiltered.push(this.books[r])
                }
////            if (this.inputvalue==null){
//                
//                block=none 
//        
//                
//                }

            }
   
            console.log(this.bookfiltered)
            this.books = this.bookfiltered;


        }


    },



})
