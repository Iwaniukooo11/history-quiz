console.log('test1');


class Game {
    constructor() {
        this.allAnswers = document.querySelectorAll('.exercises__answers__answer')

        this.rowButtonRow = document.querySelector('.section-about__btn__fas')
        this.checkButton = document.querySelector('.check-btn')
        this.answersTable = [
            "bbc",
            "bac",
            // "bac",
            // "acc",
            // "bcb",
            // "aba",
            // "caa",
            // "cac",
            // "bca",
            // "cab"
        ]
        console.log(this.answersTable);
        this.answersString = this.answersTable.toString()
        this.answersString = this.answersString.replace(',', "")
        console.log(this.answersString);
        this.resultBox = document.querySelector('.result')
        this.resultSpan = document.querySelector('.result__text__userScore')
        this.alertBox = document.querySelector('.alert')
        this.blockGameElement = document.querySelector('.exercises-after')
        this.exercisesUL = document.querySelector('.exercises')
        this.playAgain = document.querySelector('.result__text__play-again')

        //--Wszystkie li w oosbnych tabliach
        this.exercisesLists = document.querySelectorAll('.exercises__answers')
        this.table = []

        for (let i = 0; i < this.exercisesLists.length; i++) {
            this.table.push([])
            this.exercisesLists[i].childNodes.forEach(e => {
                if (e.tagName == 'LI')
                    this.table[i].push(e)
            })
        }
        console.log(this.table);
        //


        this.allAnswers.forEach(e => {
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
        this.playAgain.addEventListener('click', () => {
            this.restartGame()
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
                        setTimeout(() => {
                            this.showError()
                            this.animateToSection($(e.parentElement).offset().top - 10)
                        }, 50)
                        found = true
                    }
                }
            })
        } else {
            this.score = 0
            document.querySelectorAll('.onBrown').forEach((e, index) => {
                if (e.classList.contains(`answer-${this.answersString[index]}`)) {
                    e.classList.add('onGreen')
                    e.classList.remove('onBrown')
                    this.score++
                } else {
                    e.classList.add('onRed')
                    e.classList.remove('onBrown')
                }
            })
            let j = 0;
            this.table.forEach(parent => {
                parent.forEach(child => {
                    if (child.classList.contains(`answer-${this.answersString[j]}`) && !child.classList.contains(`onGreen`) &&
                        !child.classList.contains(`onRed`)) {
                        child.classList.add('onHalf-green')
                    }
                })
                j++
            })
            setTimeout(() => {
                this.showScore(this.score, this.resultSpan, this.resultBox)
                this.animateToSection($(this.resultBox).offset().top - 50)
            }, 100)

        }
    }
    showScore(score, txt, box) {
        txt.textContent = score
        this.changeInline(box, 'display', 'block')
        this.changeInline(this.blockGameElement, 'height', `${this.exercisesUL.clientHeight}`)
        this.changeInline(this.blockGameElement, 'display', 'block')

    }
    showError() {
        this.changeInline(this.alertBox, 'display', 'block')
        this.changeInline(this.alertBox, 'animation', 'alert-anim 1s linear')
        setTimeout(() => {
            this.changeInline(this.alertBox, 'display', 'none')
            this.changeInline(this.alertBox, 'animation', 'none')
        }, 1000)
    }
    animateToSection(distance) {
        $('body,html').animate({
            scrollTop: distance
        }, 500)
    }
    returnNum(x) {
        switch (x) {
            case 'a': {
                return 0;
            }
            case 'b': {
                return 1;
            }
            case 'c': {
                return 2;
            }
        }
    }
    restartGame() {
        this.changeInline(this.resultBox, 'display', 'none')
        this.allAnswers.forEach(e => {
            e.classList.remove('onBrown')
            e.classList.remove('onGreen')
            e.classList.remove('onRed')
        })
        this.changeInline(this.alertBox.blockGameElement, 'display', 'none')
    }
}
const g = new Game()