const books = [
    {
        image: {
            src: "https://m.media-amazon.com/images/I/51gJpbOQpHL.jpg",
            alt: "Atomic Habits - Book",
        },
        author: "James Clear",
        title: "Atomic Habits",
        genre: "Genre",
        publisher: "Some publisher",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam repellendus expedita, magnam nam odit et exercitationem. A possimus provident architecto necessitatibus non, reiciendis doloremque, sed nam quibusdam ratione molestias quo.",
        reviews: [{
            name: "John Doe",
            email: "jDoe@gmail.com",
            rating: 4,
            comment: "Very good Book",
            img: {
                src: "",
                alt: ""
            }
        }]
    },
    {
        image: {
            src: "https://m.media-amazon.com/images/I/81MtKRJ1HLL._AC_UY436_QL65_.jpg",
            alt: "Can't Hurt Me - Book",
        },
        author: "David Goggins",
        title: "Can't Hurt Me",
        genre: "Genre",
        publisher: "Some publisher",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam repellendus expedita, magnam nam odit et exercitationem. A possimus provident architecto necessitatibus non, reiciendis doloremque, sed nam quibusdam ratione molestias quo.",
        reviews: [{
            name: "John Doe",
            email: "jDoe@gmail.com",
            rating: 4,
            comment: "Very good Book",
            img: {
                src: "",
                alt: ""
            }
        }]
    },
    {
        image: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51YGx8qVVXL._AC_SX368_.jpg",
            alt: "Hello Beautiful - Book",
        },
        author: "Ann Napolitano",
        title: "Hello Beautiful",
        genre: "Genre",
        publisher: "Some publisher",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam repellendus expedita, magnam nam odit et exercitationem. A possimus provident architecto necessitatibus non, reiciendis doloremque, sed nam quibusdam ratione molestias quo.",
        reviews: [{
            name: "John Doe",
            email: "jDoe@gmail.com",
            rating: 4,
            comment: "Very good Book",
            img: {
                src: "",
                alt: ""
            }
        }]
    },
    {
        image: {
            src: "https://m.media-amazon.com/images/I/41Ej0vY9BoL.jpg",
            alt: "Pomegranate - Book",
        },
        author: "Helen Elaine Lee",
        title: "Pomegranate",
        genre: "Genre",
        publisher: "Some publisher",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam repellendus expedita, magnam nam odit et exercitationem. A possimus provident architecto necessitatibus non, reiciendis doloremque, sed nam quibusdam ratione molestias quo.",
        reviews: [{
            name: "John Doe",
            email: "jDoe@gmail.com",
            rating: 4,
            comment: "Very good Book",
            img: {
                src: "",
                alt: ""
            }
        }]
    },
    {
        image: {
            src: "https://m.media-amazon.com/images/I/518P8cxHRXL.jpg",
            alt: "Weyward - Book",
        },
        author: "Emilia Hart",
        title: "Weyward",
        genre: "Genre",
        publisher: "Some publisher",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam repellendus expedita, magnam nam odit et exercitationem. A possimus provident architecto necessitatibus non, reiciendis doloremque, sed nam quibusdam ratione molestias quo.",
        reviews: [{
            name: "John Doe",
            email: "jDoe@gmail.com",
            rating: 4,
            comment: "Very good Book",
            img: {
                src: "",
                alt: ""
            }
        }]
    },
    {
        image: {
            src: "https://m.media-amazon.com/images/I/61CCadswT4L.jpg",
            alt: "The Science of Intelligent Decision Making - Book",
        },
        author: "Peter Hollins",
        title: "The Science of Intelligent Decision Making",
        genre: "Genre",
        publisher: "Some publisher",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam repellendus expedita, magnam nam odit et exercitationem. A possimus provident architecto necessitatibus non, reiciendis doloremque, sed nam quibusdam ratione molestias quo.",
        reviews: [{
            name: "John Doe",
            email: "jDoe@gmail.com",
            rating: 4,
            comment: "Very good Book",
            img: {
                src: "",
                alt: ""
            }
        }]
    },
    {
        image: {
            src: "https://m.media-amazon.com/images/I/51D9E285XLL.jpg",
            alt: "The East Indian - Book",
        },
        author: "Brinda Charry ",
        title: "The East Indian",
        genre: "Genre",
        publisher: "Some publisher",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam repellendus expedita, magnam nam odit et exercitationem. A possimus provident architecto necessitatibus non, reiciendis doloremque, sed nam quibusdam ratione molestias quo.",
        reviews: [{
            name: "John Doe",
            email: "jDoe@gmail.com",
            rating: 4,
            comment: "Very good Book",
            img: {
                src: "",
                alt: ""
            }
        }]
    },
    {
        image: {
            src: "https://m.media-amazon.com/images/I/51GcCvYyKbL.jpg",
            alt: "Between Two Moons - Book",
        },
        author: "Aisha Abdel Gawad",
        title: "Between Two Moons",
        genre: "Genre",
        publisher: "Some publisher",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam repellendus expedita, magnam nam odit et exercitationem. A possimus provident architecto necessitatibus non, reiciendis doloremque, sed nam quibusdam ratione molestias quo.",
        reviews: [{
            name: "John Doe",
            email: "jDoe@gmail.com",
            rating: 4,
            comment: "Very good Book",
            img: {
                src: "",
                alt: ""
            }
        }]
    },
    {
        image: {
            src: "https://m.media-amazon.com/images/I/51q5irsID8L._SY346_.jpg",
            alt: "Loot - Book",
        },
        author: "Tania James",
        title: "Loot",
        genre: "Genre",
        publisher: "Some publisher",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam repellendus expedita, magnam nam odit et exercitationem. A possimus provident architecto necessitatibus non, reiciendis doloremque, sed nam quibusdam ratione molestias quo.",
        reviews: [{
            name: "John Doe",
            email: "jDoe@gmail.com",
            rating: 4,
            comment: "Very good Book",
            img: {
                src: "",
                alt: ""
            }
        }]
    },
];

export default books;