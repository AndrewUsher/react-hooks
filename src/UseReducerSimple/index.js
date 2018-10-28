
import React, { useReducer }  from 'react'
import styled, { keyframes } from 'styled-components'

const shake = keyframes`
  /* https://www.w3schools.com/howto/howto_css_shake_image.asp */
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`
const initialState = {
  color: "#26baee",
  small: true
};

function reducer(state, action) {
  switch (action.type) {
    case 'RESET':
      return initialState;
    case 'TOGGLE_SIZE':
      return {
        ...state,
        small: !state.small
      };
    case 'CHANGE_COLOR':
      return {
        ...state,
        color: action.payload || "yellow"
      };
    default:
      return state;
  }
}

const Rect = styled.div`
  background-color: ${props => props.color}
  display: inline-block;
  height: ${props => props.height}
  width: ${props => props.width}

  &:hover {
    animation: ${shake} 0.7s;
    animation-iteration-count: infinite; 
  }
`

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]

const UseReducerExample = () => {
  const [ { color, small }, dispatch ] = useReducer(reducer, initialState)
  const sideLength = small ? 200 : 300;
  return (
    <section>
      <h2>useReducer Example</h2>

      <button onClick={() => dispatch({
        type: 'CHANGE_COLOR',
        payload: colors[Math.floor(Math.random() * 6) + 1]  
      })}>
        Change Color
      </button>

      <button onClick={() => dispatch({ type: 'RESET' })}>
        Reset to default state
      </button>

      <p>Height: {sideLength}, Width: {sideLength}</p>
      <p>Color: {color}</p>

      <Rect
        color={color}
        height={`${sideLength}px`}
        onClick={() => dispatch({ type: 'TOGGLE_SIZE' })}
        width={`${sideLength}px`}
      >
        Hover to shake, click to toggle size
      </Rect>

    </section>
  )
}

export default UseReducerExample
