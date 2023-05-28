<template>

<div class="AboutContent">
        <div class="AboutContent__title">
            <h1>About Me</h1>
        </div>
        <div class="AboutContent__text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nemo error commodi tenetur, voluptatem dolorem labore quod iure ipsa asperiores nam deleniti iste atque. Maiores quibusdam fugiat modi officia officiis.</p>
        </div>
        <div class="AboutContent__text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In cum deleniti modi est nemo. Voluptate doloremque explicabo veritatis modi. Ipsa molestiae nam iusto rem repellat provident animi velit facilis aperiam.</p>
        </div>
        <div class="AboutContent__text">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit officia, neque consectetur sapiente voluptate quidem dignissimos dolore nobis tenetur. Optio quo perspiciatis, deserunt corrupti quia veniam iure blanditiis autem ad.</p>
        </div>
    </div>
</template>

<style scoped>

.AboutContent {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    background-color: white;
    padding: 0 20px;
}

.AboutContent__title {
    width: 100%;
    text-align: center;
    margin: 0;
    padding: 0;
    font-weight: 100;
    font-family: 'Montserrat', sans-serif;
}

.AboutContent__text {
    margin: 0;
    padding: 0;
    font-weight: 100;
    font-family: 'Montserrat', sans-serif;
}

.AboutContent__text--name {
    font-weight: bold;
}

.AboutContent__text--job {
    font-weight: bold;
}

.AboutContent__text--location {
    font-weight: bold;
}

.AboutContent__text--school {
    font-weight: bold;
}

.AboutContent__text--company {
    font-weight: bold;
}

.AboutContent__text--list {
    font-weight: bold;
}



</style>