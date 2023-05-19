import BtnClick from './BtnClick.js';



export default function Btn({com,random, user, userVic, comVic, setUser }){
    /* 바위 클릭 */
    function rockClick(userVic, comVic){
        setUser([...user, "바위"]);
        random();
        const comRock = com[com.length - 1];

        if(comRock === '바위'){
            userVic += 0;
            comVic += 0;
        }else if(comRock === '가위'){
            // console.log('이김')
            userVic++;
        }else if(comRock === '보자기'){
            // console.log('짐')
            comVic++;
        }
    }
    /* 가위 클릭 */
    function scissorsClick(userVic, comVic){
        setUser([...user, "가위"]);
        random();
        const comRock = com[com.length - 1];

        if(comRock === '바위'){
            // console.log('짐')
            comVic++;
        }else if(comRock === '가위'){
            userVic += 0;
            comVic += 0;
        }else if(comRock === '보자기'){
            // console.log('이김')
            userVic++;
        }

    }
    /* 보자기 클릭 */
    function paperClick({userVic,comVic}){
        setUser([...user, "보자기"]);
        random();
        const comRock = com[com.length - 1];

        if(comRock === '바위'){
            // console.log('이김')
            userVic++;
        }else if(comRock === '가위'){
            // console.log('짐')
            comVic++;
        }else if(comRock === '보자기'){
            userVic += 0;
            comVic += 0;
        }

    }
    return(
        <div className='btn'>
            <BtnClick
                onClick = {rockClick}
            >바위</BtnClick>
            <BtnClick
                onClick = {scissorsClick}
            >가위</BtnClick>
            <BtnClick
                onClick = {paperClick}
            >보자기</BtnClick>
            
        
        </div>
    );
}