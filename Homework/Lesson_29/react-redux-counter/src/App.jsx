import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './counterSlice'

export default function App() {
  const value = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div style={styles.container}>
      <h1>Value: {value}</h1>

      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  )
}

const styles = {
  container: {
    border: '1px solid #ccc',
    padding: '20px',
    width: '200px',
    textAlign: 'center',
  },
}