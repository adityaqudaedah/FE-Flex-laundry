
//routing ke halaman login.html
const clickHandler = () => {
  window.location.href = "../../login.html";
};

/* kode dibawah untuk looping card */
const cardContainer = document.getElementById('card-container')

let cardContent = ''

for (let i = 0; i < 3; ++i){
  cardContent += `<div class="card ml-2 mr-2 mb-3" style="width: 19rem" id='card-produk'>
  <img
    class="card-img-top"
    src="./assets/img/paket1.jpg"
    alt="Card image cap"
  />
  <div class="card-body">
    <h5 class="card-title font-weight-bold text-center">Nama Paket</h5>
    <p class="card-text">
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
}

//render card kedalam container
cardContainer.innerHTML = cardContent