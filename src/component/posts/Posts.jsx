import React, { useEffect , useState } from 'react'
// import axios from 'axios'

// component
import Post from './Post'

import './post.css'
export default function Posts() {

    const [posts, setPosts] = useState([]);
    const [postsLoading, setPostsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                const json = await response.json()
                setPosts(json)
            }
            catch(error){
                console.log(error,'error')
            }
            finally{
                setPostsLoading(false)
            }
        }
        fetchData()
    }, [])
    console.log(posts);
    
  return (
    <>
        {
            postsLoading ? <h1>Loading...</h1> : (
                <div className='posts'>
                    {
                        posts.map((post) => {
                            return (
                                <div key={post.id} className='post'>
                                    <Post  post={post}/>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }
    </>
  )
}
