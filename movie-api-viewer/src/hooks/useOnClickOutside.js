import { useEffect } from "react";

export default function useOnClickOutside(ref,handler){
    useEffect(() => {
        // 모달 창 바깥을 클릭하면 Callback 함수를 호출하는 이벤트 등록
        const listener = (event) => {
            if(!ref.current || ref.current.contains(event.target)){ // ref.current가 없거나 ref.current에 포함된 엘리먼트가 있을 경우
                return;
            }
            handler(event);
        };
        document.addEventListener('mousedown',listener);
        
        return () => {
            document.removeEventListener('mousedown',listener);
        }
    }, [ref,handler])
    

}