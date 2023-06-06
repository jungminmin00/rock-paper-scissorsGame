import { useState } from "react";


function VicFunc({comAn, userAn, score, setScore}){
    let str = '';
    let scoreFin = [];
    
    // 승패
    function vic(){
        if(userAn === '바위'){
            if(comAn === '보자기'){
                str = '패';
                // console.log('패');
            }else if(comAn === '가위'){
                str = '승';
            }else{
                str = '무';
            }
        }else if(userAn === '보자기'){
            if(comAn === '바위'){
                str = '패';
                // console.log('패');
            }else if(comAn === '가위'){
                // score += 1;
                str = '승';
            }else{
                str = '무';
            }
        }else if(userAn === '가위'){
            if(comAn === '바위'){
                str = '패';
                // console.log('패');
            }else if(comAn === '보자기'){
                // score += 1;
                str = '승';
            }else{
                str = '무';
            }
        }
        return str; 
    }
    const re = vic()    /* str의 값 */
    // score.push(re)
    // setScore([...score, re]); - loop error
    scoreFin.push(re)
    // re ==='승' ? setScore([...score, re]) : console.log(re); - loop error

    console.log('score : ' + score)
    console.log('scoreFin : ' + scoreFin)
    // console.log(score.length)
    // const leng = score.length;
    // console.log(leng)
    return(
        <>
            <p>
                {/* 사용자가 이긴 횟수 : {leng} */}
            </p>
        </>
    );
}

export default function String({user, com}){
    const comAn = com[com.length - 1];
    const userAn = user[user.length - 1];

    // const score = [];
    const [score, setScore] = useState([]);
    return(
    <>
        <div className='victory'>
            <VicFunc 
                    comAn = {comAn}
                    userAn = {userAn}
                    score ={score}
                    setScore ={setScore}
            />
        </div>
        <div>
            <p>
                컴퓨터 : {com.join(' / ')}
            </p>
            <p>사용자 : {user.join(' / ')}</p>
        </div>
    </>
    );
}