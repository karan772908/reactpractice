import React from 'react'
import Cards from './components/Cards'

const App = () => {


  const users=[
    {
      "name": "Aarav Mehta",
      "city": "Mumbai",
      "age": 28,
      "profession": "Software Engineer",
      "profile_photo": "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      "name": "Priya Sharma",
      "city": "Delhi",
      "age": 25,
      "profession": "Graphic Designer",
      "profile_photo": "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      "name": "Rohan Patel",
      "city": "Ahmedabad",
      "age": 31,
      "profession": "Data Analyst",
      "profile_photo": "https://randomuser.me/api/portraits/men/56.jpg"
    },
    {
      "name": "Sneha Kapoor",
      "city": "Bangalore",
      "age": 27,
      "profession": "Marketing Manager",
      "profile_photo": "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      "name": "Karan Verma",
      "city": "Pune",
      "age": 30,
      "profession": "Web Developer",
      "profile_photo": "https://randomuser.me/api/portraits/men/12.jpg"
    }
  ]



  return (
    <div>
      <div className='p-10'>
        {users.map(function(elem,idx){
          return <Cards key={idx} username={elem.name} prof={elem.profession} age={elem.age} city={elem.city} photo={elem.profile_photo}  />
        })}
      </div>
    </div>
  )
}

export default App
