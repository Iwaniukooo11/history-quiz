console.log('test1');


class Game {
    constructor() {
        this.answersUser = document.querySelectorAll('.exercises__answers__answer')
        this.rowButtonRow = document.querySelector('.section-about__btn__fas')
        this.checkButton = document.querySelector('.check-btn')
        this.answersTable = [
            "abc",
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



            // if (this.score == 'error')
            //     this.showError()
            // else
            //     this.showScore(this.score, this.resultSpan, this.resultBox)

            // this.score == 'error' ? this.showError() : this.showScore(this.score, this.resultSpan, this.resultBox)

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
        const userAnswers = document.querySelectorAll('.exercises__answers__answer.onBrown')
        if (userAnswers.length != 30) //test!
            this.showError()

        else {
            let j = 0;
            this.score = 0
            for (let i = 0; i < 10; i++) { //test!
                for (let k = 0; k < 3; k++) {
                    if (userAnswers[j].classList.contains(`answer-${good[i][k]}`))
                        this.score++

                    j++
                    console.log('score: ' + this.score);
                }
            }
            this.showScore(this.score, this.resultSpan, this.resultBox)
        }
    }
    showScore(score, txt, box) {
        txt.textContent = score
        this.changeInline(box, 'display', 'block')
    }
    showError() {
        alert('Zaznacz wszystko!')
    }
    // returnABC(num) {
    //     switch (num) {
    //         case 0:return 'a'
    //         case 1:return 'b'
    //         case 0:return 'a'
    //     }
    // }


}
const g = new Game()