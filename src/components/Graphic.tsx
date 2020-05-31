/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { useState, useEffect } from 'react'
import ReactDOM from "react-dom";
import useInterval from '../hooks/useInterval'
import * as THREE from "three";

const Graphic = () => {

  useEffect(() => {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var container = document.getElementById('graphic');
    var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (container) {
      container.innerHTML = "";
      container.appendChild(renderer.domElement);
    }
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;
    var animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

  });

  return (
    <>
      <div id="graphic"></div>
    </>
  )
}

const style = css`

`

export default Graphic
