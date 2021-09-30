import Link from 'next/link'
import { INavLinkProps } from '../util/types'
export default function NavLink(props:INavLinkProps): JSX.Element {
    return (
        <Link href={props.path}>
            <a className={props.styles}>{props.title}</a>
        </Link>
    )
}