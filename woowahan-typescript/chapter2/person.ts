interface Person{
    first : string;
    last : string;
}

const person : Person = {first : "dev", last : "bean"};
function email(options:{person : Person, subject : string; body:string}){};

// 값에서 사용된 typeof 는 자바스크립트 런타임의 typeof 연산자가 된다.
const v1 = typeof person; // object
const v2 = typeof email;  // function

// 반면 타입에서 사용된 typeof는 값을 읽고 타입스크립트 타임을 반환한다.
type T1 = typeof person; // 타입은 Person
type T2 = typeof email; // 타입은 (options :{~~~~}) => void

// email 함수는 타입 공간에서 typeof 연잔자로 값을 읽을 때, 함수의 매개변수 타입과 리턴 타입을 포함한 함수 시그니처 타입을 반환한다.