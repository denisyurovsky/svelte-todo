<script>
    import {onMount, tick} from "svelte";
    export let title = "Enter what u wanna do!";
    import {onInterval} from '../utils/onInterval'
    import {getTodos} from '../utils/getTodos'
    import {format} from '../utils/format'
    import TodoItem from '../components/TodoItem.svelte'
    let items = getTodos();
    function hadnleAddClick() {
        items = [...items, {
            id: Math.random(),
            text: 'blank text',
        }]
    }
    let counter = 0;
    let text = "";

    async function handleTextChange(event) {
        const {selectionStart, selectionEnd} = this; 
        text = format(event.target.value)
        await tick()
        this.selectionStart = selectionStart;
        this.selectionEnd = selectionEnd;
    }

    onMount(() => {
        // getTodos().then((todos) => items = todos)
    })

    $: console.log(items);
    onInterval(() => counter++, 1000)
</script>

<div class="main-container">
    <label for="todo-text">{title}</label>
    {counter}
    <input value={text} on:input={handleTextChange} id="todo-text" class="todo-input" />
    <button on:click={hadnleAddClick}>Add todo</button>
</div>

{#await items}
<p>Loading todos...</p>
{:then _items}
    {#each _items as {id, text}, index (id)}
        <TodoItem title={`${index + 1}. ${text}`} />
    {:else}
    No items to do!
    {/each}
{:catch}
    An error occurred...
{/await}
<style>
    .main-container {
        background-color: lightgreen;
        border-radius: 5px;
        padding: 10px;
    }

    .todo-input {
        width: 100%;
    }
</style>