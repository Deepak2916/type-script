// in windows we type tsc.cmd insted of tsc
// import {Promise} from 'es6-promis'
const btn=document.getElementById('btn') as HTMLButtonElement;
const numb1Element=document.getElementById('num1') as HTMLInputElement;
const numb2Element=document.getElementById('num2') as HTMLInputElement;

type NumOrStr=number | string;
// type result={val:number} //using type

interface result{  // using interface
    val:number
}

// function add(n1: number | string, n2: number | string){
    function add(n1: NumOrStr, n2: NumOrStr){
   
    if(typeof n1==='string' && typeof n2==='string'){
        return n1+' '+n2
    }
    else if(typeof n1==='number'&& typeof n2==='number'){
        return n1+n2
    }
}
// const arrstr:string[]=[]
const arrstr:Array<string>=[] // generic type
const arrnum:number[]=[]
// function printResult(result:{val:number}){
    function printResult(resultObj:result){
    console.log(resultObj.val)
}

btn.onclick=()=>{
    const n1=numb1Element.value
    const n2=numb2Element.value
  const strType= add(n1,n2)
  arrstr.push(strType as string)
  const numType=add(+n1,+n2)
  arrnum.push(numType as number)
  printResult({val:numType as number})
}

// promis is generuc type
// now we no need to call tcs.cmd aap.js we have to call tcs.cmd
const mypromis=new Promise<string>((res,rej)=>{
    setTimeout(()=>{
        res('it is a promis')
    },1000);
})

mypromis.then(res=>console.log(res))
