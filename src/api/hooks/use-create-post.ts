import { useMutation, useQueryClient } from '@tanstack/react-query'
import { IPost } from 'api/types/post'
import { postService } from 'api/services'

export const useCreatePost = () => {
  const queryClient = useQueryClient()
  const { mutate, isPending } = useMutation({
    mutationKey: ['add post'],
    mutationFn: (newPost: Omit<IPost, 'id'>) => postService.createPost(newPost),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['posts'] }),
    onError: () => console.log('Mutate error'),
  })

  return { mutate, isPending }
}
