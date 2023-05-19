import Value from './Value';

export default function String({user, com, userVic, comVic}){
    return(
    <>
        <div className='victory'>
            <Value
                value = {userVic}
            >컴퓨터가 이긴 횟수 : </Value>
            <Value
                value = {comVic}
            >사용자가 이긴 횟수 : </Value>
        </div>
        <div>
            <Value
                value = {com.join(' / ')}
            >컴퓨터 : </Value>
            <Value
                value = {user.join(' / ')}
            >사용자 : </Value>
        </div>
    </>
    );
}