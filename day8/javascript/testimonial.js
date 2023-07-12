

// class testimonials {

//     user = "";
//     comment = "";
//     img = "";
//     rating = "";

//     constructor(user, comment, img){
//         this.user = user;
//         this.comment = comment;
//         this.img = img;
//         this.rating = this.rating;
//     }

//     ngePrint(){
//         return `hai saya ${this.user} dan ${this.comment}, ${this.img}`
//     }
// }

// const yahoo = new testimonials(
//     "reinzu",
//     '"the best lah pokoknya"',
//     "https://i0.wp.com/markmeets.com/wp-content/uploads/2022/06/Best-Waifus-2022-Feature.jpg",
//     1);
// const yahoo2 = new testimonials(
//     "brainzu",
//     '"bisa diandalkan dalam segala keadaan"',
//     "https://www.entoin.com/images/waifu33.jpg",
//     5);
// const yahoo3 = new testimonials(
//     "amezuki",
//     '"agak sedikit mengecewakan tapi overall good"',
//     "https://cdn.gaminggorilla.com/wp-content/uploads/2023/02/Best-Anime-Waifus-Emilia.jpg",
//     3);

// const dataTestimonial = [yahoo, yahoo2, yahoo3,yahoo4,yahoo5];

//=========================================//
const dataTestimonial = [
    {
        user: "Brainzu",
        comment: "ingin balik lagi lah",
        img: "https://www.entoin.com/images/waifu33.jpg",
        rating: 5
    },
    {
        user: "Amezuki",
        comment: "Mantap",
        img: "https://cdn.gaminggorilla.com/wp-content/uploads/2023/02/Best-Anime-Waifus-Emilia.jpg",
        rating: 4
    },
    {
        user: "Reinzu",
        comment: "Keren sekali",
        img: "https://i0.wp.com/markmeets.com/wp-content/uploads/2022/06/Best-Waifus-2022-Feature.jpg",
        rating: 4
    },
    
]



const ul = document.querySelector(".testimonial");

allData();
// menngunakan cara tradisional !!!
// for (let index = 0; index < dataTestimonial.length; index++) {
//     ul.innerHTML += `<li class="testimonial-item">
//     <div class="wrapper-testimonial-item">
//         <img src="${dataTestimonial[index].img}" alt="gambar">
//         <p>${dataTestimonial[index].comment}</p>
//         <span><i>${dataTestimonial[index].user}</i></span>
        
//     </div>
// </li>`
   
// }

// menggunakan Foreach
function allData() {
    ul.innerHTML = "";
    dataTestimonial.forEach((item) => {
        ul.innerHTML += `<li class="testimonial-item">
            <div class="wrapper-testimonial-item">
                <img src="${item.img}" alt="gambar">
                <p>${item.comment}</p>
                <span><i>${item.user}</i></span>
                
            </div>
        </li>`
    })
    
}


//Memfilter dengan Array filter

function dataFilter(rating) {
    
    const tempData = dataTestimonial.filter((item) => item.rating === rating );

    ul.innerHTML = "";
    tempData.forEach((item) => {
        ul.innerHTML += `<li class="testimonial-item">
            <div class="wrapper-testimonial-item">
                <img src="${item.img}" alt="gambar">
                <p>${item.comment}</p>
                <span><i>${item.user}</i></span>
                
            </div>
        </li>`
    })

    console.log(tempData);
}
