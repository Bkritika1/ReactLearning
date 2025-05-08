export default function Button({classGiven,label, onSmash}){
    return(
        <button onClick={onSmash} className={classGiven}>
            {label}
        </button>
    )
}