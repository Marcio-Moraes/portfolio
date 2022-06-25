const c = (item) => document.querySelector(item);
const cs = (item) => document.querySelectorAll(item);

/*botões*/
const btReact = c('.bt_react');
const btHtml = c('.bt_html');
const btWordPress = c('.bt_wordpress');
const bttodos = c('.bt_todos');

/*itens projetos*/
const itemHtml = cs('.html');
const itemReact = cs('.reactjs');
const itemWordPress = cs('.wordpress');


const displayNone = () => {
    itemHtml.forEach((item) => {
        item.classList.add("removeitem");
    });
    itemReact.forEach((item) => {
        item.classList.add("removeitem");
    });
    itemWordPress.forEach((item) => {
        item.classList.add("removeitem");
    });
}
const displayBlock = () => {
    itemHtml.forEach((item) => {
        item.classList.remove("removeitem");
    });
    itemReact.forEach((item) => {
        item.classList.remove("removeitem");
    });
    itemWordPress.forEach((item) => {
        item.classList.remove("removeitem");
    });
}

const exibeHTML = () => {
    displayNone();
    itemHtml.forEach((item) => {
        item.classList.remove("removeitem");
    });
};

const exibeReact = () => {
    displayNone();
    itemReact.forEach((item) => {
        item.classList.remove("removeitem");
    });
};

const exibeWordPress = () => {
    displayNone();
    itemWordPress.forEach((item) => {
        item.classList.remove("removeitem");
    });
};

btHtml.addEventListener('click', exibeHTML);
btReact.addEventListener('click', exibeReact);
btWordPress.addEventListener('click', exibeWordPress);
bttodos.addEventListener('click', displayBlock);

window.addEventListener('scroll', function () {
    if (window.scrollY > 400) {
        window.document.querySelector('.scrollbutton').style.display = 'block';
    } else {
        window.document.querySelector('.scrollbutton').style.display = 'none';
    }
});
function subirTela() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

const menuItens = document.querySelectorAll('.menu a[href^="#"]');

menuItens.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

function getScrollTopByHref(elementoClicado) {
    const id = elementoClicado.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.target);
    scrollToPosition(to);
}

function scrollToPosition(to) {
    // window.scroll({
    //     top: to,
    //     behavior: 'smooth'
    // });

    smoothScrollTo(0, to, 900);
}


// Caso deseje suporte a browsers antigos / que não suportam scroll smooth nativo
/**
//   Smooth scroll animation
//   @param {int} endX: destination x coordinate
//   @param {int) endY: destination y coordinate
//   @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    duration = typeof duration !== 'undefined' ? duration : 400;

    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
        if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
        return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
        const time = new Date().getTime() - startTime;
        const newX = easeInOutQuart(time, startX, distanceX, duration);
        const newY = easeInOutQuart(time, startY, distanceY, duration);
        if (time >= duration) {
            clearInterval(timer);
        }
        window.scroll(newX, newY);
    }, 1000 / 60); /* 60 fps*/
};




