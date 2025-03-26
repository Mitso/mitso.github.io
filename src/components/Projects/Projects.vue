<template>
    <div class="projects">
        <h3 class="title">Company websites I have worked on</h3>
        <dl class="project-list">
            <div class="project-list-group">
                <dt class="project-list__name">Superbalist</dt>
                <dd class="project-list__desc">A large feline inhabiting Bodmin Moor.</dd>
            </div>
            <div class="project-list-group">
                <dt  class="project-list__name">Hyperion Dev</dt>
                <dd class="project-list__desc">A sea serpent.</dd>
            </div>
            <div class="project-list-group">
                <dt class="project-list__name">Praekelt</dt>
                <dd class="project-list__desc">A giant owl-like creature.</dd>
            </div>
            <div class="project-list-group">
                <dt class="project-list__name">Hellocomputer</dt>
                <dd class="project-list__desc">A giant owl-like creature.</dd>
            </div>
            <div class="project-list-group">
                <dt class="project-list__name">Webfactory</dt>
                <dd class="project-list__desc">A giant owl-like creature.</dd>
            </div>  
        </dl>
    </div>

</template>

<style lang="scss">
.projects {
    text-align: center;
    margin: 5em 7em;
    .title {
        margin: 2em 1em 1em;
        font-weight: 500;
    }
    .project-list {
        align-items: center;
        display: flex;
        justify-content: space-evenly;
        &-group {
            background-color: var(--color-black-gray);
            border-radius: 100%;

            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            padding: 1em;
            text-align: center;
            @media screen and (min-width: 670px) {
                width: 200px;
                height: 200px;
            }
        }
       
       
        &__name {
            color: white;
            font-size: 20px;
        }
        &__desc {
            font-size: 12px;
        }
    }
}
    
</style>