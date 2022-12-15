"use strict";
// in windows we type tsc.cmd insted of tsc
// import {Promise} from 'es6-promis'
const btn = document.getElementById('btn');
const numb1Element = document.getElementById('num1');
const numb2Element = document.getElementById('num2');
// function add(n1: number | string, n2: number | string){
function add(n1, n2) {
    if (typeof n1 === 'string' && typeof n2 === 'string') {
        return n1 + ' ' + n2;
    }
    else if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2;
    }
}
// const arrstr:string[]=[]
const arrstr = []; // generic type
const arrnum = [];
// function printResult(result:{val:number}){
function printResult(resultObj) {
    console.log(resultObj.val);
}
btn.onclick = () => {
    const n1 = numb1Element.value;
    const n2 = numb2Element.value;
    const strType = add(n1, n2);
    arrstr.push(strType);
    const numType = add(+n1, +n2);
    arrnum.push(numType);
    printResult({ val: numType });
};
// promis is generuc type
// now we no need to call tcs.cmd aap.js we have to call tcs.cmd
const mypromis = new Promise((res, rej) => {
    setTimeout(() => {
        res('it is a promis');
    }, 1000);
});
mypromis.then(res => console.log(res));
