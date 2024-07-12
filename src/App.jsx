import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/ErrorPage'
import Post from './components/Post'
import Posts from './components/Posts'

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/poskts')
  if (!response.ok) {
    throw new Error('Failed to fetch posts')
  }
  return response.json();
}

const fetchPost = async ({ params, request, signal, context}) => {

  console.log(params)
  console.log(request)
  const { postId } = params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch post with ID ${postId}`)

  }
  return response.json();
}


const router = createBrowserRouter([
  {
    path: '/posts/:postId',
    element: <Post/>,
    loader: fetchPost,
    errorElement: <ErrorPage/>
  }, {
    path: '/',
    element: <Posts />,
    loader: fetchPosts,
    errorElement: <ErrorPage />,
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
