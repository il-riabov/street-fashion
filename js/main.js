$('.menu-open').click(function() {
    $('.menu-open').css('display','none')
    $('.menu-close').css('display','block')
    $('.head-block-1235').css('display','block')
})

$('.menu-close').click(function() {
    $('.menu-open').css('display','block')
    $('.menu-close').css('display','none')
    $('.head-block-1235').css('display','none')
});

const all_tovars = document.querySelector('.catalog-wrapper')
const setting = ["img", "name", "price"]

for (key in catalog) {
    //каталог товара
    let tovar = document.createElement('div')
    tovar.setAttribute('data-key', key)
    all_tovars.append(tovar)
    tovar.innerHTML = `
        <div class="card">
            <img src="img/${catalog[key]["img"]}.png" class="img-card" alt="">
            <div class="info-card" value="${catalog[key]["name"]}">
                <div class="name-card">${catalog[key]["name"]}</div>
                <div class="ttc-card"></div>
                <div class="price-card" value>${catalog[key]["price"]} byn</div>
            </div>
        </div>
    `
}

var card = document.getElementsByClassName("card");
for (i=0; i<card.length; i++) {
    card[i].addEventListener("click", function() {
        titles = this.children;
        for (let title of titles) {

            txt_title = title.getAttribute('value');

            title_form = document.querySelector('.title_form')
            title_form.textContent = txt_title;
            $('body').css('overflow', 'hidden');
            $('.background_form').css('display', 'block');
            $('.forms-blocks').css('display', 'flex');
            $('.block_form').css('display', 'block');
        }

    })
}

$(".btn-close").click(function() {
    $('body').css('overflow', 'visible');
    $('.background_form').css('display', 'none');
    $('.forms-blocks').css('display', 'none');
    $('.block_form').css('display', 'none');

    title_form.textContent = "";  
})

const TOKEN = "6840744298:AAESWkFH9DN0b2_WjV04X_gmEUkRyfZTj8w";
const CHAT_ID = "-1002070880935";
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;


document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();          
    message = `Заявка с сайта\n\n`;
    message += `Товаро: ${txt_title}\n`;
    message += `Товаро: ${catalog[key]["price"]}\n`;
    message += `Клиент:  ${ this.name.value }\n`;
    message += `Email:  ${ this.email.value }\n`;
    message += `Телефон:  ${ this.telephone.value }\n`;
    message += `Сообщение:  ${ this.question.value }\n`;
    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mod: 'html',
        text: message
    })
    .then((res) => {
        this.name.value = "";
        this.email.value = "";
        this.telephone.value = "";
        this.question.value = "";
        $('.block_form').css('display', 'none')
        $('.block_submitted-form').css('display', 'block')
    })
    .catch((err) => {
        console.warn(err);
    })
    .finally(() =>{
        console.log('Конец')
    })
  })
  
  $('.btn_form_ok').click(function() { 
      $('.background_form').css('display', 'none');
      $('.forms-blocks').css('display', 'none');
      $('.block_submitted-form').css('display', 'none');
      $('body').css('overflow', 'visible');
  })