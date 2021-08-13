import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useCreatePost } from '../../../hooks/useCreatePost'

interface FormData {
  title: string
  body: string
}

export const PostForm: FC = () => {
  const { register, handleSubmit } = useForm<FormData>()
  const createPost = useCreatePost()

  const onSubmit = handleSubmit(({ title, body}) => {
    createPost({variables: { input: { title, body }}})
    
  })
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text"  id="title" {...register("title")}/>
        <textarea   id="body" {...register("body")}></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
