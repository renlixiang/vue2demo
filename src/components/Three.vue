<template>
    <div class="container">

    </div>
</template>

<script>
import * as Three from 'three'

export default {
    name: "ThreeVue",
    mounted() {
        this.initThree()
    },
    data() {
        return {

        }
    },
    methods: {
        initThree() {
            // 场景
            let scene = new Three.Scene()

            // 摄像机
            let camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
            camera.position.z = 5

            // 渲染器
            let renderer = new Three.WebGLRenderer()
            renderer.setSize(window.innerWidth, window.innerHeight)
            document.container.appendChild(renderer.domElement)

            // 物体
            let geometry = new Three.BoxGeometry(1, 1, 1)
            let material = new Three.MeshBasicMaterial({color: '#008c8c'})
            let cube = new Three.Mesh(geometry, material)
            scene.add(cube)
            renderer.render(scene, camera)
        }
    }
}
</script>

<style scoped lang="less">
.container {
    width: 100%;
    height: 100%;
    background-color: black;
}

</style>
