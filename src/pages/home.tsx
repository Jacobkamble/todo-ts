import React from 'react'
import ListContainer from '../components/listContainer'
import AddToDo from '../components/addToDo'

const Home:React.FC = () => {
  return (
    <>
    <h2> Todo App</h2>
    <AddToDo/>
   
      <ListContainer/>
    </>
  )
}

export default Home
