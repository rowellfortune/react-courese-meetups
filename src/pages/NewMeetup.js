import React from 'react'
import { useHistory } from 'react-router-dom'
import NewMeetupForm from '../components/meetups/NewMeetupForm'
const NewMeetup = () => {
  const history = useHistory()

  function addMeetupHandler (meetupData) {
    fetch(
			'https://react-getting-started-e232b-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
		).then(() => {
  history.replace('/')
})
  }
  return (
    <div>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  )
}

export default NewMeetup
