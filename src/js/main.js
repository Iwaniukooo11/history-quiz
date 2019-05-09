console.log('test1');


class Game {
    constructor() {
        this.answersUser = document.querySelectorAll('.exercises__answers__answer')
        this.rowButtonRow = document.querySelector('.section-about__btn__fas')
        this.checkButton = document.querySelector('.check-btn')
        this.answersTable = [
            "bbc",
            "bac",
            "bac",
            "acc",
            "bcb",
            "aba",
            "caa",
            "cac",
            "bca",
            "cab"
        ]
        this.resultBox = document.querySelector('.result')
        this.resultSpan = document.querySelector('.result__text__userScore')
        this.alertBox = document.querySelector('.alert')


        this.answersUser.forEach(e => {
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

            this.checkScore(this.answersTable)

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
    checkScore(good) {
        this.userAnswers = document.querySelectorAll('.exercises__answers__answer.onBrown')
        let found = false
        if (this.userAnswers.length != 6) //test!
        {
            document.querySelectorAll('.exercises__answers').forEach(e => {
                if (!found) {
                    this.checked = false
                    e.childNodes.forEach(el => {
                        if (el.tagName == 'LI')
                            if (el.classList.contains('onBrown'))
                                this.checked = true
                    })
                    if (!this.checked) {
                        this.showError($(e.parentElement).offset().top - 10)
                        this.showRightAnswers()
                        found = true
                    }
                }
            })
        } else {
            let j = 0;
            this.score = 0
            for (let i = 0; i < 2; i++) { //test!
                for (let k = 0; k < 3; k++) {
                    if (this.userAnswers[j].classList.contains(`answer-${good[i][k]}`)) {
                        this.score++
                        this.changeInline(this.userAnswers[j], 'color', 'green')
                    } else
                        this.changeInline(this.userAnswers[j], 'color', 'red')

                    j++
                }
            }

            this.showScore(this.score, this.resultSpan, this.resultBox)
        }
    }
    showScore(score, txt, box) {
        txt.textContent = score
        this.changeInline(box, 'display', 'block')


    }
    showError(distance) {
        $('body,html').animate({
            scrollTop: distance
        }, 500)
        this.changeInline(this.alertBox, 'display', 'block')
        this.changeInline(this.alertBox, 'animation', 'alert-anim 1s linear')
        setTimeout(() => {
            this.changeInline(this.alertBox, 'display', 'none')
            this.changeInline(this.alertBox, 'animation', 'none')
        }, 1000)
    }
    showRightAnswers() {
        // this.answersTable
        // for (let i = 0; i < 10; i++){
        //     for (let j = 0; i < 2; i++){

        //     }
        // }
    }

}
const g = new Game()