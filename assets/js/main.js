//Services section
//Card
let menu = [
    {
        image: "assets/images/1.jpg",
        title: "House Cleaning",
        text: "Forget cleaning, enjoy the benefits of a full-time housekeeper without the cost, this is the most commonly requested service for families, busy professionals & those who value their time, we’ll keep your house clean & fresh.",
        link: "",
    },
    {
        image: "./assets/images/cardimage1.jpg",
        title: "Move Out/In Cleaning",
        text: "This service is extremely thorough top to bottom, designed to prepare a home for a new tenant. This service includes cleaning Inside Kitchen Cabinets, Inside Oven & Fridge, Interior Windows & Sills, Detail Blinds & Detail Baseboards.",
        link: "",
    },
    {
        image: "./assets/images/cardimage2.jpg",
        title: "Deep Cleaning",
        text: "Ideal for homes that have gone months without being cleaned or have NOT been professionally cleaned in a while. This service includes cleaning window sills, hand detail blinds & hand detail baseboards.",
        link: "",
    }
];

const cardSection = document.getElementById("cards");

window.addEventListener("DOMContentLoaded", function(){
    let displayCard = menu.map(function(item){
        //console.log(item);

        return `
        <div class="col">
            <div class="card" style="width: 21rem;">
              <img src=${item.image} class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.text}</p>
                <a href="#" class="btn btn-card"><i class="bi bi-plus-circle"></i>More</a>
              </div>
            </div>
          </div>`;
    });
    displayCard = displayCard.join("")
    cardSection.innerHTML = displayCard
    console.log(displayCard);
});


