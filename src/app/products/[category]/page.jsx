import React from 'react'
import RenderComponent from './components/RenderComponent.jsx'

const page = ({params}) => {
  const {category} = params
  console.log(category);
  return (
    <RenderComponent category = {category} />
  )
}

export default page