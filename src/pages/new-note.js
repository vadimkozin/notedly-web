import React, { useEffect } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { useNavigate } from 'react-router-dom'
import NoteForm from '../components/NoteForm'
import { NEW_NOTE } from '../gql/mutation'
import { GET_NOTES, GET_MY_NOTES } from '../gql/query'

const NewNote = (props) => {
  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'New Note - Notedly'
  })

  const { data } = useQuery(GET_NOTES)

  const [addNote, { loading, error }] = useMutation(NEW_NOTE, {
    // повтроно делаем запрос GET_NOTES чтобы обновить кэш
    // refetchQueries: [GET_NOTES],
    refetchQueries: [{ query: GET_MY_NOTES, GET_NOTES }],
    awaitRefetchQueries: true,
    onCompleted: (data) => {
      navigate(`/note/${data.newNote.id}`)
    },
  })

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error saving the note:{error.message}</p>}
      <NoteForm action={addNote} />
    </>
  )
}

export default NewNote
