var languages = {
    vietnamese: {
        code: 'vi',
        name: 'Vietnamese'
    },
    english: {
        code: 'en',
        name: 'English'
    }
};

document.addEventListener("DOMContentLoaded", function () {
    var menu = document.querySelector('div.header__banner-wrapper');
    var trangthai = "duoi300";
    window.addEventListener("scroll", function () {
        var x = this.scrollY;
        if (x > 220) {
            if (trangthai == "duoi300") {
                trangthai = "tren300";
                menu.classList.add('header__banner--onscroll');
                this.document.querySelector('div.app_container').style.marginTop = '110px';
            }
        }
        else {
            if (trangthai == "tren300") {
                menu.classList.remove('header__banner--onscroll');
                trangthai = "duoi300";
                this.document.querySelector('div.app_container').style.marginTop = '32px';
            }
        }

    })
});

function changeLanguage(languageCode) {
    var languageDOM = document.querySelector('.header-info-right-language__choose');
    languageDOM.innerHTML = '';

    Object.values(languages).forEach(language => {
        if (language.code != languageCode) {
            languageDOM.innerHTML += `
            <li onclick="changeLanguage('${language.code}')" class="header-info-right-language-choose__item">
                <a>${language.name}</a>
            </li>
            `;
        }
        else {
            document.querySelector('.header-info-right-language__input p').innerHTML = language.name;
        }
    });
}