import { IButtonProps } from "../../util/types";
import {LoadingOutlined} from '@ant-design/icons'

export default function Button(props:IButtonProps): JSX.Element {
    return (
        
        <button className={`text-white rounded-full bg-red-500 py-2 px-10 hover:opacity-50 text-sm flex gap-2 items-center justify-center ${props.loading && 'opacity-50'}`}> {props.loading && <LoadingOutlined/> } {!props.loading ? props.title : props.loadingTitle}</button>
    )
}