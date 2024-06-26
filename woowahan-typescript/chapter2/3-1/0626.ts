/** unknown 타입 */
/**
 * unknown 타입은 any 타입과 유사하게 모든 타입의 값이 할당될 수 있다.
 * 그러나 any를 제외한 다른 타입으로 선언된 변수에는 unknown 타입 값을 할당할 수 없다.
 * 
 * any -> 어떤 타입이든 any타입에 할당 가능, any타입은 어떤 타입으로도 할당 가능(단 nerver는 예외)
 * unknown -> 어떤 타입이든 unknown 타입에 할당 가능, unknown 타입은 any 타입 외에 다른 타입으로 할당 불가능 
 */

let unknownValue : unknown;

unknownValue = 100; // any 타입과 유사하게 숫자이든
unknownValue = "Hello World"; // 문자열이든
unknownValue = () => console.log("unknown type"); // 함수이든 상관없이 할당 가능하다.

let someValue : any = unknownValue; // any 타입으로 선언된 변수를 제외한 다른 변수는 모두 할당이 불가하다.
let someValue2 :number = unknownValue; // (x)
let someValue3 :string = unknownValue; // (x)

/**
 * any 타입과 unknown 타입이 비슷한데 unknown 타입이 타입스크립트 3.0 버전에서 추가된 이유
 */

// 할당하는 시점에서는 에러가 발생하지 않음
const unknownFunction : unknown = () => console.log("this is unknown type");

// 하지만 실행시에는 에러가 발생
unknownFunction();

/**
 * 함수뿐만 아니라, 객체의 속성 접ㅈ근, 클래스 생성자 호출을 통한 인스턴스 생성 등 객체 내부에 접근하는 모든 시도에서 에러가 발생한다.
 * unknown 타입은 어떤 타입이 할당되었는지 알 수 없음을 나타내기 때문에 unknown 타입으로 선언된 변수는 값을 가져오거나 내부 속성에
 * 접근할 수 없다. 
 * 이는 unknown 타입으로 할당된 변수는 어떤 값이든 올 수 있음을 의미하는 동시에 개발자에게 엄격한 타입 검사를 강제하는 의도를 담고 있다.
 * 
 * any 타입을 특정 타입으로 수정해야 하는 것을 누락하면 어떤 값이든 전달될 수 있기 때문에 런타임에 예상치 못한 버그가 발생할 가능성이 높아진다.
 * unknown 타입은 이러한 상황을 보완하기 위해 등장한 타입이다. any 타입과 유사하지만 타입 검사를 강제하고 타입이 식별된 후에 사용할 수 있기 때문에
 * any 타입보다 더 안전하다. 따라서 데이터 구조를 파악하기 힘들 때 any 타입 대신 unknown 타입으로 대체해서 사용하는 방법이 권장된다.
 */

 
