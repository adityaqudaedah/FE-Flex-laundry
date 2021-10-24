
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
    <h5 class="card-title font-weight-bold text-center" id='paket-${i + 1}'>Paket A</h5>
    <p class="card-text" > Harga Paket: </p>
    <p class="card-text" id ='harga-${i+1}'>
      15000
    </p>
    <a onClick = 'clickHandler${i+1}(event)' href="#" class="btn btn-primary" id='btn-${i+1}'>Pilih</a>
  </div>
</div>`
}

//render card kedalam container
cardContainer.innerHTML = cardContent

/* selector  harga dan paket pada summary*/
const summaryHarga = document.getElementById('harga-paket')
const summaryPaket = document.getElementById('nama-paket')

/* Paket 1*/
const selectedPaket1 = document.getElementById('paket-1')
const selectedHarga1 = document.getElementById('harga-1')

selectedHarga1.innerHTML = 10000

const clickHandler1 = (event) => {
  event.preventDefault()
  summaryPaket.innerHTML = selectedPaket1.innerHTML
  summaryHarga.innerHTML = selectedHarga1.innerHTML
} 

/* Paket 2*/
const selectedPaket2 = document.getElementById('paket-2')
const selectedHarga2 = document.getElementById('harga-2')
//ubah nama paket
selectedPaket2.innerHTML = 'paket B'
selectedHarga2.innerHTML = 20000


const clickHandler2 = (event) => {
  event.preventDefault()
  summaryPaket.innerHTML = selectedPaket2.innerHTML
  summaryHarga.innerHTML = selectedHarga2.innerHTML
}


/* Paket 3*/
const selectedPaket3 = document.getElementById('paket-3')
const selectedHarga3 = document.getElementById('harga-3')
//ubah nama paket
selectedPaket3.innerHTML = 'paket C'
selectedHarga3.innerHTML = 30000

const clickHandler3 = (event) => {
  event.preventDefault()
  summaryPaket.innerHTML = selectedPaket3.innerHTML
  summaryHarga.innerHTML = selectedHarga3.innerHTML
} 