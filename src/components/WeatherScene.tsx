import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import type { SceneType } from '../types/weather'

interface Particle {
  mesh: THREE.Object3D
  vx: number
  vy: number
  type: string
  yReset?: number
  wobble?: number
  timer?: number
  interval?: number
}

class WeatherSceneManager {
  private renderer: THREE.WebGLRenderer
  private scene: THREE.Scene
  private camera: THREE.PerspectiveCamera
  private particles: Particle[] = []
  private objects: THREE.Object3D[] = []
  private currentScene: SceneType | null = null
  private frameId: number = 0
  private time: number = 0

  constructor(canvas: HTMLCanvasElement) {
    this.renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.setClearColor(0x000000, 0)
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
    this.camera.position.set(0, 0, 5)
    this.resize()
    window.addEventListener('resize', this.resize)
    this.animate()
  }

  private resize = () => {
    const w = window.innerWidth
    const h = window.innerHeight
    this.renderer.setSize(w, h)
    this.camera.aspect = w / h
    this.camera.updateProjectionMatrix()
  }

  private clearScene() {
    this.objects.forEach((o) => this.scene.remove(o))
    this.objects = []
    this.particles = []
  }

  private addObject(obj: THREE.Object3D) {
    this.scene.add(obj)
    this.objects.push(obj)
  }

  private buildSunny() {
    const sunGeo = new THREE.SphereGeometry(0.8, 32, 32)
    const sunMat = new THREE.MeshBasicMaterial({ color: 0xffd700, transparent: true, opacity: 0.15 })
    const sun = new THREE.Mesh(sunGeo, sunMat)
    sun.position.set(3, 2.5, -3)
    this.addObject(sun)

    for (let i = 0; i < 6; i++) {
      const rGeo = new THREE.RingGeometry(0.85 + i * 0.15, 0.87 + i * 0.15, 64)
      const rMat = new THREE.MeshBasicMaterial({
        color: 0xffd700, transparent: true,
        opacity: Math.max(0.005, 0.05 - i * 0.006),
        side: THREE.DoubleSide,
      })
      const ring = new THREE.Mesh(rGeo, rMat)
      ring.position.copy(sun.position)
      this.addObject(ring)
    }

    for (let i = 0; i < 60; i++) {
      const g = new THREE.SphereGeometry(0.015 + Math.random() * 0.025, 6, 6)
      const m = new THREE.MeshBasicMaterial({ color: 0xffeaa0, transparent: true, opacity: 0.3 + Math.random() * 0.4 })
      const p = new THREE.Mesh(g, m)
      p.position.set((Math.random() - 0.5) * 12, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 3 - 2)
      this.addObject(p)
      this.particles.push({ mesh: p, vx: (Math.random() - 0.5) * 0.003, vy: (Math.random() - 0.5) * 0.002, type: 'dust' })
    }
  }

  private buildClouds() {
    const makeCloud = (x: number, y: number, z: number, s: number) => {
      const group = new THREE.Group()
      for (let i = 0; i < 8; i++) {
        const geo = new THREE.SphereGeometry(0.3 * s + Math.random() * 0.2 * s, 8, 8)
        const mat = new THREE.MeshBasicMaterial({ color: 0xccccdd, transparent: true, opacity: 0.12 + Math.random() * 0.08 })
        const mesh = new THREE.Mesh(geo, mat)
        mesh.position.set((Math.random() - 0.5) * 0.8 * s, (Math.random() - 0.5) * 0.3 * s, (Math.random() - 0.5) * 0.4 * s)
        group.add(mesh)
      }
      group.position.set(x, y, z)
      this.addObject(group)
      this.particles.push({ mesh: group, vx: -0.004 * s, vy: 0, type: 'cloud' })
    }
    makeCloud(-4, 2, -3, 2)
    makeCloud(2, 1.5, -2, 1.5)
    makeCloud(-1, 3, -4, 2.5)
    makeCloud(4, 0.5, -1, 1)
    makeCloud(-3, -0.5, -2, 1.2)
  }

  private buildRain() {
    this.buildClouds()
    for (let i = 0; i < 200; i++) {
      const g = new THREE.BufferGeometry()
      g.setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, -0.15, 0)])
      const m = new THREE.LineBasicMaterial({ color: 0x88bbff, transparent: true, opacity: 0.4 + Math.random() * 0.3 })
      const line = new THREE.Line(g, m)
      line.position.set((Math.random() - 0.5) * 14, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 4 - 1)
      this.addObject(line)
      this.particles.push({ mesh: line, vx: 0.001, vy: -0.05 - Math.random() * 0.05, type: 'rain', yReset: 5 })
    }
  }

  private buildStorm() {
    this.buildRain()
    for (let i = 0; i < 5; i++) {
      const pts: THREE.Vector3[] = []
      let x = (Math.random() - 0.5) * 8, y = 3
      for (let j = 0; j < 8; j++) {
        x += (Math.random() - 0.5) * 0.8
        y -= 0.5
        pts.push(new THREE.Vector3(x, y, Math.random() - 2))
      }
      const g = new THREE.BufferGeometry().setFromPoints(pts)
      const m = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.7 })
      const bolt = new THREE.Line(g, m)
      bolt.visible = false
      this.addObject(bolt)
      this.particles.push({ mesh: bolt, vx: 0, vy: 0, type: 'lightning', timer: Math.random() * 200, interval: 80 + Math.random() * 200 })
    }
  }

  private buildSnow() {
    for (let i = 0; i < 150; i++) {
      const g = new THREE.SphereGeometry(0.02 + Math.random() * 0.03, 4, 4)
      const m = new THREE.MeshBasicMaterial({ color: 0xe0f2fe, transparent: true, opacity: 0.6 + Math.random() * 0.4 })
      const p = new THREE.Mesh(g, m)
      p.position.set((Math.random() - 0.5) * 14, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 4 - 1)
      this.addObject(p)
      this.particles.push({ mesh: p, vx: (Math.random() - 0.5) * 0.008, vy: -0.01 - Math.random() * 0.01, type: 'snow', yReset: 5, wobble: Math.random() * Math.PI * 2 })
    }
  }

  private buildFog() {
    for (let i = 0; i < 30; i++) {
      const g = new THREE.SphereGeometry(0.5 + Math.random() * 1, 8, 8)
      const m = new THREE.MeshBasicMaterial({ color: 0xaabbcc, transparent: true, opacity: 0.04 + Math.random() * 0.04 })
      const p = new THREE.Mesh(g, m)
      p.position.set((Math.random() - 0.5) * 16, (Math.random() - 0.5) * 6, (Math.random() - 0.5) * 3 - 1)
      this.addObject(p)
      this.particles.push({ mesh: p, vx: -0.003, vy: 0, type: 'fog' })
    }
  }

  setScene(name: SceneType) {
    if (name === this.currentScene && this.objects.length > 0) return
    this.currentScene = name
    this.clearScene()
    switch (name) {
      case 'sunny': this.buildSunny(); break
      case 'cloudy': this.buildClouds(); break
      case 'rainy': this.buildRain(); break
      case 'storm': this.buildStorm(); break
      case 'snow': this.buildSnow(); break
      case 'fog': this.buildFog(); break
    }
  }

  private animate = () => {
    this.frameId = requestAnimationFrame(this.animate)
    this.time++

    this.particles.forEach((p) => {
      const pos = p.mesh.position
      if (p.type === 'rain' || p.type === 'snow') {
        pos.y += p.vy
        pos.x += p.vx
        if (p.type === 'snow' && p.wobble !== undefined) {
          pos.x += Math.sin(this.time * 0.02 + p.wobble) * 0.005
        }
        if (pos.y < -5) {
          pos.y = p.yReset ?? 5
          pos.x = (Math.random() - 0.5) * 14
        }
      } else if (p.type === 'cloud') {
        pos.x += p.vx
        if (pos.x < -8) pos.x = 8
      } else if (p.type === 'dust') {
        pos.x += p.vx
        pos.y += p.vy
        if (Math.abs(pos.x) > 7) p.vx *= -1
        if (Math.abs(pos.y) > 5) p.vy *= -1
      } else if (p.type === 'lightning') {
        p.timer = (p.timer ?? 0) + 1
        if (p.timer > (p.interval ?? 100)) {
          p.mesh.visible = true
          if (p.timer > (p.interval ?? 100) + 3) {
            p.mesh.visible = false
            p.timer = 0
            p.interval = 80 + Math.random() * 200
          }
        }
      } else if (p.type === 'fog') {
        pos.x += p.vx
        if (pos.x < -10) pos.x = 10
        const mat = (p.mesh as THREE.Mesh).material as THREE.MeshBasicMaterial
        mat.opacity = 0.04 + Math.sin(this.time * 0.01) * 0.015
      }
    })

    this.renderer.render(this.scene, this.camera)
  }

  dispose() {
    cancelAnimationFrame(this.frameId)
    window.removeEventListener('resize', this.resize)
    this.renderer.dispose()
  }
}

interface Props {
  scene: SceneType
}

export default function WeatherScene({ scene }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const managerRef = useRef<WeatherSceneManager | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return
    managerRef.current = new WeatherSceneManager(canvasRef.current)
    return () => { managerRef.current?.dispose() }
  }, [])

  useEffect(() => {
    managerRef.current?.setScene(scene)
  }, [scene])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', top: 0, left: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none', zIndex: 0, opacity: 0.7,
      }}
    />
  )
}
