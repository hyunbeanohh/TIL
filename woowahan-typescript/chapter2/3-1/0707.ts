import {useState} from 'react';
const [value, setValue] = useState(false);
const [username, setUsername] = useState("");

/**
 * useState는 반환 값이 명확하고 잘 설계된 API이기 때문에 튜플 타입을 통해 이와 같은 유연성을 얻을 수 있다.
 * 첫 번째 원소와 두번째의 원소의 타입과 의미가 명확하기 때문에 사용자는 그 의미에 맞게 적합한 이름을 선언하여 값을 가져올 수 있다.
 * 
 * 구조 분해 할당은 배열 뿐만 아니라 객체에 대해서도 적용할 수 있다.
 * 객체의 경우 사전에 선언된 속성 이름을 통해 값을 가져오므로 튜플보다 유연성은 다소 떨어질 수 있다.
 */

const useStateWithObject = (initialValue : any) => {
    ...
    return { value, setValue };
}

const { value, setValue } = useStateWithObject(false); // 해당 함수에서 정의도된 속성 이름으로 가져와야 한다
const {value : username, setValue : setUsername} = useStateWithObject(""); // 사용자 정의 이름으로 사용하고 싶다면 일차적으로 먼저 접근한 다음에 다른 이름으로 지정할 수 있다.

/**
 * 튜플과 배열의 성질을 혼합해서 사용할 수도 있다.
 * 스프레드 연산자(...)를 사용하여 특정 인덱스에서 요소를 명확한 타입으로 선언하고 나머지 인덱스에서는 배열처럼 동일한 자료형의 원소를 개수 제한 없이 받도록 할 수 있다.
 */

const httpStatusFromPath : [number , string, ...string[]] = [200, "OK"];
// 첫번째 자리는 숫자, 두번째 자리는 문자열을 받아야하고, 그 이후로는 문자열 타입의 원소를 개수제한 없이 받을 수 있음.