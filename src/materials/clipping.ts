import { Matrix4, Vector3, BoxGeometry, Mesh, Quaternion, SphereGeometry, PlaneGeometry } from 'three';

export enum ClipMode {
  DISABLED = 0,
  CLIP_OUTSIDE = 1,
  CLIP_INSIDE = 2,
  HIGHLIGHT_INSIDE = 3,
  CLIP_OUTSIDE_PICK = 4,
}

export interface IClipBox {
  matrix: Matrix4;
}

export type ClipBox = {
  iClipBox: IClipBox,
  geometry: BoxGeometry,
  color: string,
  mesh: Mesh,
  position: Vector3,
  rotation: Quaternion,
  scale: Vector3,
}

export interface IClipSphere {
  matrix: Matrix4;
}

export type ClipSphere = {
  iClipSphere: IClipSphere,
  geometry: SphereGeometry,
  color: string,
  mesh: Mesh,
  position: Vector3,
  rotation: Quaternion,
  scale: Vector3,
}

export interface IClipPlane {
  matrix: Matrix4;
}

export type ClipPlane = {
  iClipPlane: IClipPlane,
  geometry: PlaneGeometry,
  color: string,
  mesh: Mesh,
  position: Vector3,
  rotation: Quaternion,
  scale: Vector3,
}
