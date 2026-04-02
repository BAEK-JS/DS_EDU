// 퀴즈 관리 클래스
class QuizManager {
    constructor() {
        this.currentQuestionIndex = 0;
        this.correctCount = 0;
        this.wrongCount = 0;
        this.selectedAnswer = null;
        this.answered = false;
        this.init();
    }

    init() {
        this.loadQuestion();
        this.attachEventListeners();
    }

    attachEventListeners() {
        document.getElementById('submit-btn').addEventListener('click', () => this.checkAnswer());
        document.getElementById('next-btn').addEventListener('click', () => this.nextQuestion());
        document.getElementById('restart-btn').addEventListener('click', () => this.restart());
    }

    loadQuestion() {
        const question = questions[this.currentQuestionIndex];
        this.answered = false;
        this.selectedAnswer = null;

        // 문제 번호 업데이트
        document.getElementById('question-number').textContent = this.currentQuestionIndex + 1;
        
        // 문제 텍스트 업데이트
        document.getElementById('question-text').textContent = question.question;

        // 진행률 업데이트
        document.getElementById('progress').textContent = 
            `${this.currentQuestionIndex + 1}/${questions.length}`;

        // 선택지 생성
        this.createOptions(question.options);

        // 결과 박스 숨기기
        document.getElementById('result-box').style.display = 'none';
        
        // 버튼 상태 초기화
        document.getElementById('submit-btn').style.display = 'inline-block';
        document.getElementById('submit-btn').disabled = true;
        document.getElementById('next-btn').style.display = 'none';
        document.getElementById('restart-btn').style.display = 'none';
    }

    createOptions(options) {
        const container = document.getElementById('options-container');
        container.innerHTML = '';

        options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.dataset.index = index;
            
            const label = document.createElement('span');
            label.className = 'option-label';
            label.textContent = `${index + 1}.`;
            
            const text = document.createElement('span');
            text.textContent = option;
            
            optionDiv.appendChild(label);
            optionDiv.appendChild(text);
            
            optionDiv.addEventListener('click', () => this.selectOption(index));
            
            container.appendChild(optionDiv);
        });
    }

    selectOption(index) {
        if (this.answered) return;

        // 이전 선택 제거
        document.querySelectorAll('.option').forEach(opt => {
            opt.classList.remove('selected');
        });

        // 새로운 선택 적용
        const selectedOption = document.querySelector(`.option[data-index="${index}"]`);
        selectedOption.classList.add('selected');
        
        this.selectedAnswer = index;
        document.getElementById('submit-btn').disabled = false;
    }

    checkAnswer() {
        if (this.selectedAnswer === null || this.answered) return;

        this.answered = true;
        const question = questions[this.currentQuestionIndex];
        const correctAnswer = question.correctAnswer;
        const isCorrect = this.selectedAnswer === correctAnswer;

        // 정답/오답 개수 업데이트
        if (isCorrect) {
            this.correctCount++;
        } else {
            this.wrongCount++;
        }

        // 점수 업데이트
        document.getElementById('correct-count').textContent = this.correctCount;
        document.getElementById('wrong-count').textContent = this.wrongCount;

        // 선택지에 색상 표시
        const options = document.querySelectorAll('.option');
        options.forEach((opt, index) => {
            opt.classList.add('disabled');
            if (index === correctAnswer) {
                opt.classList.add('correct');
            } else if (index === this.selectedAnswer && !isCorrect) {
                opt.classList.add('wrong');
            }
        });

        // 결과 표시
        this.showResult(isCorrect, question);

        // 버튼 상태 변경
        document.getElementById('submit-btn').style.display = 'none';
        
        if (this.currentQuestionIndex < questions.length - 1) {
            document.getElementById('next-btn').style.display = 'inline-block';
        } else {
            document.getElementById('restart-btn').style.display = 'inline-block';
        }
    }

    showResult(isCorrect, question) {
        const resultBox = document.getElementById('result-box');
        const resultMessage = document.getElementById('result-message');
        const correctAnswerDiv = document.getElementById('correct-answer');
        const explanationDiv = document.getElementById('explanation');

        resultBox.style.display = 'block';

        if (isCorrect) {
            resultMessage.textContent = '✅ 정답입니다!';
            resultMessage.className = 'result-message correct-msg';
            correctAnswerDiv.textContent = '';
        } else {
            resultMessage.textContent = '❌ 오답입니다!';
            resultMessage.className = 'result-message wrong-msg';
            correctAnswerDiv.textContent = 
                `정답: ${question.correctAnswer + 1}번 - ${question.options[question.correctAnswer]}`;
        }

        explanationDiv.textContent = `💡 ${question.explanation}`;
    }

    nextQuestion() {
        this.currentQuestionIndex++;
        if (this.currentQuestionIndex < questions.length) {
            this.loadQuestion();
        }
    }

    restart() {
        this.currentQuestionIndex = 0;
        this.correctCount = 0;
        this.wrongCount = 0;
        this.selectedAnswer = null;
        this.answered = false;

        document.getElementById('correct-count').textContent = '0';
        document.getElementById('wrong-count').textContent = '0';

        this.loadQuestion();
    }
}

// 페이지 로드 시 퀴즈 시작
document.addEventListener('DOMContentLoaded', () => {
    new QuizManager();
});
