import React, { useContext } from 'react'

const ExampleContext = React.createContext({
  spacing: 2,
  styles: {
    color: "darkblue",
    size: "16px"
  },
  fn: () => alert("alert function called"),
  randomNumber: () => Math.floor(Math.random() * 10) + 1  
})

const ComponentUsingContext = () => {
  const ctx = useContext(ExampleContext);
  return (
    <section>
      <h2>Component using useContext</h2>
      <button onClick={ctx.fn}>call context function</button>

      <p style={{ color: ctx.styles.color, "fontSize": ctx.styles.fontSize }}>
        Random number: {ctx.randomNumber()}
      </p>

      <p>
        <pre>
          <code>
            <b>context:</b> {JSON.stringify(ctx, null, 2)}
          </code>
        </pre>
      </p>
    </section>
  )
};

export default ComponentUsingContext
