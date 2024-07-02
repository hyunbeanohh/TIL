/* void 타입 */

/**
 * 자바스크립트에서는 함수에서 명시적인 반환문을 작성하지 않으면 기본적으로 undefined가 반환된다.
 * 하지만 타입스크립트에서는 void 타입이 사용되는데 이것은 undefined가 아니다.
 * 타입스크립트에서 함수가 어떤 값을 반환하지 않는 경우에는 void를 지정하여 사용한다고 생각하면 된다.
 * 
 * void 타입은 주로 함수 반환 타입으로 사용되지만 사실 함수에 국한된 타입은 아니다.
 * 변수에도 할당할 수 있지만 함수가 아닌 값에 대해서는 대부분 무의미하다.
 * void 타입으로 지정된 변수는 undefined 또는 null 값만 할당할 수 있다. 
 * 
 * 그런데 만약 tsconfig.json에 strictNullchecks 옵션이 설정 돼 있을 경우 컴파일 시 해당 플래그 설정이 실행되는 경우에는
 * null 값을 할당할 수 없다.
 * 명시적인 의미를 부여하는 관점에서 undefind 와 null 타입 키워드를 직접 사용해서 타입을 지정하는 것이 더 바람직하다.
 */

function shoModal(type : modalType): void{
    feedbackSlice.actions.createModal(type);
}

const shoModal = (type : modalType) : void => {
    feedbackSlice.actions.createModal(type);
}


let voidValue : void = undefined;
// strictNullChecks가 비활성화된 경우에 가능
voidValue = null;

/* never 타입 */

/**
 *  nerver 타입도 일반적으로 함수와 관련하여 많이 사용되는 타입이다.
 * never라는 단어가 내포하고 있는 의미처럼 never 타입은 값을 반환할 수 없는 타입이다.
 * 여기서 값을 반환하지 않는 것과 반환할 수 있는 것을 명확히 구분해야 한다.
 * 
 * 자바스크립트에서 값을 반환할 수 없는 예는 크게 2가지로 나눌 수 있다.
 * 
 * 1. 에러를 던지는 경우
 * 자바스크립트에서는 런타임에 의도적으로 에러를 발생시키고 캐치할 수 있다.
 * throw 키워드를 사용하면 에러를 발생시킬 수 있는데 이는 값을 반환하는 것으로 간주하지 않는다.
 * 따라서 특정 함수가 실행 중 마지막에 에러를 던지는 작업을 수행한다면 해당 함수의 반환 타입은 never이다. 
 * 
 * 2. 무한히 함수가 실행되는 경우
 * 드물지만 함수 내에서 무한루프를 실행하는 경우가 있을 수 있다.
 * 무한 루프는 결국 함수가 종료되지 않음을 의미하기 때문에 값을 반환하지 못한다.
 */

// 1번의 예
function generateError(res:Response): never{
    throw new Error(res.getMessage());
}

// 2번의 예
function checkStatus(): never{
    while(true){
        //...
    }
}

/**
 * never 타입은 모든 타입의 하위 타입이다.
 * 즉, never 자신을 제외한 어떤 타입도 never 타입에 할당될 수 없다는 것을 의미한다.
 * 심지어 any 타입이라 할지라도 never 타입에 할당될 수 없다.
 * 따라서, 타입스크립트에는 조건부 타입을 결정할 때 특정 조건을 만족하지 않는 경우에 엄격한 타입 검사 목적으로 never 타입을 명시적으로 사용하기도 한다.
 */


/** Array 타입 */

/**
 * 배열 타입을 가르키는 Array 키워드는 자바스크립트에서도 Object.prototype.toString.call(...) 연산자를 사용하여 확인할 수 있다.
 * Object.prototype.toString.call(...) 함수는 객체의 타입을 알아내는 데 사용하는 함수이다. typeof를 사용하여 타입을 알 수도 있지만
 * 이 함수를 사용하는 이유는 typeof의 경우 객체 타입을 단순히 object 타입으로 알려주지만, Object.prototype.toString.call(...) 함수는 객체의 인스턴스까지 알려주기 때문이다.
 */

const arr = [];
console.log(Object.prototype.toString.call(arr)); // [object Array]

/**
 * 타입스크립트에서 다시 Array를 언급하는 이유는 다음과 같이 제시할 수 있다.
 * 
 * 1. 엄밀히 말하면 자바스크립트에서는 배열을 객체에 속하는 타입으로 분류한다.
 * 즉, 자바스크립트에서는 배열을 단독으로 배열이라는 자료형에 국한하지 않는다.
 * 2. 타입스크립트에서 Array 라는 타입을 사용하기 위해서는 타입스크립트의 특수한 문법을 함께 다뤄야한다.
 * 
 * 배열은 Array 키워드 이외에도 [] 대괄호를 사용해서 직접 타입을 명시할 수도 있는데 이때와 타입은 배열보다 더 좁은 범위인 "튜플"을 가르킨다.
 */

const fn = () => console.log(1);
const array = [1,"string",fn]; // 자바스크립트에서는 배열에 숫자, 문자열, 함수 등 다양한 값을 삽입할 수 있다.
array[0]; // 1
array[1]; // "string"
array[2]; // 1

/**
 * 하지만 이 개념은 타입스크립트의 정적 타이핑과 잘 부합하지 않는다.
 * 타입스크립트뿐만 아니라 다른 정적 언어에서도 배열의 원소로 하나의 타입만 사용하도록 명시한다.
 */

String[] array = {"string","string2"};
// JAVA -> string 타입의 배열로 선언된 array에 int,float 같은 다른 자료형의 원소는 혀옹하지 않는다.

/**
 * 타입스크립트에서는 일반적으로 배열의 크기까지 제한하지는 않지만 정적 타입의 특성을 살려 명시적인 타입을 선언하여 해당 타입의 원소를 관리하는 것을 강제한다.
 * 배열 타입을 선언하는 방식은 다른 정적 언어에서의 선언 방식과 유사하다.
 * 자료형 + 대괄호 ([]) 형식을 사용해서 배열 타입을 선언할 수 있다.
 */

const numberArray : number[] = [1,2,3];
// 숫자에 해당하는 원소만 허용한다.

/**
 * 자바스크립트에서 배열 타입을 Object.prototype.toString.call(...)연산자로 확인해보면 Array가 반환된다.
 * 타입스크립트에서는 이 키워드로 배열 타입을 선언하는 방법도 있다.
 * 이를 위해 제네릭이라는 특수한 문법을 사용한다.
 */

const genericArray : Array<number> = [1,2,3];
// number[]와 동일한 타입이다.

/**
 * 기본적으로 자바스크립트의 동작은 배열 원소의 타입을 구분하지 않기 때문에 다양한 자료형의 원소를 함께 다룰 수 있는데
 * 만약 숫자형과 문자열 등 여러 타입을 모두 관리해야 하는 배열을 선언하려면 유니온 타입을 사용할 수 있다.
 */

const array1: Array<number | string> = [1,"string"];
const array2: number[] | string[] = [1,"string2"];

// 후자의 방식은 아래와 같이 선언할 수도 있다.
const array3: (number | string)[] = [1,"string"];