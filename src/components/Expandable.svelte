<script lang="ts">
	import { fly } from "svelte/transition";

    export let title: string = "";
    export let summary: string = "";
    let isOpen = false;
  
    function toggleOpen() {
      isOpen = !isOpen;
    }
  </script>
  
  <div class="card mb-2">
    <div class="title" on:click={toggleOpen} on:keypress={toggleOpen}>
        <h2 class="p-2">{title}</h2>
        <svg class:open={isOpen} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"></path></svg>
    </div>
    {#if isOpen}
      <div class="p-4" transition:fly="{{ y: -20, duration: 400 }}" >
        {summary}
      </div>
    {/if}
  </div>
  
  <style>
    h1 {
      @apply flex items-center justify-between cursor-pointer p-2 flex-1;
    }

    .title {
      @apply flex items-center justify-between cursor-pointer p-2 flex-1;
    }

    .open {
      @apply rotate-180;
    }
  
  </style>
  