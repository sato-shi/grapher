precision mediump float;
varying vec3 rgb;
varying vec2 center;
varying vec2 resolution;
varying float radius;
void main() {
  vec4 color0 = vec4(0.0, 0.0, 0.0, 0.0);
  float x = gl_FragCoord.x;
  float y = resolution[1] - gl_FragCoord.y;
  float dx = center[0] - x;
  float dy = center[1] - y;
  float distance = sqrt(dx*dx + dy*dy);
  float diff = distance - radius;
  if ( diff < 0.0 ) 
    gl_FragColor = vec4(rgb, 1.0);
  else if ( diff >= 0.0 && diff <= 1.0 )
    gl_FragColor = vec4(rgb, 1.0 - diff);
  else 
    gl_FragColor = color0;
}
