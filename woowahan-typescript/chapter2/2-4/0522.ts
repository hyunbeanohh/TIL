// array
/**
 * 자바스크립트의 배열 자료구조는 원소를 자유롭게 추가하고 제거할 수 있으며 타입 제한 없이 다양한 값을 다룬다.
 * 즉, 하나의 배열 안에 숫자,문자열과 같은 서로 다른 값이 혼재될 수 있다.
 * 그러나 이런 쓰임은 타입스크립트가 추구하는 정적  타이핑 방향과 맞지 않는다.
 * 
 * 타입스크립트에서는 배열을 array라는 별도 타입으로 다룬다.
 * 타입스크립트 배열 타입은 하나의 타입 값만 가질 수 있다는 점에서 자바스크립트 배열보다 조금 더 엄격하다.
 * 타입스크립트에서 배열 타입을 선언하는 방식은 Array 키워드로 선언하거나 대괄호를 사용해서 선언하는 방법이 있다,
 */

const getCarList = async (carId : number[]) => {
    const res =await CartApi.GET_CAR_LIST(carId);
    return res.getData();
}
getCarList([]); // O
getCarList([1001]); // O
getCarList([1001,"1002"]); // X 1002 는 string 타입이므로 불가하다. 

/**
 * 여기서 주의해야 할 점이 있는데 튜플 타입도 대괄호로 선언한다는 것이다.
 * 자바스크립트에서 튜플은 조금 낯선 자료구조다. 튜
 */


// type과 interface 키워드
/**
 * 앞에서 언급한 타입스크립트 object 타입은 실무에서는 잘 작용하지 않는다.
 * 객체를 타이핑하기 위해서는 타입스크립트에서만 독자적으로 사용할 수 있는 키워드를 사용하는게 일반적이다.
 * 객체 범주를 속하는 배열도 마찬가지로 타입스크립트에서 object 대신 오직 배열임을 나타내는 타입스크립트만의 배열 타입 시스템을 사용할 수 있다.
 * 
 * 흔한 객체를 타이핑하기 위해 자주 사용하는 키워드로 type inetface가 있다.
 * 다음과 같에 객체 타입을 type 또는 interface 키워드를 사용해 선언하면 반복적으로 사용돼도 중복없이 해당 타입을 쓸 수 있다.
 */

type NoticePopupType = {
    title : string;
    description : string;
}

interface INoticePopup{
    title : string;
    description : string;
}
const noticePopup : NoticePopupType = {...};
const noticePopup2 : INoticePopup = {...};