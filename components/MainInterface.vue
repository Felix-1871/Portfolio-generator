<template>
<InterfaceNavbar/>
<div class="PanelContent">
<LeftPanel/>
<RightPanel/></div>

</template>

<style scoped>

.PanelContent {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
    background-color: #1e1e1e;
    overflow: hidden;
}
</style>