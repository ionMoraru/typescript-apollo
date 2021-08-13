import { gql, useMutation } from "@apollo/client";

interface CreatePostInput {
  variables: {
    input: {
      title: string
      body: string
    }
  }
}

const CREATE_POST = gql`
  mutation createPost($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      body
    }
  }
`



export const useCreatePost = (): ((createPostInput: CreatePostInput) => any) => {
  const [createNewPost] = useMutation(CREATE_POST, {
    update(cache, { data: { createPost } }) {
      cache.modify({
        fields: {
          posts(existingPosts) {
            const newPostRef = cache.writeFragment({
              data: createPost,
              fragment: gql`
                fragment NewPost on Post {
                  id,
                  title,
                  body
                }
              `
            })
            return [...existingPosts.data, newPostRef]
          }
        }
      })
    }
  })

  return createNewPost
}