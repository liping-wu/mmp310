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
        caption: "Mexico. Because people in there don't celebrate Thanksgiving."
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

    var i = 0;

    var slideElem = document.createElement("div");
    var img = new Image();
    var cap = document.createElement("p");
    var previous= document.getElementById("previous");
    var next =document.getElementById("next");

    img.src = slides[i].image;
    cap.textContent = slides[i].caption;
    
    slideElem.appendChild(img);
    slideElem.appendChild(cap);
    document.body.appendChild(slideElem);
    
    function nextSlide(){

        if(i < slides.length-1){
            i++;
            img.src = slides[i].image;
            cap.textContent = slides[i].caption;
        }
            
    }

    function prevSlide(){

        if(i > 0){
            i--;
            img.src = slides[i].image;
            cap.textContent = slides[i].caption; 
        }

    }

next.onclick = nextSlide;
previous.onclick = prevSlide; 

