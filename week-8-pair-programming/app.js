var slides = [
    {
        image: "img1.jpg",
        caption: "The next month is ......" 
    },
    {
        image: "img2.png",
        caption: "OMG! November is coming. We need to run."
    },
    {
        image: "img6.jpg",
        caption: "Dad. Why are so surprised?"
    },
    {
        image: "img7.png",
        caption: "Because they all celebrate Thanksgiving with Turkey."
    },
    {
        image: "img12.png",
        caption: "We will turn like this."
    },
    {
        image: "img6.jpg",
        caption: "Where should we go?"
    },
    {
        image: "img3.png",
        caption: "Mexico. Because people in there don't celebrate it."
    },
    {
        image: "img11.gif",
        caption: "Let's Run!"
    },
    {
        image: "img10.png",
        caption: "Happy Thanksgiving!"
    }
];

//for (var i = 0; i < slides.length; i++){
    var i = 0;
//    var s = slides[i];
    var slideElem = document.createElement("div");
    var img = new Image();
    var cap = document.createElement("p");

    img.src = slides[i].image;
    cap.textContent = slides[i].caption;
    slideElem.appendChild(img);
    slideElem.appendChild(cap);
    document.body.appendChild(slideElem);

    $('#next-btn').click(function() {
        if(i < (slides.length - 1)){
            i++;
            img.src = slides[i].image;
            cap.textContent = slides[i].caption;
        }
    });

    $('#prev-btn').click(function() {
        if(i > 0){
            i--;
            img.src = slides[i].image;
            cap.textContent = slides[i].caption;
        }
    });

//}