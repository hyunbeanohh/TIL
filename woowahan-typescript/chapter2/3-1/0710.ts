/**
 * 옵셔널
 * 특정 속성 또는 매개변수가 값이 있을 수도 있고 없을 수도 있는것을 의미한다.
 * 선택적 매개변수 또는 선택적 송성은 필수적으로 존재하지 않아도 되며 선택적으로 사용될 수 있음을 나타낸다.
 * 타입스크립트에서 좀 더 유연한 데이터 모델링과 사용자 정의 타입을 지원하기 위한 개념이다.
 */

const optionalTuple1:[number, number, number?] = [1, 2];
const optionalTuple2:[number, number, number?] = [1, 2, 3];
// 3번째 인덱스에 해당하는 숫자형 원소는 있어도 되고 없어도 됨을 의미한다.


/**
 * enum 타입
 * enum 타입은 열거형이라고도 부르는데  타입스크립트에서 지원하는 특수한 타입이다.
 * enum이라는 키워드는 다른 언어에서도 사용하는 개념이다. enum은 일종의 구조체를 만드는 타입 시스템이다.
 * enum을 사용해서 열거형을 정의할 수 있는데 열거형은 각각의 멤버를 가지고 있다.
 * 타입스크립트에서는 명명한 각 멤버의 값을 스스로 추론한다.
 * 기본적인 추론 방식은 숫자 0부터 1씩 늘려가며 값을 할당하는 것이다.
 */

enum ProgrammingLanguage {
    JavaScript, // 0
    TypeScript, // 1
    Python, // 2
    Java, // 3
    C, // 4
    Cpp // 5
}

//각 멤버에게 접근하는 방식은 자바스크립트에서 객체의 속성에 접근하는 방식과 동일하다.
console.log(ProgrammingLanguage.JavaScript); // 0
console.log(ProgrammingLanguage.TypeScript); // 1
console.log(ProgrammingLanguage["Cpp"]); // 5
// 또한 역방향으로도 접근이 가능하다.
console.log(ProgrammingLanguage[0]); // JavaScript

/**
 * 각 멤버에 명시적으로 값을 할당할 수 있다. 모든 멤버에 일일이 값을 할당할 수도 있지만 일부 멤버에 값을 직접 할당하지 않아도 타입스크립트는
 * 누락된 멤버를 아래와 같은 방식으로 이전 멤버 값의 숫자를 기준으로 1씩 늘려가며 자동으로 할당한다.
 */

enum ProgrammingLanguage2 {
    JavaScript = "TypeScript",
    TypeScript = "JavaScript",
    Python = 3,
    Java = 4,
    C, // 5
    Cpp // 6
}

/**
 * enum 타입은 주로 문자열 상수를 생성하는데 사용된다. 
 * 이를 통해 응집력있는 집합 구조체를 만들 수 있으며 사용자 입장에서도 간편하게 활용할 수 있다.
 * 열거형은 그 자체로 변수타입으로 지정할 수 있다. 이 때 열거형을 타입으로 가지는 변수는 해당 열거형이 가지는 모든 멤버를 값으로 받을 수 있다.
 * 이런 특성은 코드의 가독성을 높여준다.
 */

enum ItemStatusType{
    DELIVERY_HOLD = "DELIVERY_HOLD", // 배송 보류
    DELIVERY_READY = "DELIVERY_READY", // 배송 준비 중
    DELIVERY_START = "DELIVERY_START", // 배송 중
    DELIVERY_COMPLETE = "DELIVERY_COMPLETE", // 배송 완료
    DELIVERY_DELAY = "DELIVERY_DELAY" // 배송 지연
}

const checkItemAvailable = (status: ItemStatusType) => {
    switch(status){
        case ItemStatusType.DELIVERY_HOLD:
        case ItemStatusType.DELIVERY_READY:
        case ItemStatusType.DELIVERY_START:
        case ItemStatusType.DELIVERY_COMPLETE:
            return true;
        case ItemStatusType.DELIVERY_DELAY:
            return false;
        default:
            return true;
    }
}

/**
 * checkItemAvailable 함수의 인자인 status는 ItemStatusType 열거형을 타입으로 가지고 있다.
 * 이를 통해 얻을 수 있는 효과는 itemStatus의 타입이 문자열로 지정된 경우와 비교했을 때 다음과 같다.
 * 
 * 1. 타입 안정성 : itemStatusType 에 명시되지 않은 다른 문자열은 인자로 받을 수 없다. 따라서 타입 안정성이 우수하다.
 * 2. 명확한 의미 전달과 높은 응집력 : itemStatusType 타입이 다루는 값이 무엇인지 명확하다. 아이템 상태에 대한 값을 모아놓은 것으로 응집력이 뛰어나다.
 * 3. 가독성 : 응집도가 높기 때문에 말하고자 하는 바가 더욱 명확하다. 따라서 열거형 멤버를 통해 어떤 상태를 나타내는지 이해할 수 있다.
 */

/**
 * 다만 열거형을 사용할 때는 주의해야할 점이 있다.
 * 먼저 숫자로만 이루어져 있거나 타입스크립트가 자동으로 추론한 열거형은 안전하지 않은 결과를 낳을 수 있다.
 * 역방향으로 접근할 수 있는 만큼 할당된 값을 넘어서는 범위로 역방향으로 접근하더라도 타입스크립트는 막지 않는다.
 * 
 * 이러한 동작을 막기 위해 const eunm으로 열거형을 선언하는 방법이 있다. 
 * 이 방식은 역방향으로의 접근을 허용하지 않기 때문에 자바스크립트에서의 객체에 접근하는 것과 유사한 동작을 보장한다.
 */

ProgrammingLanguage[200]; // undefined를 출력하지만 별다른 에러를 발생시키지 않는다.
const enum ProgrammingLanguage3 {
    JavaScript,
    TypeScript,
    Python,
    Java,
    C,
    Cpp
}
console.log(ProgrammingLanguage3[200]); // 에러 발생

/**
 * 그러나 const enum 으로 열거형을 선언하더라도 숫자 상수로 관리되는 열거형은 선언한 값 이외의 값을 할당하거나 접근할 때 이를 방지하지 못한다.
 * 반면 문자열 상수 방식으로 선언한 열거형은 미리 선언하지 않은 멤버로 접근을 방지한다.
 * 따라서 문자열 상수 방식으로 열거형을 사용하는것이 숫자 상수 방식보다 더 안전하며 의도하지 않은 값의 할당이나 접근을 방지하는데 도움이 된다.
 */

const enum NUMBER {
    ONE = 1,
    TWO = 2,
    THREE = 3
}
const myNumber: NUMBER = 100;

const enum STRING_NUMBER {
    ONE = "ONE",
    TWO = "TWO",
    THREE = "THREE"
}
const myStringNumber : STRING_NUMBER = "FOUR"; // 에러 발생

/**
 * 이외에도 열거형의 가잔 큰 문제는 따로 존재한다.
 * 타입 공간과 값 공간에서 모두 사용되는 것이다. 
 * 열거형은 타입스크립트 코드가 자바스크립트로 변환될 때 즉시 실행 함수 (IIFE)로 변환되어 값 공간에 존재하게 된다.
 * 이때 일부 번들러에서 트리쉐이킹 과정 중 즉시 실행 함수로 변환된 값을 사용하지 않는 코드로 인식하지 못하는 경우가 발생할 수 있다.
 * 따라서 불필요한 코드의 크기가 증가하는 결과를 초래할 수 있다.
 * 이러한 문제를 해결하기 위해 앞서 언급했던 const enum 또는 as const assertion을 사용해서 유니온 타입으로 열거형과 동일한 효과를 얻는 방법이 있다.
 */
