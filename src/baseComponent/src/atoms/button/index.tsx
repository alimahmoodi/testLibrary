
interface BaseButtonProps {
    text:string
}

const BaseButton = ({text}:BaseButtonProps)=>{
    return (<button>{text}</button>)
}

export {BaseButton}