// SQLD 퀴즈 문제 데이터
const questions = [
    {
        question: "데이터베이스의 특징이 아닌 것은?",
        options: [
            "실시간 접근성(Real-time Accessibility)",
            "계속적인 변화(Continuous Evolution)",
            "동시 공유(Concurrent Sharing)",
            "종속성(Dependency)"
        ],
        correctAnswer: 3,
        explanation: "데이터베이스의 특징은 실시간 접근성, 계속적인 변화, 동시 공유, 내용에 의한 참조(Content Reference)입니다. 종속성이 아닌 '독립성(Independence)'이 데이터베이스의 특징입니다."
    },
    {
        question: "관계형 데이터베이스에서 테이블의 행(Row)을 지칭하는 용어는?",
        options: [
            "속성(Attribute)",
            "튜플(Tuple)",
            "도메인(Domain)",
            "차수(Degree)"
        ],
        correctAnswer: 1,
        explanation: "관계형 데이터베이스에서 테이블의 행은 '튜플(Tuple)' 또는 '레코드(Record)'라고 합니다. 속성은 열(Column), 도메인은 속성이 가질 수 있는 값의 범위, 차수는 속성의 개수를 의미합니다."
    },
    {
        question: "SQL의 종류 중 데이터 조작어(DML)에 해당하는 것은?",
        options: [
            "CREATE",
            "ALTER",
            "SELECT",
            "GRANT"
        ],
        correctAnswer: 2,
        explanation: "SELECT는 데이터 조작어(DML)입니다. CREATE와 ALTER는 데이터 정의어(DDL), GRANT는 데이터 제어어(DCL)입니다. DML에는 SELECT, INSERT, UPDATE, DELETE가 있습니다."
    },
    {
        question: "다음 중 기본키(Primary Key)의 특징으로 올바르지 않은 것은?",
        options: [
            "NULL 값을 가질 수 없다",
            "중복된 값을 가질 수 없다",
            "테이블당 여러 개를 지정할 수 있다",
            "자동으로 인덱스가 생성된다"
        ],
        correctAnswer: 2,
        explanation: "기본키는 테이블당 하나만 지정할 수 있습니다. 기본키는 NULL 값과 중복 값을 가질 수 없으며, 자동으로 인덱스가 생성되어 검색 성능이 향상됩니다."
    },
    {
        question: "정규화(Normalization)의 목적이 아닌 것은?",
        options: [
            "데이터 중복 최소화",
            "데이터 무결성 유지",
            "데이터 조회 속도 향상",
            "이상 현상 방지"
        ],
        correctAnswer: 2,
        explanation: "정규화의 주요 목적은 데이터 중복 최소화, 데이터 무결성 유지, 이상 현상 방지입니다. 정규화는 오히려 조인이 많아져 조회 속도가 느려질 수 있으며, 성능 향상을 위해서는 반정규화(Denormalization)를 고려합니다."
    },
    {
        question: "트랜잭션의 특성(ACID) 중 '원자성(Atomicity)'의 의미는?",
        options: [
            "트랜잭션이 모두 실행되거나 전혀 실행되지 않아야 한다",
            "트랜잭션 실행 전후 데이터베이스의 일관성이 유지되어야 한다",
            "동시에 실행되는 트랜잭션들이 서로 영향을 주지 않아야 한다",
            "트랜잭션이 성공적으로 완료되면 영구적으로 반영되어야 한다"
        ],
        correctAnswer: 0,
        explanation: "원자성(Atomicity)은 트랜잭션의 연산들이 모두 성공하거나 모두 실패해야 함을 의미합니다. 일관성(Consistency)은 데이터베이스의 일관성 유지, 격리성(Isolation)은 트랜잭션 간 독립성, 지속성(Durability)은 영구적 반영을 의미합니다."
    },
    {
        question: "다음 SQL 문 중 올바른 것은?\n\nSELECT name, salary\nFROM employee\nWHERE salary > (SELECT AVG(salary) FROM employee);",
        options: [
            "서브쿼리에 GROUP BY가 필요하다",
            "WHERE 절에 서브쿼리를 사용할 수 없다",
            "문법적으로 올바른 SQL문이다",
            "서브쿼리 결과가 여러 행이므로 IN을 사용해야 한다"
        ],
        correctAnswer: 2,
        explanation: "이 SQL문은 평균 급여보다 많은 급여를 받는 직원을 조회하는 올바른 서브쿼리입니다. AVG 함수는 단일 값을 반환하므로 비교 연산자(>)와 함께 사용할 수 있습니다."
    },
    {
        question: "인덱스(Index)에 대한 설명으로 올바르지 않은 것은?",
        options: [
            "검색 속도를 향상시킨다",
            "INSERT, UPDATE, DELETE 성능을 향상시킨다",
            "추가적인 저장 공간이 필요하다",
            "B-Tree 구조를 주로 사용한다"
        ],
        correctAnswer: 1,
        explanation: "인덱스는 검색(SELECT) 성능을 향상시키지만, INSERT, UPDATE, DELETE 시에는 인덱스도 함께 수정해야 하므로 오히려 성능이 저하될 수 있습니다. 따라서 인덱스는 조회가 많고 수정이 적은 컬럼에 생성하는 것이 좋습니다."
    },
    {
        question: "다음 중 JOIN의 종류가 아닌 것은?",
        options: [
            "INNER JOIN",
            "OUTER JOIN",
            "CROSS JOIN",
            "MERGE JOIN"
        ],
        correctAnswer: 3,
        explanation: "MERGE JOIN은 조인 알고리즘의 한 종류입니다. JOIN의 종류로는 INNER JOIN, OUTER JOIN(LEFT, RIGHT, FULL), CROSS JOIN, SELF JOIN 등이 있습니다."
    },
    {
        question: "제1정규형(1NF)의 조건은?",
        options: [
            "부분 함수 종속을 제거한다",
            "이행 함수 종속을 제거한다",
            "모든 속성은 원자값을 가져야 한다",
            "다치 종속을 제거한다"
        ],
        correctAnswer: 2,
        explanation: "제1정규형(1NF)은 모든 속성이 원자값(Atomic Value)을 가져야 합니다. 제2정규형(2NF)은 부분 함수 종속 제거, 제3정규형(3NF)은 이행 함수 종속 제거, 제4정규형(4NF)은 다치 종속 제거를 의미합니다."
    },
    {
        question: "다음 중 GROUP BY 절과 함께 사용할 수 없는 것은?",
        options: [
            "HAVING",
            "ORDER BY",
            "WHERE",
            "모두 사용 가능하다"
        ],
        correctAnswer: 3,
        explanation: "GROUP BY 절은 HAVING, ORDER BY, WHERE 절과 모두 함께 사용할 수 있습니다. WHERE는 그룹화 전 조건, HAVING은 그룹화 후 조건, ORDER BY는 결과 정렬에 사용됩니다."
    },
    {
        question: "외래키(Foreign Key)에 대한 설명으로 올바른 것은?",
        options: [
            "NULL 값을 가질 수 없다",
            "중복된 값을 가질 수 없다",
            "참조하는 테이블의 기본키 또는 유니크키를 참조해야 한다",
            "테이블당 하나만 지정할 수 있다"
        ],
        correctAnswer: 2,
        explanation: "외래키는 다른 테이블의 기본키(Primary Key) 또는 유니크키(Unique Key)를 참조해야 합니다. 외래키는 NULL 값과 중복 값을 가질 수 있으며, 테이블당 여러 개를 지정할 수 있습니다."
    },
    {
        question: "다음 중 집계 함수(Aggregate Function)가 아닌 것은?",
        options: [
            "COUNT",
            "AVG",
            "SUBSTR",
            "MAX"
        ],
        correctAnswer: 2,
        explanation: "SUBSTR은 문자열 함수입니다. 집계 함수로는 COUNT, SUM, AVG, MAX, MIN, STDDEV, VARIANCE 등이 있습니다."
    },
    {
        question: "UNION과 UNION ALL의 차이점은?",
        options: [
            "UNION은 중복을 제거하고, UNION ALL은 중복을 포함한다",
            "UNION ALL은 중복을 제거하고, UNION은 중복을 포함한다",
            "둘 다 중복을 제거한다",
            "둘 다 중복을 포함한다"
        ],
        correctAnswer: 0,
        explanation: "UNION은 결과에서 중복된 행을 제거하고, UNION ALL은 중복을 포함한 모든 행을 반환합니다. UNION ALL이 정렬 작업이 없어 성능이 더 빠릅니다."
    },
    {
        question: "다음 중 DCL(Data Control Language)에 해당하는 것은?",
        options: [
            "COMMIT",
            "ROLLBACK",
            "GRANT",
            "INSERT"
        ],
        correctAnswer: 2,
        explanation: "GRANT와 REVOKE가 DCL(데이터 제어어)입니다. COMMIT과 ROLLBACK은 TCL(트랜잭션 제어어), INSERT는 DML(데이터 조작어)입니다."
    },
    {
        question: "카디널리티(Cardinality)가 높다는 것의 의미는?",
        options: [
            "중복도가 높다",
            "중복도가 낮다",
            "NULL 값이 많다",
            "테이블의 행이 많다"
        ],
        correctAnswer: 1,
        explanation: "카디널리티가 높다는 것은 중복도가 낮아 고유한 값이 많다는 의미입니다. 예를 들어 주민등록번호는 카디널리티가 높고, 성별은 카디널리티가 낮습니다. 인덱스는 카디널리티가 높은 컬럼에 생성하는 것이 효과적입니다."
    },
    {
        question: "다음 중 DDL(Data Definition Language)이 아닌 것은?",
        options: [
            "CREATE",
            "ALTER",
            "DROP",
            "UPDATE"
        ],
        correctAnswer: 3,
        explanation: "UPDATE는 DML(데이터 조작어)입니다. DDL(데이터 정의어)에는 CREATE, ALTER, DROP, TRUNCATE, RENAME 등이 있습니다."
    },
    {
        question: "VIEW에 대한 설명으로 올바르지 않은 것은?",
        options: [
            "가상 테이블이다",
            "보안성을 높일 수 있다",
            "항상 INSERT, UPDATE, DELETE가 가능하다",
            "복잡한 쿼리를 단순화할 수 있다"
        ],
        correctAnswer: 2,
        explanation: "VIEW는 특정 조건(집계 함수, DISTINCT, GROUP BY 등 사용 시)에서는 INSERT, UPDATE, DELETE가 불가능합니다. VIEW는 가상 테이블로 보안성을 높이고 복잡한 쿼리를 단순화하는 데 사용됩니다."
    },
    {
        question: "다음 중 NULL에 대한 설명으로 올바른 것은?",
        options: [
            "NULL은 0과 같다",
            "NULL은 공백('')과 같다",
            "NULL은 알 수 없는 값을 의미한다",
            "NULL끼리 비교하면 TRUE를 반환한다"
        ],
        correctAnswer: 2,
        explanation: "NULL은 알 수 없는 값(Unknown)을 의미하며, 0이나 공백과는 다릅니다. NULL과의 모든 비교 연산은 UNKNOWN을 반환하며, NULL 값을 확인하려면 IS NULL 또는 IS NOT NULL을 사용해야 합니다."
    },
    {
        question: "서브쿼리의 종류 중 '스칼라 서브쿼리(Scalar Subquery)'의 특징은?",
        options: [
            "여러 행을 반환한다",
            "여러 컬럼을 반환한다",
            "단일 행, 단일 컬럼을 반환한다",
            "FROM 절에서만 사용 가능하다"
        ],
        correctAnswer: 2,
        explanation: "스칼라 서브쿼리는 정확히 하나의 행과 하나의 컬럼만을 반환하는 서브쿼리입니다. SELECT 절, WHERE 절 등 다양한 곳에서 사용할 수 있습니다."
    }
];
