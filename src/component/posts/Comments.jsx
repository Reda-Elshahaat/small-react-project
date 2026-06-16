import axios from 'axios'
import './comment.css'
import React, { useEffect, useState } from 'react'
    // https://jsonplaceholder.typicode.com/comments
export default function Comments() {
    const [comments, setComments] = useState([]);
    const [commentsLoading, setCommentsLoading] = useState(true);

    useEffect(() => {

        const fetchComments = async () => {
          try{
              const response = await fetch('https://jsonplaceholder.typicode.com/comments')
              const json = await response.json();
              setComments(json)
          }
          catch(error){
              console.log(error,'comments error')
          }
          finally{
              setCommentsLoading(false)
          }
        }
        fetchComments()
    }, [])
    console.log(comments);

  return (
    <>
      {
        commentsLoading ? <h1>Loading...</h1> : (
          <div className='comments'>
            <h2>Comments {window.location.pathname.split('/').pop()}</h2>
            {
                comments.map((comment) => {
                  if(comment.postId === parseInt(window.location.pathname.split('/').pop())){
                    return (
                        <div key={comment.id}>
                            <h5>Name :{comment.name.slice(0,20)}</h5>
                            <p className='comment-body'>{comment.body}</p>
                        </div>
                    )
                  }
                })
            }
          </div>
        )
      }
    </>
  )
}

 
  