import "./style.css";
import * as THREE from "three";
import net from "vanta/dist/vanta.net.min";

net({
  el: "#vanta-net",
  mouseControls: true,
  touchControls: true,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x6bd96b,
  backgroundColor: 0xebebeb,
  points: 7.0,
  maxDistance: 24.0,
  spacing: 17.0,
  THREE,
});
