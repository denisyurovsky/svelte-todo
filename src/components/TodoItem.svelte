<script>
  import { createEventDispatcher } from "svelte";

    export let title;
    export let id;
    export let checked;
    function handleDoneChange(id) {
        dispatch('handleDoneChange', id)
    }

    const dispatch = createEventDispatcher();

    function handleRemoveClick(id) {
        dispatch('removeTodo', id)
    }
</script>

<div class="main-container">
    <input checked={checked} type="checkbox" on:input={handleDoneChange(id)} />
    <p class="title">{title}</p>
    <p class="remove-button" on:click={handleRemoveClick(id)}>Remove todo</p>
</div>

<style>
    .main-container {
        display: flex;
        height: 50px;
        border-radius: 5px;
        background-color: darkseagreen;
        align-items: center;
        padding: 0 15px;
    }
    .title {
        flex: 1;
    }
    .remove-button {
        color: brown;
        font-weight: bold;
        cursor: pointer;
    }

    input {
        margin: 0;
        margin-right: 20px;
    }
    p {
        margin: 0;
    }
</style>