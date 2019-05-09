console.log('test1');


class Game {
    constructor() {
        this.answers = document.querySelectorAll('.exercises__answers__answer')

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
    }
    changeInline(element, atribute, value) {
        element.style[atribute] = value
    }
}
const g = new Game()