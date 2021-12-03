const a = 'b'; // const a2 = a; 단순히 다른 변수에 대입만해도 복사
const c = ['d', true, 1]; // const c2 = c.slice(); 단순히 다른 변수에 대입만해도 복사
const e = { g: 'h' }; // const e2 = {...e} 내부에 객체 없으면 ...으로
const i = [{ j: 'k' }, { l: 'm' }];
const i2 = JSON.parse(JSON.stringify(i));
// 내부에 객체있으면 JSON.parse(JSON.stringify(객체))로 깊은 복사
const n = { o: { p: 'q' } };
const n2 = JSON.parse(JSON.stringify(n));
// 내부에 객체있으면 JSON.parse(JSON.stringify(객체))로 깊은 복사
