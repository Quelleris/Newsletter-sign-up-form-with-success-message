import { useState } from 'react'
import SuccessMessage from './SuccessMessage'
import Newsletter from './Newsletter'

export default function App() {
  const [subscribed, setSubscribed] = useState(false)
  const [email, setEmail] = useState('')

  function handleSubscribe(input) {
    setEmail(input)
    setSubscribed(true)
  }

  return (
    <main>
      {subscribed ? <SuccessMessage email={email} onClick={() => setSubscribed(false)}/> : <Newsletter onSubmit={handleSubscribe}/>}
    </main>
  )
}
