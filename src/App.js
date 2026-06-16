// component 
import Posts from './component/posts/Posts'
import Header from './component/header/Header'
import Comments from './component/posts/Comments'

import React from 'react';
import { Route, Routes} from 'react-router-dom';
function App() {
  return (
    <>
      <div className="App">
        <Header/>
        {/* <Posts /> */}
        {/* <Comments /> */}
      </div>

      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/post/:id" element={<Comments />} />
      </Routes>
    </>

  );
}

export default App;
