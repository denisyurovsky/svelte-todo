<script>
	import AddTodoItem from "./components/AddTodoItem.svelte";
	import {onMount} from "svelte";
	import TodoItem from "./components/TodoItem.svelte";
	import {getTodos} from '../src/utils/getTodos'

	let items = [];
	
    onMount(() => {
        getTodos().then((todos) => items = todos)
    })

	function handleAddClick(event) {
        items = [...items, {id: Math.random(), text: event.detail }]
    }
	
	function handleRemoveTodo(event) {
		items = items.filter((todo) => todo.id !== event.detail)
	}

	function handleDoneChange(id) {
		items = items.map((todo) => {
			if (todo.id === id) {
				todo.done = true;
			}
			return todo;
		})
	}
</script>

<main>
	<AddTodoItem on:addTodo={handleAddClick} />
	{#await items}
<p>Loading todos...</p>
{:then _items}
    {#each _items as {id, text, checked}, index (id)}
	<div class="todo-item-container">
        <TodoItem title={`${index + 1}. ${text}`} {id} {checked} on:removeTodo={handleRemoveTodo} on:handleDoneChange={handleDoneChange}/>
	</div>
    {:else}
    No items to do!
    {/each}
{:catch}
    An error occurred...
{/await}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	.todo-item-container {
		margin-top: 5px;
		margin-bottom: 5px;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>