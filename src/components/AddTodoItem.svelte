<script>
    import {createEventDispatcher} from "svelte";
    export let title = "Enter what u wanna do!";
    import {onInterval} from '../utils/onInterval'

    const dispatch = createEventDispatcher()
    
    function handleAddClick() {
        if (text === '') return;
        dispatch('addTodo', text)
    }

    function handleTextInput(e) {
        text = e.target.value;
    }
    let counter = 0;
    let text = "";


    onInterval(() => counter++, 1000)
</script>

<div class="main-container">
    <label for="todo-text">{title}</label>
    {counter}
    <input value={text} on:input={handleTextInput} id="todo-text" class="todo-input" />
    <button on:click={handleAddClick}>Add todo</button>
</div>
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