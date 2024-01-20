<script>
</script>

<div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Svelte</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown">
            <span class="navbar-toggler-icon"></span>

        </button>

        
    </nav>
</div>

<style>

    .navbar {
        background-color: #e3f2fd;
    }

    .navbar-brand {
        font-size: 1.5rem;
        font-weight: bold;
    }

    .navbar-toggler {
        border: none;
    }

    .navbar-nav {
        flex-direction: row;
    }

    .nav-link {
        font-size: 1.2rem;
        font-weight: bold;
        margin-left: 1rem;
    }

    .nav-link:hover {
        color: #000;
    }

    .nav-link.active {
        color: #000;
    }

    .nav-link.active:hover {
        color: #000;
    }

    .nav-link.active::after {
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        background-color: #000;
        margin-top: 0.5rem;
    }

    .nav-link.active:hover::after {
        background-color: #000;
    }
    

</style>