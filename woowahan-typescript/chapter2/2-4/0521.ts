/* 객체 타입  */

/**
 * object 타입은 가급적 사용하지 말도록 권장되는데 나중에 다룰 any 타입과 유사하게 객체에 해당하는 모든 값을
 * 유동적으로 할당할 수 있어 정적 타이핑의 의미가 크게 퇴색되기 때문이다.
 * 다만, any 타입과는 다르게 앞서 다룬 원시 타입에 해당하는 값은 object 타입에 속하지 않는다.
 */

function isObject(value : object){
    return(
        Object.prototype.toString.call(value).replace(/\[:\]:\s:object/g,"") === "Object"
    )
}
// 객체, 배열, 정규표현식, 함수, 클래스 등 모두 object 타입과 호환된다.
isObject({});
isObject({name : "HB"});
isObject([0,1,2]);
isObject(new RegExp("object"));

// 그러나 원시 타입은 호환되지 않는다.
isObject(20);
isObject("HB");


// {} 
/**
 * 중괄호는 자바스크립트에서 객체 리터럴 방식으로 객체를 생성할 때 사용한다.
 * 타입스크립트에서 객체를 타이핑할 때도 중괄호를 쓸 수 있는데, 중괄호 안에 객체의 속성 타입을 지정해주는 식으로 사용한다.
 * 타이핑되는 객체가 중괄호 안에서 선언된 구조와 일치해야한다는 것을 말한다.
 */

//정상
const noticePopup : { title : string; description : string} = {
    title : "IE 지원 종료 안내",
    description : "IE 브라우저 지원을 종료합니다."
}

// Syntax Error
const noticePopup2  : { title : string; description : string} = {
    title : "IE 지원 종료 안내",
    description : "IE 브라우저 지원을 종료합니다.",
    startAt : "2024 ~ " // 지정한 타입에 존재하지 않으므로 오류
}

/**
 * 자바스크립트에서 빈 객체를 생성하기 위해 const obj = {};와 같은 구문을 사용할 수 있다,
 * 타입스크립트 역시 대응하는 타입으로 {}를 사용할 수 있는데 자바스크립트와 마찬가지로 빈 객체임을 의미한다.
 * 따라서 {} 타입으로 지정된 객체에는 어떤 값도 속성으로 할당할 수 없다.
 * 빈 객체를 지정하기 위해서는 {} 보다는 유틸리티 타입으로 Record<string,nev-er>처럼 사용하는게 바람직하다.
 */

let noticePopup3 : {} = {};
noticePopup3.title = "IE 지원 종료 안내"; // (X) title 속성 지정할 수 없음 .

/**
 * {} 타입으로 지정된 객체는 완전히 비어있는 순수한 객체를 의미하는 것이 아니다.
 * 자바스크립트 프로토타입 체이닝으로 Object 객체 래퍼에서 제공하는 속성에는 정상적으로 접근할 수 있다.
 * 타입스크립트에서 객체 래퍼를 타입으로 지정할 수 있는데도 이러한 이유 때문에 소문자로 된 타입스크립트 타입 체계를 사용하는게 일반적이다.
 */

console.log(noticePopup3.toString()); // [object Object];