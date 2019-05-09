console.log('test1');


class Game {
    constructor() {
        this.answers = document.querySelectorAll('.exercises__answers__answer')
        this.rowButtonRow = document.querySelector('.section-about__btn__fas')
        this.checkButton = document.querySelector('.check-btn')
        // this.answers = [
        //     "abc",
        //     "bac",
        //     "bac",
        //     "acc",
        //     "bcb",
        //     "aba",
        //     "caa",
        //     "cac",
        //     "bca",
        //     "cab"
        // ]

        this.answers.forEach(e => {
            e.addEventListener('click', el => {
                this.clickAnswer(el)
            })
        })

        window.addEventListener('scroll', () => {
            this.changeInline(this.rowButtonRow, 'top', `${window.pageYOffset / 5 + 52}%`)
        })

        this.checkButton.addEventListener('click', e => {
            this.changeInline(e.target, 'animation', 'check-btn-anim .3s linear')
            setTimeout(() => {
                this.changeInline(e.target, 'animation', 'none')
            }, 300)
            // this.score = checkScore()
        })
    }
    clickAnswer(el) {
        if (!el.target.classList.contains('onBrown')) {
            el.target.parentNode.childNodes.forEach(e => {
                if (e.tagName == 'LI')
                    e.classList.remove('onBrown')
            })
        }
        el.target.classList.toggle('onBrown')
    }

    changeInline(element, atribute, value) {
        element.style[atribute] = value
    }



}
const g = new Game()