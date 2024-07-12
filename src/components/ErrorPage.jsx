import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {

  const error =  useRouteError();
  console.log(error)
  return (
    <div>
        <h1>Error</h1>
        <p>something went wrong!</p>
    </div>
  )
}

export default ErrorPage