import { newTodo } from '@/utils/actions'

const NewTodoForm = () => {
  return (
    <>
      <h1>Add Todo</h1>
      <form action={newTodo}>
        <input
          type="text"
          name="todo"
          className="border border-gray-400 rounded-md h-10 focus:border-gray-600 outline-none"
        />
        <button
          type="submit"
          className="border py-2 px-4 bg-cyan-600 text-white font-medium rounded ml-6 "
        >
          + New TODO
        </button>
      </form>
    </>
  )
}

export default NewTodoForm
