import React from 'react'

/**
 * React.memo() 란
 * React 컴포넌트 렌더링은 이전에 렌더링 된 결과와 비교하여 DOM을 업데이트 결정하는데
 * 만약 결과가 이전과 다르면 React는 DOM을 업데이트 한다.
 * 이 과정에서 만약 컴포넌트가 React.memo()로 둘러 쌓여 있다면 React는 컴포넌트를 렌더링하고
 * 결과를 메모이징(memoizing)한다. 그리고 다음 렌더링이 일어날 때 렌더링하는 컴포넌트의 props가 같다면
 * React는 메모이징된 내용을 재사용한다.
 * 
 * React.memo Props 비교 방식 수정하기
 * React.memo(Component,[compareFunction(prevProps,nextProps)]);
 * function compareFunction(prevProps, nextProps){
 *    return(
 *        prevProps.a === nextProps.a && prevProps.b === nextProps.b;
 *    )
 * }
 * 
 * React.memo 를 사용하지 않아야하는 상황
 * 렌더링 될 때 props가 다른 경우가 대부분인 컴포넌트를 생각해보면 메모이제이션 기법의 이점을 얻기 힘들다.
 * props가 자주 변하는 컴포넌트를 React.memo로 래핑할 지라도 React는 두 가지 작업을 리 렌더링 할 때 마다 수행한다.
 * 1. 이전 props와 다음 props의 동등 비교를 위해 비교 함수를 수행한다.
 * 2. 비교 함수는 거의 항상 false를 반환할 것이기 때문에 React는 이전 렌더링 내용과 다음 렌더링 내용을 비교한다.
 * 
 * 비교 함수의 결과는 대부분 false를 반환하기에 props 비교는 불필요하게 된다.
 * 
 * 결론
 * 리액트에서 렌더링 성능 최적화를 하기 위해서는 React 컴포넌트를 분리하고 React.memo를 사용하면 된다.
 * 또한 React.memo 사용은 항상 좋은것은 아니기 때문에 profiler를 이용해 성능상 이점이 있는지 확인 후 사용한다.
 */

const Message = React.memo(({message}) => {
  return (
    <p>{message}</p>
  )
})


const ListItem = React.memo(({post}) => {
  return(
    <li key = {post.id}>
      <p>{post.title}</p>
    </li>
  )
})

const List = React.memo(({posts}) => {
  return(
    <ul>
      {posts.map((post)=>(
        <ListItem key = {post.id} post = {post}/>
      ))}
    </ul>
  )
})

const B = ({message,posts}) => {
  return (
    /* 상관이 없는 부분까지 전부 렌더링 되기 때문에 A컴포넌트보다 성능이 좋지 않게 나온다. */
    <div>
      <h1>B Components</h1>
      <Message message ={message}/>
      <List posts ={posts}/>
    </div>
  )
}

export default B