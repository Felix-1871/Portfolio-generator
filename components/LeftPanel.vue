<template>
 <div class="panel left">
    <div class="avatar-wrapper">
        <img src="/99283735.png" alt="avatar" width="140px" height="140px">
    </div>
    <p class="desc nick">Felix</p>
    <p class="desc"> <a href="https://www.linkedin.com/in/404/">LinkedIn</a></p>
    <p class="desc"> <a href="https://www.github.com/felix-1871">Github</a></p>
    
    
 </div>
</template>

<style scoped>

.panel {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    background-color: #1e1e2e;
}

.left {
    width: 200px;
}

.avatar-wrapper {
    margin: 0 auto;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid #28283E;
}

.desc {
    margin: 0;
    padding: 0;
    font-weight: 300;
    font-family: 'Montserrat', sans-serif;
    color: #cdd6f4;
}

.nick {
    font-size: 20px;
}

.desc a{
    color: #cdd6f4;
    text-decoration: none;
}



</style>