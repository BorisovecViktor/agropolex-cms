import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ICategory } from 'api/types/category'
import { categoryService } from 'api/services'

export const useCreatePost = () => {
  const queryClient = useQueryClient()
  const { mutate, isPending } = useMutation({
    mutationKey: ['add post'],
    mutationFn: (newPost: Omit<ICategory, 'id'>) =>
      categoryService.createPost(newPost),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['posts'] }),
    onError: () => console.log('Mutate error'),
  })

  return { mutate, isPending }
}
