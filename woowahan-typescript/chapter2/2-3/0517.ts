// boolean
const isEmpty : boolean = true;
const isLoading : boolean = false;

//errorAction.type과 ERROR_TEXT가 같은지 비교한 결과 값을 boolean  타입으로 반환하는 함수
function isTextError(errorCode : ErrorCodeType) : boolean {
    const errorAction = getErrorAction(errorCode);
    if(errorAction){
        return errorAction.type === ERROR_TEXT;
    }
    return false;
}

/* 
    오직 true , fasle 값만 할당할 수 있는 boolean 타입
    errorAction.type 과 ERROR_TEXT가 같은지 비교한 결과 값 boolean 타입으로 반환하는 함수.
    비교식의 결과도 booelan 타입을 갖을 수 있다.
*/

// undefinde
let value : string;
console.log(value); // undefined ( 값이 아직 할당되지 않음 )

type Person {
    name : string;
    job? : string;
}
/*
    정의되지 않았다는 의미의 타입으로 오직 undefined 값만 할당할 수 있다.
    일반적으로 초기화되지 않은 값을 의미하며 앞의 예시처럼 변수 선언만하 하고 값을 할당하지 않을 때 undefineda가 반환
    person type의 job 속성은 옵셔널로 지정되어 있는데 이런 경우에도 undefined를 할당할 수 있다.
    즉, 초기화되어 있지 않거나 존재하지 않음을 나타낸다.
*/