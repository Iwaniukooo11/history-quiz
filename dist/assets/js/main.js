console.log('test1');


class Game {
    constructor() {
        this.answers = document.querySelectorAll('.exercises__answers__answer')
        this.rowButton = document.querySelector('.section-about__btn')
        this.rowButtonRow = document.querySelector('.section-about__btn__fas')

        this.answers.forEach(e => {
            e.addEventListener('click', el => {
                if (!el.target.classList.contains('onBrown')) {
                    el.target.parentNode.childNodes.forEach(e => {
                        if (e.tagName == 'LI')
                            e.classList.remove('onBrown')
                    })
                }
                el.target.classList.toggle('onBrown')
            })
        })
        window.addEventListener('scroll', () => {
            this.changeInline(this.rowButtonRow, 'top', `${window.pageYOffset / 5 + 52}%`)

        })
    }
    changeInline(element, atribute, value) {
        element.style[atribute] = value
    }
}
const g = new Game()