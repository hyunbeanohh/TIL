/**
 * 객체를 타이핑하기 위해서는 타입스크립트에서만 독자적으로 사용할 수 있는 키워드를 사용하는게 일반적이다.
 * 객체 범주에 속하는 배열도 마찬가지로 타입스크립트에서는 object 대신 오직 배열임을 나타내는 타입스크립트만의 배열 타입 시스템을 사용할 수 있다.
 * 흔히 객체를 타이핑하기 위해 자주 사용하는 키워드로 type과 interface가 있다.
 * 중괄호를 사용한 객체 리터럴 방식으로 타입을 매번 일일이 지정하기에는 중복적인 요소가 많다.
 */

type NoticePopupType2  = {
    title : string;
    description : string;
}

interface INoticePopup2{
    title : string;
    description : string;
}
const noticePopup3 : NoticePopupType = {...};
const noticePopup4 : INoticePopup = {...};

/**
 * interface 와 type 키워드를 실무에서는 어떻게 사용할까?
 * 필요에 따라 type과 interface를 모두 사용한다.
 * 선언병합이 필요할 때는 interface, computed value를 사용해야 한다면 type 정의를 사용한다.
 * 
 * 객체 지향적으로 코드를 짤 때, 특히 상속하는 경우에 interface를 사용한다.
 */



// function
/**
 * 자바스크립트에서는 함수도 일종의 객체로 간주하지만 typeof 연산자로 함수 타입을 출력해보면 자바스크립트 함수를
 * function이라는 별도 타입으로 분류한다는 것을 확인할 수 있다.
 */

function add(a,b){
    return a+b;
}
console.log(typeof add); // funtion

/**
 * 마찬가지로 타입스크립트에서도 함수를 별도 함수 타입으로 지정할 수 있다.
 * 자바스크립트에서 typeof 연산자로 확인한 funtion 이라는 키워드 자체를 타입으로 사용하지는 않는다는 것이다.
 * 함수는 매개변수 목록을 받을 수 있는데 타입스크립트에서는 매개변수도 별도 타입으로 지정해야한다.
 */

function add(a:number, b:number) : number {
    return a + b;
}

/**
 * 앞의 예시에서는 매개변수 a와 b에 number타입이 지정되고, 함수 이름 옆에 콜론과 함께 다시 number 타입으로 반환 값을 지정하고 있는 것을 볼 수 있다.
 * 이 예시는 타입스크립트에서 함수를 작성할 때 매개변수와 반환 값에 대한 타입을 지정하는 문법을 설명한 것이다.
 * 함수 자체에 타입을 지정하는 방법은 "호출 시그니처 " 를 사용한다
 * 타입스크립트에서 함수 타입을 지정할 때 사용하는 문법으로 함수 타입은 해당 함수가 받는 매개 변수와 반환하는 값의 타입으로 결정된다.
 * 호출 시그니처는 이러한 함수의 매개 변개변수와 반환 값의 타입을 명시하는 역할을 한다.
 */
type add = (a :number, b: number) => number;
