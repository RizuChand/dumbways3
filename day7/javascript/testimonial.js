

class testimonials {

    user = "";
    comment = "";
    img = "";

    constructor(user, comment, img){
        this.user = user;
        this.comment = comment;
        this.img = img;
    }

    ngePrint(){
        return `hai saya ${this.user} dan ${this.comment}, ${this.img}`
    }
}

const yahoo = new testimonials(
    "reinzu",
    '"the best lah pokoknya"',
    "https://i0.wp.com/markmeets.com/wp-content/uploads/2022/06/Best-Waifus-2022-Feature.jpg");
const yahoo2 = new testimonials(
    "brainzu",
    '"bisa diandalkan dalam segala keadaan"',
    "https://www.entoin.com/images/waifu33.jpg");
const yahoo3 = new testimonials(
    "amezuki",
    '"agak sedikit mengecewakan tapi overall good"',
    "https://cdn.gaminggorilla.com/wp-content/uploads/2023/02/Best-Anime-Waifus-Emilia.jpg");

const dataTestimonial = [yahoo, yahoo2, yahoo3];
console.log(dataTestimonial);

const ul = document.querySelector(".testimonial");

for (let index = 0; index < dataTestimonial.length; index++) {
    ul.innerHTML += `<li class="testimonial-item">
    <div class="wrapper-testimonial-item">
        <img src="${dataTestimonial[index].img}" alt="gambar">
        <p>${dataTestimonial[index].comment}</p>
        <span><i>${dataTestimonial[index].user}</i></span>
        
    </div>
</li>`

    
}



