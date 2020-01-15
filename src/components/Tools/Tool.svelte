<script>
    import {onMount} from 'svelte';
    export let name, icon, value;

    onMount(() => {
        let tools = document.querySelectorAll('.tool');
        tools.forEach(tool => {
            tool.addEventListener('mouseenter', (e) => {
                tools.forEach(t => t.style.filter = 'grayscale(1)');
                e.srcElement.style.filter = 'blur(0)';
            });
            tool.addEventListener('mouseleave', (e) => {
                tools.forEach(t => t.style.filter = 'grayscale(0)');
            });
        });
    });

</script>
<style>
    .tool {
        padding: 1rem;
        background: #5337a5;
        color: white;
        transition: 0.3s filter;
    }
    .progress {
        margin-top: 0.5rem;
        display: block;
        height: 1.5rem;
        background: #eeeeee;
        grid-column: 1/3;
    }
    .value {
        width: calc(var(--value) * 1%);
        height: 1.5rem;
        background: #332266;
    }
    h3 {
        display: inline;
    }
    .icon {
        float: right;
    }
    i.fa {
        font-size: 20px;
    }
</style>

<div class="tool">
    <span class="icon">
        <i class="fa{icon} fa-lg"></i>
    </span>
    <h3>{name}</h3>
    <div class="progress" style="--value: {value};">
        <div class="value"></div>
    </div>
</div>