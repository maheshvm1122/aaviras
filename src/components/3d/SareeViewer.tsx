'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function SareeCloth({color}:{color:string}){
 const group=useRef<THREE.Group>(null);
 const body=useMemo(()=>{const g=new THREE.PlaneGeometry(5.2,7.2,64,92);const p=g.attributes.position;for(let i=0;i<p.count;i++){const x=p.getX(i),y=p.getY(i),t=(y+3.6)/7.2;const pleat=Math.sin(x*7.2)*0.16*(0.25+0.75*(1-t));const fall=Math.sin(y*1.55+x*0.7)*0.07;const curve=(x*x)*0.028;p.setZ(i,pleat+fall+curve);p.setX(i,x+Math.sin(y*1.15)*0.035)}g.computeVertexNormals();return g},[]);
 const border=useMemo(()=>{const g=new THREE.PlaneGeometry(5.2,.72,64,8);const p=g.attributes.position;for(let i=0;i<p.count;i++){const x=p.getX(i);p.setZ(i,Math.sin(x*7)*.12+x*x*.028)}g.computeVertexNormals();return g},[]);
 const pallu=useMemo(()=>{const g=new THREE.PlaneGeometry(2.25,5.1,32,58);const p=g.attributes.position;for(let i=0;i<p.count;i++){const x=p.getX(i),y=p.getY(i);p.setZ(i,Math.sin(y*1.7)*.08+Math.sin(x*5)*.05)}g.computeVertexNormals();return g},[]);
 useFrame((_,d)=>{if(group.current)group.current.rotation.y+=d*.035});
 return <group ref={group} rotation={[0,0,.02]}><mesh geometry={body}><meshPhysicalMaterial color={color} roughness={.3} metalness={.06} sheen={.45} sheenRoughness={.25} side={THREE.DoubleSide}/></mesh><mesh geometry={pallu} position={[2.02,.25,.08]} rotation={[0,.02,-.08]}><meshPhysicalMaterial color={color} roughness={.28} sheen={.5} side={THREE.DoubleSide}/></mesh><mesh geometry={border} position={[0,-3.25,.12]}><meshPhysicalMaterial color="#c39a54" roughness={.22} metalness={.52} sheen={.55} side={THREE.DoubleSide}/></mesh><mesh geometry={border} position={[0,3.25,.12]} rotation={[Math.PI,0,0]}><meshPhysicalMaterial color="#c39a54" roughness={.22} metalness={.52} sheen={.55} side={THREE.DoubleSide}/></mesh></group>
}
export default function SareeViewer({color='#8e1d32'}:{color?:string}){return <div className="saree-canvas"><Canvas camera={{position:[0,.15,8.6],fov:38}} dpr={[1,1.6]} gl={{antialias:true}}><ambientLight intensity={1.1}/><directionalLight position={[4,6,5]} intensity={3}/><directionalLight position={[-4,2,3]} intensity={1.4}/><Environment preset="studio"/><SareeCloth color={color}/><OrbitControls enablePan enableZoom autoRotate autoRotateSpeed={.45} minDistance={5.4} maxDistance={11} minPolarAngle={Math.PI*.32} maxPolarAngle={Math.PI*.68}/></Canvas><div className="viewer-hud"><span>DRAG TO ROTATE</span><span>SCROLL TO ZOOM</span><span>PAN TO INSPECT</span></div></div>}
