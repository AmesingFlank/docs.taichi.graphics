---
sidebar_position: 1

---

# New UI system

A new UI system is to be added to Taichi. The new GUI system will use GPU for rendering, which will enable it to be much faster and to render 3d scenes. This doc describes the APIs to be implemented.

A few design principles (to be expanded):

* Immediate mode GUI components. 
* When rendering geometries, users will supply `taichi` fields as input. The implementation will avoid any GPU<->CPU memcpy. 

## Creating a window

`ti.ui.Window(name, res)` creates a window. If `res` is scalar, then the width will be equal to the height.Example:

```python
window = ti.ui.Window('Window Title', (640, 360))
```

There're three types of objects that can be displayed on a `ti.ui.Window`:

* 2D Canvas, which can be used to draw simple 2D geometries such as circles, triangles, etc.
* 3D Scene, which can be used to render 3D meshes and particles, with a configurable camera and light sources.
* Immediate mode GUI components, buttons, textboxes, etc.

## 2D Canvas

### Creating a canvas

```python
canvas = window.make_canvas(x,y,width,height)
```
where `x`,`y`,`width`,`height` are floats between 0 and 1 that indicate the relative position and size of the canvas relative to the window.

### Drawing on the canvas

```python
canvas.clear(color)
canvas.triangles(a,b,c,color)
canvas.triangles_indexed(positions,indices,color)
canvas.circles(centers,radius,colors)
canvas.lines(start_positions,end_positions,colors)
canvas.set_image(image)
```

The positions/centers of geometries will be represented as floats between 0 and 1, which indicate relative positions on the canvas.

### Drawing the canvas on the window
```python
window.render(canvas)
```


## 3D Scene

### Creating a scene
```python
scene =  canvas.make_scene()
```
### Configuring camera
```python
camera = ti.ui.make_camera()
camera.lookat(pos)
camera.up(dir)
camera.center(pos)
camera.projection_mode(mode)
scene.set_camera(camera)
```
where `mode` is either `ti.ui.Scene.PROJECTION_PERSPECTIVE` or `ti.ui.Scene.PROJECTION_ORTHOGONAL`


### Configuring light sources
#### adding a light source
```python
light = scene.add_point_light(pos,color) 
```
#### removing a light source
```python
scene.remove_light(light)
```


### 3d Geometries
```python
scene.mesh(vertices,indices,color)
scene.particles(positions,radius,color)
scene.clear()
```


### Rendering the scene 
a scene is rendered by first rendering it on a canvas.
```python
canvas.render(scene)
```




## GUI components

The support for GUI components will closely follow Dear IMGUI (and will likely be implemented using it..).

```python
window.GUI.begin(name,x,y,width,height)
window.GUI.text(...)
window.GUI.button(...)
window.GUI.end()
```


## Clearing and showing a window
```python
window.clear(color)
...
window.show()
```


## Events Processing
To obtain the events that have occurred since the previous poll:

```python
events = window.get_events()
```

Each `event` in `events` is an instance of `ti.ui.Event`. It has the following properties:
* `event.action`, which could be `ti.ui.ACTION_PRESSED`, `ti.ui.ACTION_RELEASED`, ...
* `event.key`, which is `ti.ui.KEY_XXXX`

To obtain mouse position:
* `window.get_mouse_position()`


## Example Application

```python
import taichi as ti

window = ti.ui.Window("Amazing Window",res)
canvas = window.make_canvas(x,y,width,height)
scene = canvas.make_scene()

camera = ti.ui.make_camera()
camera.lookat(pos)
camera.up(dir)
camera.center(pos)
camera.projection_mode(mode)
scene.set_camera(camera)

light = scene.add_point_light(pos,color) 

while window.running:
  events = window.get_event()
  if ev.action == ti.ui.ACTION_PRESSED and ev.key == ti.ui.KEY_SHIFT:
      ...

  window.clear()

  canvas.clear(...)
  canvas.triangles(...)

  scene.clear()
  scene.mesh(...)
  canvas.render(scene)

  window.render(canvas)
  
  window.GUI.begin(name,x,y,width,height)
  window.GUI.text(...)
  window.GUI.button(...)
  window.GUI.end()

  window.show()
  
    
```