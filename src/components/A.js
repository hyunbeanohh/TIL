import React from 'react'

const A = ({message,posts}) => {
  return (
    <div>
      <h1>A Components</h1>
      <p>{message}</p>
      <ol>
        {posts.map(post => {
          return (
            <li key={post.id}>
              <p>{post.title}</p>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default A