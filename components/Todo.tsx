'use client'
import { useTransition } from 'react'

import { completeTodo } from '@/utils/actions'

const Todo = ({ todo }) => {
  const [isPending, statTransition] = useTransition()

  return (
    <div
      className={`flex flex-col border py-2 my-4 px-4 cursor-pointer ${
        todo.completed ? 'line-through text-neutral-400' : ''
      }`}
      onClick={() => statTransition(() => completeTodo(todo.id))}
    >
      {todo.Content}
    </div>
  )
}

export default Todo
