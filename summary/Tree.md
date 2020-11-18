# WebGL
实现三维效果的规范

# Tree.JS
## 三大组件
1. Scene
    只有一种场景
2. Camera
    1. 透视相机: 远小近大
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    (fov, aspect, near, far) //视角, 宽高比例，近景距离，远景距离
    2. 正投影相机：远近相同
3. render
    所有渲染都在domElement
    渲染render(scene, camera, renderTarget, forceClear)  // forceclaer绘画前清除
    1. 实时渲染
    不停的对画面进行渲染，即使没有改变
    requestAnimationFrame(render) 让浏览器再调用函数
    2. 离线渲染
4. 几何体：网格模型 cube = Three.Mesh(new Tree.CubeGeometry(2,2,2), material)
    1. 光照
    2. 纹理:材质
    material : MeshBasicMateria(color:)
    3. 颜色
    scene.add(cube)

```js
var scene = new THREE.Scene();  // 场景
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);// 透视相机
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);    // 设置渲染器的大小为窗口的内宽度，也就是内容区的宽度
document.body.appendChild(renderer.domElement);
```
4. 添加场景
```js
var geometry = new THREE.CubeGeometry(1,1,1); 
var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
var cube = new THREE.Mesh(geometry, material); 
scene.add(cube);
```
```js
function threeStart() {
                initThree();
                initCamera();
                initScene();
                initLight();
                initObject();
                render();
            }
```