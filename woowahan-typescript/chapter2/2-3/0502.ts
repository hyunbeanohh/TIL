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


class Developer{
    name : string;
    sleeping : number;

    constructor (name:string, sleeping:number){
        this.name = name;
        this.sleeping = sleeping;
    }
}

const d = typeof Developer // 값이 function
type T = typeof Developer // 타입이 typeof Developer

/* 자바스크립트의 클래스는 결국 함수이기 때문에 값 공간에서 typeof Developer의 값은 function이 된다.
타입 공간에서 typeof Developer의 반환 값은 조금 특이한데 type T에 할당된 Developer는 인스턴스의 타입이 아니라
new 키워드를 사용할 때 볼 수 있는 생성자 함수이기 때문이다.
*/

const zig : Developer = new Developer("hb",6);
type ZigType = typeof zig; // 타입이 Developer

/*
typeof Developer 를 풀어쓰면 아래와 같다.
new (name: string, sleeping: number): Developer
*/

/**
 * 자바스크립트 instanceof 연산자를 사용하면 프로토 타입 체이닝 어딘가에 생성자의 프로토 타입 속성이 존재하는지 판단할 수 있다.
 * typeof 연산자 처럼 instanceof 연산자의 필터링으로 타입이 보장된 상태에서 안전하게 값의 타입을 정제하여 사용할 수 있다.
 */
let error = unknown;
if(error instanceof Error){
    showAlert(error.message);
}elss{
    throw Error(error);
}

/**
 * 타입스크립트에서는 타입 단언이라 부르는 문법을 사용해서 타입을 강제할 수도 있는데 as 키워드를 사용하면 된다.
 * 타입 단언은 개발자가 해당 값의 타입을 더 잘 파악할 수 있을 때 사용되며 강제 형 변환과 유사한 기능을 제공한다.
 */