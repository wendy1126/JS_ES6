var a = 10;
var b = 20;
var c = 30;
export var d = 40;
// export는 변수/함수 선언 왼쪽에 미리 선언해도 됨

export default a; 
// export default 내보낼거
// export default는 파일당 1회 사용 가능
// export default와 export 동시 사용 가능

export {b,c};
// 여러개 export 쓰고 싶으면, export {변수명}; 으로 작성해야 함
