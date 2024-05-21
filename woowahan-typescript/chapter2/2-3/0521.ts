// number
const maxLength : number = 10;
const maxWidth : number = 120.3;
const maximum : number = +Infinity;
const notANumber : number = NaN;

/**
 * 자바스크립트의 숫자에 해당하는 모든 원시 값을 할당할 수 있다.
 * 자바스크립트의 숫자는 정수,부동소수점수를 구분하지 않기 때문에 모두 number 타입에 할당할 수 있다.
 * 자바스크립트에서 숫자에 해당하는 원시 값 중 NaN이나 Infinit도 포함된다.
 * NaN ( Not A Number ), Number("Hello World")의 반환 값은 해당 문자열을 숫자로 변환할 수 없기 때문에 NaN이다.
 * Infinity 는 무한대를 나타내는 숫자형이다.
 */

//bigint
const bigNumber : bigint = BigInt(9999999999);
const bigNumber2 : bigint = 999999999n;

/**
 * ES2020에서 새롭게 도입된 데이터 타입으로 타입스크립트 3.2 버전부터 사용가능.
 * 이전의 자바스크립트에서는 가장 큰 수인 Number.MAX_SAFE_INTEGER(2^53-1)을 넘어가는 값을 처리할 수 없었는데
 * bigInt를 사용하면 이보다 큰 수를 처리할 수 있다.
 * number 타입과 bigint 타입은 서로 다른 타입이기 때문에 상호 작용은 불가능하다.
 */


// string
const receiverName : string = "KG";
const receiverPhoneNumber : string = "010-1234-5678";
const letterContent : string = `안녕 내이름은 ${senderName}이야.`;
/**
 * 문자열을 할당할 수 있는 타입이다.
 * 공백도 string 타입에 해당한다. 
 * 작은 따옴표(')나 큰 따옴표(")로 둘러싼 문자열 말고도 백틱(`)으로 감싼 문자열 내부에 변숫값을 포함할 수 있는 
 * 템플릿 리터럴 문법도 있다.
 */

//symbol
const MOVIE_TITLE = Symbol("title");
const MUSIC_TITLE = Symbol("title");
console.log(MOVIE_TITLE === MUSIC_TITLE) // false

let SYMBOL : unique symbol = Symbol();

/**
 * ES2015에서 도입된 데이터 타입으로 Symbol() 함수를 사용하면 어떤 값과도 중복되지 않는 유일한 값을 생성할 수 있다.
 * 위의 예시처럼 title 이라는 동일한 문자열을 넘겨줬을 때도 서로 다른 값을 가지고 있음을 알 수 있다.
 * 타입스크립트에는 symbol 타입과 const 선언에서만 사용할 수 있는 unique symbol 타입이라는 symbol 하위 타입도 있다.
 * 
 * 타입스크립트의 모든 타입은 기본적으로 null 과 undefined를 포함하고 있다. 하지만 ts-config의 strictNullChecks 옵션을 활성화
 * 했을 때는 사용자가 명시적으로 해당 타입에 null이나 undefined를 포함해야만 null과 undefined를 사용할 수 있다.
 * 그렇지 않으면 null과 undefined가 될 수 있는 경우에 타입스크립트 에러가 발생하는데
 * 보통 타입가드로 null과 undefined가 되는 경우를 걸러낸다. 
 * ! 연산자를 사용해서 타입을 단언하는 방법도 있다. 이를 통해 사용자는 해당 참조가 null이나 undefined가 아니라고 보장할 수 있다.
 * 일반적으로 타입 가드를 사용하는 것이 더 안전하다고 여겨져 단언문보다 타입가드가 더 선호되는 경향이 있다.
 */
