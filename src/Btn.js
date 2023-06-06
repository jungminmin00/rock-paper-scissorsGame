export default function Btn({com,random, user, setUser}){
    /* 바위 클릭 */
    function rockClick(){
        setUser([...user, "바위"]);
        random();
    }
    /* 가위 클릭 */
    function scissorsClick(){
        setUser([...user, "가위"]);
        random();
    }
    /* 보자기 클릭 */
    function paperClick(){
        setUser([...user, "보자기"]);
        random();
    }
    return(
        <div className='btn'>
            <button
                onClick = {rockClick}
            >바위</button>
            <button
                onClick = {scissorsClick}
            >가위</button>
            <button
                onClick = {paperClick}
            >보자기</button>
            
        
        </div>
    );
}