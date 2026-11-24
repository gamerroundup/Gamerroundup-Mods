import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface MilkyWayGalaxy3DProps {
  warpSpeed?: boolean;
  activeView?: string;
}

export const MilkyWayGalaxy3D: React.FC<MilkyWayGalaxy3DProps> = ({ warpSpeed = false, activeView = 'portfolio' }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const warpRef = useRef(warpSpeed);
  const viewRef = useRef(activeView);

  useEffect(() => {
    warpRef.current = warpSpeed;
  }, [warpSpeed]);

  useEffect(() => {
    viewRef.current = activeView;
  }, [activeView]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030308, 0.015);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      200
    );
    camera.position.set(0, 12, 24);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create soft glowing circular star texture
    const createStarTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
        grad.addColorStop(0.25, 'rgba(255, 240, 255, 0.85)');
        grad.addColorStop(0.55, 'rgba(168, 85, 247, 0.28)');
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 64, 64);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const starTexture = createStarTexture();

    // 1. Primary 3D Spiral Milky Way Galaxy
    const galaxyGroup = new THREE.Group();
    scene.add(galaxyGroup);

    const params = {
      count: 32000,
      size: 0.16,
      radius: 26,
      branches: 5,
      spin: 1.45,
      randomness: 0.45,
      randomnessPower: 2.9,
      insideColor: '#ffb74d', // glowing solar amber core matching GR logo
      middleColor: '#a855f7', // electric violet matching GR logo
      outsideColor: '#38bdf8' // deep space cyan/blue outer arms
    };

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(params.count * 3);
    const colors = new Float32Array(params.count * 3);

    const colorInside = new THREE.Color(params.insideColor);
    const colorMiddle = new THREE.Color(params.middleColor);
    const colorOutside = new THREE.Color(params.outsideColor);

    for (let i = 0; i < params.count; i++) {
      const i3 = i * 3;
      const radius = Math.pow(Math.random(), 1.5) * params.radius;
      const spinAngle = radius * params.spin;
      const branchAngle = ((i % params.branches) / params.branches) * Math.PI * 2;

      const randomX =
        Math.pow(Math.random(), params.randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        params.randomness *
        radius;
      const randomY =
        Math.pow(Math.random(), params.randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        params.randomness *
        (radius * 0.35 + 0.6);
      const randomZ =
        Math.pow(Math.random(), params.randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        params.randomness *
        radius;

      positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      positions[i3 + 1] = randomY;
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

      const mixedColor = colorInside.clone();
      const ratio = radius / params.radius;
      if (ratio < 0.42) {
        mixedColor.lerp(colorMiddle, ratio / 0.42);
      } else {
        mixedColor.copy(colorMiddle).lerp(colorOutside, (ratio - 0.42) / 0.58);
      }

      // Occasional bright white-gold supergiants
      if (Math.random() < 0.04) {
        mixedColor.set('#ffffff');
      }

      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: params.size,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      map: starTexture,
      transparent: true,
      opacity: 0.92
    });

    const galaxyPoints = new THREE.Points(geometry, material);
    galaxyGroup.add(galaxyPoints);

    // 2. Glowing Galactic Core Nebula Halo
    const coreGeo = new THREE.BufferGeometry();
    const coreCount = 1800;
    const corePos = new Float32Array(coreCount * 3);
    const coreCol = new Float32Array(coreCount * 3);
    for (let i = 0; i < coreCount; i++) {
      const i3 = i * 3;
      const r = Math.pow(Math.random(), 2.4) * 5.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI * 0.55;
      corePos[i3] = r * Math.cos(theta) * Math.cos(phi);
      corePos[i3 + 1] = r * Math.sin(phi) * 0.55;
      corePos[i3 + 2] = r * Math.sin(theta) * Math.cos(phi);

      const c = new THREE.Color(Math.random() > 0.35 ? '#fbbf24' : '#e879f9');
      coreCol[i3] = c.r;
      coreCol[i3 + 1] = c.g;
      coreCol[i3 + 2] = c.b;
    }
    coreGeo.setAttribute('position', new THREE.BufferAttribute(corePos, 3));
    coreGeo.setAttribute('color', new THREE.BufferAttribute(coreCol, 3));
    const coreMat = new THREE.PointsMaterial({
      size: 0.42,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      map: starTexture,
      transparent: true,
      opacity: 0.78
    });
    const corePoints = new THREE.Points(coreGeo, coreMat);
    galaxyGroup.add(corePoints);

    // 3. Deep Space Background Starfield Sphere
    const bgCount = 4500;
    const bgGeo = new THREE.BufferGeometry();
    const bgPos = new Float32Array(bgCount * 3);
    for (let i = 0; i < bgCount; i++) {
      const i3 = i * 3;
      bgPos[i3] = (Math.random() - 0.5) * 140;
      bgPos[i3 + 1] = (Math.random() - 0.5) * 140;
      bgPos[i3 + 2] = (Math.random() - 0.5) * 140;
    }
    bgGeo.setAttribute('position', new THREE.BufferAttribute(bgPos, 3));
    const bgMat = new THREE.PointsMaterial({
      size: 0.14,
      color: 0xe2e8f0,
      transparent: true,
      opacity: 0.55,
      map: starTexture,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const bgStars = new THREE.Points(bgGeo, bgMat);
    scene.add(bgStars);

    // Initial dramatic tilt of the Milky Way disc
    galaxyGroup.rotation.x = 0.42;
    galaxyGroup.rotation.z = -0.18;

    // Interactive Mouse & Touch Tracking
    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let scrollY = window.scrollY;

    const handleMouseMove = (e: MouseEvent) => {
      pointer.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      pointer.targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        pointer.targetX = (e.touches[0].clientX / window.innerWidth - 0.5) * 2;
        pointer.targetY = (e.touches[0].clientY / window.innerHeight - 0.5) * 2;
      }
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    let reqId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth damping toward mouse / finger coordinates
      pointer.x += (pointer.targetX - pointer.x) * 0.045;
      pointer.y += (pointer.targetY - pointer.y) * 0.045;

      const isWarp = warpRef.current;
      const spinSpeed = isWarp ? 0.45 : 0.055;

      galaxyPoints.rotation.y += 0.0012 * (isWarp ? 6 : 1);
      corePoints.rotation.y -= 0.002 * (isWarp ? 4 : 1);
      bgStars.rotation.y = elapsedTime * 0.008;

      // Tilt galaxy dynamically with mouse/touch + scroll depth
      const targetRotX = 0.44 + pointer.y * 0.28 + Math.min(scrollY * 0.00025, 0.35);
      const targetRotZ = -0.18 - pointer.x * 0.28;

      galaxyGroup.rotation.x += (targetRotX - galaxyGroup.rotation.x) * 0.06;
      galaxyGroup.rotation.z += (targetRotZ - galaxyGroup.rotation.z) * 0.06;

      // Camera parallax orbit based on active view and cursor
      const viewOffsetZ = viewRef.current === 'lore' ? 18.5 : viewRef.current === 'studio' ? 20.5 : 23.5;
      const targetCamX = pointer.x * 5.2;
      const targetCamY = 10.5 - pointer.y * 3.8 - Math.min(scrollY * 0.004, 5);
      const targetCamZ = viewOffsetZ - Math.min(scrollY * 0.003, 4);

      camera.position.x += (targetCamX - camera.position.x) * spinSpeed;
      camera.position.y += (targetCamY - camera.position.y) * spinSpeed;
      camera.position.z += (targetCamZ - camera.position.z) * spinSpeed;
      camera.lookAt(pointer.x * 1.2, -pointer.y * 0.8, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      geometry.dispose();
      material.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      bgGeo.dispose();
      bgMat.dispose();
      starTexture.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Three.js WebGL 3D Milky Way Canvas */}
      <div ref={mountRef} className="w-full h-full" />

      {/* Atmospheric Nebula Vignette & Luxury Depth Overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 25%, rgba(168, 85, 247, 0.08) 0%, rgba(245, 158, 11, 0.04) 35%, rgba(3, 3, 8, 0.72) 85%, rgba(3, 3, 8, 0.94) 100%)'
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:44px_44px] opacity-[0.025]" />
    </div>
  );
};
