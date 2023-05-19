export default function BtnClick({onClick, children}){
    return(
        <button 
            onClick={onClick}
        >
            {children}
        </button>
    );
}