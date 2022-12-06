import React from 'react'
import Data from './Data';

const App = () => {

  const Student=[
    {
    admmissionDate: new Date(2022,11,29),
    studentName:"Pranav",
    studentCourse:"React-Js",
    studentFees:40000,
    studentEmail:"pranavdeore@gmail.com"
    },
    {
      admmissionDate: new Date(2022,11,29),
      studentName:"Gaurav",
      studentCourse:"React-Js",
      studentFees:40000,
      studentEmail:"gaurav@gmail.com"
      },
      {
        admmissionDate: new Date(2022,11,29),
        studentName:"ANkit",
        studentCourse:"React-Js",
        studentFees:40000,
        studentEmail:"ankit@gmail.com"
        }
]
  return (

    <div>
      <Data
      date={Student[0].admmissionDate}
      name={Student[0].studentName}
      course={Student[0].studentCourse}
      fees={Student[0].studentFees}
      email={Student[0].studentEmail}/>
    <Data
      date={Student[1].admmissionDate}
      name={Student[1].studentName}
      course={Student[1].studentCourse}
      fees={Student[1].studentFees}
      email={Student[1].studentEmail}/>
    <Data
      date={Student[2].admmissionDate}
      name={Student[2].studentName}
      course={Student[2].studentCourse}
      fees={Student[2].studentFees}
      email={Student[2].studentEmail}/>
    </div>
    
  )
}

export default App