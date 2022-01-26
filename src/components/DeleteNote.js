import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation, useQuery } from '@apollo/client'
import ButtonAsLink from './ButtonAsLink'
import { DELETE_NOTE } from '../gql/mutation'
import { GET_MY_NOTES, GET_NOTES, GET_MY_FAVORITES } from '../gql/query'

const DeleteNote = (props) => {
  const navigate = useNavigate()

  const { data: dataMyNotes } = useQuery(GET_MY_NOTES) 
  const { data: dataMyFavorites } = useQuery(GET_MY_FAVORITES) 
  const { data: dataNotes } = useQuery(GET_NOTES)

  const [deleteNote] = useMutation(DELETE_NOTE, {
    variables: { id: props.noteId },
    refetchQueries: [GET_MY_NOTES, GET_MY_FAVORITES, GET_NOTES],
    awaitRefetchQueries: true,
    onCompleted: (data) => {
      navigate('/mynotes')
    },
  })
  return <ButtonAsLink onClick={deleteNote}>Delete Note</ButtonAsLink>
}

export default DeleteNote
