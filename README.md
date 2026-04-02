# SQLD 퀴즈 프로그램

SQLD(SQL Developer) 자격증 대비 인터랙티브 퀴즈 프로그램입니다.

## 기능

- ✅ 객관식 문제 출제 (20문제)
- ✅ 답안 선택 및 정답 확인
- ✅ 정답/오답 개수 실시간 표시
- ✅ 문제별 상세 해설 제공
- ✅ 진행률 표시
- ✅ 반응형 디자인 (모바일/태블릿/PC 지원)
- ✅ 현대적이고 직관적인 UI

## 사용 방법

1. `index.html` 파일을 웹 브라우저로 엽니다.
2. 문제를 읽고 원하는 답을 선택합니다.
3. "정답 확인" 버튼을 클릭합니다.
4. 정답 여부와 해설을 확인합니다.
5. "다음 문제" 버튼으로 다음 문제로 이동합니다.
6. 모든 문제를 풀고나면 "다시 시작" 버튼으로 처음부터 다시 시작할 수 있습니다.

## 파일 구조

```
Project_SQLD/
├── index.html          # 메인 HTML 파일
├── styles.css          # 스타일시트
├── script.js           # 퀴즈 로직 (JavaScript)
├── questions.js        # 문제 데이터
└── README.md          # 설명 문서
```

## 문제 추가/수정 방법

`questions.js` 파일에서 문제를 추가하거나 수정할 수 있습니다.

```javascript
{
    question: "문제 내용",
    options: [
        "선택지 1",
        "선택지 2",
        "선택지 3",
        "선택지 4"
    ],
    correctAnswer: 0,  // 정답 인덱스 (0부터 시작)
    explanation: "해설 내용"
}
```

## 기술 스택

- HTML5
- CSS3 (Flexbox, Gradient)
- Vanilla JavaScript (ES6+)

## 특징

- 프레임워크 없이 순수 JavaScript로 구현
- 외부 라이브러리 의존성 없음
- 오프라인에서도 작동
- 모던 브라우저 호환
