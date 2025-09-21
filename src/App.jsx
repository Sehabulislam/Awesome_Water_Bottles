
import { Suspense } from 'react'
import './App.css'
import Bottles from './Components/Bottles/Bottles'

function App() {

  const bottlesPromise = fetch('./bottles.json').then(res => res.json());
  // const bottles = [
  //   {id: 1, name: 'pink bottle', price: 250, color: 'pink'},
  //   {id: 1, name: 'green bottle', price: 250, color: 'green'},
  //   {id: 1, name: 'red bottle', price: 250, color: 'red'},
  //   {id: 1, name: 'blue bottle', price: 250, color: 'blue'},
  // ]

  return (
    <>
      <h1>Buy Awesome Water Bottle</h1>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Bottles bottlesPromise={bottlesPromise} ></Bottles>
      </Suspense>
    </>
  )
}

export default App
