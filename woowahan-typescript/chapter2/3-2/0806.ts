/**
 * 3-2 타입 조합
 */

// 교차 타입(intersection type)

/**
 * 교차 타입을 사용하면 여러가지 타입을 결합하여 하나의 단일 타입으로 만들 수 있다.
 * 기존에 존재하는 다른 타입들을 합쳐서 해당 타입의 모든 멤버를 가지는 새로운 타입을 생성하는 것이다.
 * 교차 타입은 & 을 사용해서 표기한다.
 */

type ProductItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
};

type ProductItemWithDiscount = ProductItem & {discount : number};


// 유니온 타입(union type)
/**
 * 교차 타입이 타입 A와 타입 B를 모두 만족하는 경우라면, 유니온 타입은 타입 A또는 타입 B 중 하나가 될 수 있는 타입을 말하며
 * A | B 와 같이 표기한다. 주로 특정 변수가 가질 수 있는 타입을 전부 나열하는 용도로 사용된다.
 * 
 * printPromotionItem() 함수를 보면 인자로 PromotionEventItem 타입을 받고 있다.
 * 해당 함수 내부에서 quantity 를 참조하려고 시도하면 컴파일 에러가 발생하는데, 
 * 이는 quantity가 ProductItem 타입에만 존재하기 때문이다.
 */

type CardItem = {
    id: number;
    name: string;
    price: number;
    imageUrl : string;
}

type PromotionEventItem = ProductItem | CardItem;

const printPromotionItem = (item: PromotionEventItem) => {
    console.log(item.name); // OK
    console.log(item.quantity); // Error
}
/**
 * 교차 타입과 유니온 타입은 여러 줄에 걸쳐 표기할 수도 있는데, 이럴 경우에는 각 줄의 맨 앞에 & 혹은 | 를 붙여서 표기하면 된다.
 */

type PromotionEventItem2 = ProductItem | CardItem;

/**
 * 인덱스 시그니처
 */

/**
 * 인덱스 시그너치는 특정타입의 속성 이름은 알 수 없지만 속성 값의 타입을 알고 있을 때 사용하는 문법이다.
 * 인터페이스 내부에 [Key : K]: T 꼴로 타입을 명시해주면 되는데 이는 해당 타입의 속성 키는 모두 타입 K 타입이어야 하고
 * 속성 값은 모두 T타입을 가져야 한다는 의미다.
 */

interface IndexSignatureEx {
    [key :string]: number;
}

/**
 * 인덱스 시그니처를 선언할 때 다른 속성을 추가로 명시해줄 수 있는데 이때 추가로 명시된 속성은 인덱스 시그니처에 포함되는 타입이어야 한다.
 * 아래 예시의 name은 string 타입을 가지도록 선언되어 있지만 인덱스 시그니처의 키가 string 일 때는 number | boolean 타입이 오게끔 
 * 선언되어 있기 때문에 에러가 발생한다.
 */

interface IndexSignatureEx2 {
    [key :string]: number | boolean;
    length : number;
    isValid : boolean;
    name : string; // Error
}

/**
 * 인덱스드 엑세스 타입
 */

/**
 * 인덱스드 엑세스 타입은 다른 타입의 특정 속성이 가지는 타입을 조회하기 위해 사용된다.
 * 인덱스에 사용되는 타입 또한 그 자체로 타입이기 때문에 유니온 타입 , keyof, 타입 별칭 등의 표현을 사용할 수 있다.
 */

type Example = {
    a: string;
    b: number;
    c: boolean;
};

type IndexedAccess = Example['a'];
type IndexedAccess2 = Example['a' | 'b']; // string | number
type IndexedAccess3 = Example[keyof Example]; // string | number | boolean

type ExAlias = 'b' | 'c';
type IndexedAccess4 = Example[ExAlias]; // number | boolean

/**
 * 또한 배열의 요소 타입을 조회하기 위해 인덱스드 엑세스 타입을 사용하는 경우가 있다. 배열 타입의 모든 요소는 전부 동일한 타입을 가지며
 * 배열의 인덱스는 숫자 타입이다. 따라서 num-ber로 인덱싱하여 배열 요소를 얻은 다음에 typeof 연산자를 붙여주면 해당 배열 요소의 타입을 가져올 수 있다.
 */

const PromotionList = [
    { type : "product", name : "chicken"},
    { type : "card", name : "starbucks"},
    { type : "product", name : "beef"}
];
type ElementOf<T> = typeof T[number];
type PromotionItemType = ElementOf<PromotionList>;

/**
 * 맵드 타입
 */

/**
 * 보통 map이라고 하면 유사한 형태를 가진 여러 항목의 목록 A를 변환된 항목의 목록 B로 바꾸는 것을 의미한다.
 * 자바스크립트 map 메서드를 생각하면 이해하기 쉽다.
 * 자바스크립트의 map의 배열 A를 기반으로 새로운 배열 B를 만들어내는 배열 메서드이다.
 * 이와 마찬가지로 맵드 타입은 다른 타입을 기반으로 한 타입을 선언할 때 사용하는 문법인데, 인덱스 시그너치 문법을 사용해서
 * 반복적인 타입 선언을 효과적으로 줄일 수 있다.
 */

type Example2 = {
    a: string;
    b: number;
    c: boolean;
};

type Subset<T> = {
    [K in keyof T]? : T[K];
};

const aExample : Subset<Example2> = { a: 'test' };
const bExample : Subset<Example2> = { a: 'test', b: 1 };
const cExample : Subset<Example2> = { a: 'test', b: 1, c: false };

/**
 * 맵드 타입에서 매핑할 때는 readonly, ? 등의 타입스크립트 문법을 사용할 수 있다.
 * 읽기 전용으로 만들고 싶을 때 붙여주는 수식어는 readonly이다.
 * ? 는 선택적 매개변수로 맘ㄴ들고 싶을 때 붙여주는 수식어이다.
 * 맵드타입의 특이한 점은 이러한 수식어를 더해주는 것뿐만 아니라 제거할 수도 있다는 것이다.
 */

type ReadOnlyEx = {
    readonly a : number;
    readonly b : string;
}

type CreateMutable<Type> = {
    -readonly [Property in keyof Type] : Type[Property];
}

type ResultType = CreateMutable<ReadOnlyEx>; // { a : number, b : string }

type OptionalEx = {
    a? : number;
    b? : string;
    c? : boolean;
}
type Concrete<Type> = {
    [Property in keyof Type]-? : Type[Property];
}

type ResultType2 = Concrete<OptionalEx>; // { a : number, b : string, c : boolean }

