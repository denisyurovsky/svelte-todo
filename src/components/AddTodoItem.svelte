<script>
    import {onDestroy, onMount, tick} from "svelte";
    export let title = "";
    import {onInterval} from '../utils/onInterval'
    import {getTodos} from '../utils/getTodos'
    import {format} from '../utils/format'

    let items = [];
    function hadnleAddClick() {
        items = [...items, 'items']
    }
    let counter = 0;
    let text = "";

    async function handleTextChange(event) {
        const {selectionStart, selectionEnd, value} = this; 
        text = format(event.target.value)
        await tick()
        this.selectionStart = selectionStart;
        this.selectionEnd = selectionEnd;
    }

    onMount(() => {
        getTodos().then((todos) => items = todos)
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
{JSON.stringify(items)}
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