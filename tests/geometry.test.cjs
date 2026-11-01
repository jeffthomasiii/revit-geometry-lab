const assert = require('node:assert/strict');
const { solve } = require('../geometry.js');
function near(actual, expected) {
  assert.ok(Math.abs(actual - expected) <= 1e-8 * Math.max(1, Math.abs(expected)), `${actual} != ${expected}`);
}
const triangle = { a: 3, b: 4, c: 5, A: 36.86989764584402, B: 53.13010235415598 };
for (const pair of ['a,b','a,c','b,c','a,A','a,B','b,A','b,B','c,A','c,B']) {
  const values = Object.fromEntries(pair.split(',').map(k => [k, triangle[k]]));
  const {r,f} = solve(pair, values, 'triangle');
  for (const key in triangle) near(r[key], triangle[key]);
  assert.ok(Object.keys(f).length >= 3);
}
const circle = {R:5,C:6,S:1,T:73.73979529168804,L:6.435011087932844,D:10,P:10*Math.PI,Q:25*Math.PI};
for (const pair of ['R,C','R,T','R,S','R,L','C,S','C,T']) {
  const values = Object.fromEntries(pair.split(',').map(k => [k, circle[k]]));
  const {r} = solve(pair, values, 'circle');
  for (const key in circle) near(r[key], circle[key]);
}
for (const scale of [0.001, 1000000]) {
  const {r} = solve('a,b', {a:3*scale,b:4*scale}, 'triangle');
  near(r.c, 5*scale); near(r.A, triangle.A);
}
const {r:semicircle} = solve('R,C', {R:5,C:10}, 'circle');
near(semicircle.T,180); near(semicircle.S,5); near(semicircle.L,5*Math.PI);
assert.throws(()=>solve('a,c',{a:6,c:5},'triangle'));
assert.throws(()=>solve('a,A',{a:3,A:90},'triangle'));
assert.throws(()=>solve('R,C',{R:5,C:11},'circle'));
assert.throws(()=>solve('C,S',{C:6,S:4},'circle'));
assert.throws(()=>solve('R,L',{R:5,L:20},'circle'));
console.log('Passed: 15 known-value pairs, scale checks, semicircle boundary, and invalid-geometry cases.');
