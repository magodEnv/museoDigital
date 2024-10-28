importScripts('/draco/draco_decoder.js');

self.onmessage = async function (e) {
  const { arrayBuffer } = e.data;
  const decoderModule = await draco3d.createDecoderModule({
    wasmBinaryFile: '/draco/draco_decoder.wasm'
  });
  const decoder = new decoderModule.Decoder();
  const buffer = new decoderModule.DecoderBuffer();
  buffer.Init(new Int8Array(arrayBuffer), arrayBuffer.byteLength);

  const geometryType = decoder.GetEncodedGeometryType(buffer);
  let dracoGeometry;
  if (geometryType === decoderModule.TRIANGULAR_MESH) {
    dracoGeometry = new decoderModule.Mesh();
    decoder.DecodeBufferToMesh(buffer, dracoGeometry);
  } else {
    self.postMessage({ error: 'Unknown geometry type.' });
    return;
  }

  const positions = new Float32Array(dracoGeometry.num_points() * 3);
  const indices = new Uint32Array(dracoGeometry.num_faces() * 3);

  for (let i = 0; i < dracoGeometry.num_points(); i++) {
    positions[i * 3] = dracoGeometry.GetAttributeByUniqueId(0).GetValue(i * 3);
    positions[i * 3 + 1] = dracoGeometry.GetAttributeByUniqueId(0).GetValue(i * 3 + 1);
    positions[i * 3 + 2] = dracoGeometry.GetAttributeByUniqueId(0).GetValue(i * 3 + 2);
  }

  for (let i = 0; i < dracoGeometry.num_faces(); i++) {
    indices[i * 3] = dracoGeometry.GetFace(i).GetValue(0);
    indices[i * 3 + 1] = dracoGeometry.GetFace(i).GetValue(1);
    indices[i * 3 + 2] = dracoGeometry.GetFace(i).GetValue(2);
  }

  self.postMessage({ positions, indices });

  decoderModule.destroy(dracoGeometry);
  decoderModule.destroy(buffer);
  decoderModule.destroy(decoder);
};