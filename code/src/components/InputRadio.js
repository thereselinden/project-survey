import React from 'react'
import './InputRadio.css'
/*
//array for radio btn
const ageGroups = [
  '0-18',
  '19-30',
  '31-40',
  '41-50',
  '51-60',
  '60 +'
]
*/

export const InputRadio = ({ question, array, setAge, age }) => {

  return (
    <>
      <h2>{question}</h2>

      {array.map(group => (
        <div className="radio-wrapper">
          <label htmlFor="InputRadio" key={group}>
            <input
              name="InputRadio"
              className="radio-container"
              type='radio'
              value={group}
              onChange={event => setAge(event.target.value)}
              checked={age === group}
            />
            {group}
            <span className="custom-radio-btn"></span>
          </label>
        </div>
      ))}

    </>
  )
}