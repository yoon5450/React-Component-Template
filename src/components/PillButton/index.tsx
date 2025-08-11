import S from './index.module.css';

interface Props{
  onClick:()=>void;
  text?:string;
  disabled?:boolean
}


function PillButton({onClick, text='버튼', disabled=false}:Props ) {
  return (
    <button type='button' className={S.pillBtn} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  )
}

export default PillButton