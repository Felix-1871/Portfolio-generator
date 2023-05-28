<template>
 <div class="panel left">
    <div class="avatar-wrapper">
        <img src="/99283735.png" alt="avatar" width="100%" height="145px">
    </div>
    <p class="desc nick">Felix</p>
    <p class="desc">Web Developer</p>
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
    background-color: white;
   
}

.left {
    width: 200px;
}

.avatar-wrapper {
    width: 100%;
}

.avatar-wrapper img {
    border-radius: 50%;
}

.desc {
    margin: 0;
    padding: 0;
    font-weight: 100;
    font-family: 'Montserrat', sans-serif;
}

.nick {
    font-size: 20px;
}



</style>