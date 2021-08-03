import './style.scss'

type ListElement = {
    label: string,
    icon?: JSX.Element,
    onClick?: () => any
}

type Props = {
    list: ListElement[]
    onSelected?: (data: any) => any
    popoverClose?: () => void
}

const ContextMenu = ({list, onSelected, popoverClose}: Props) => {
    const select = async (handler: undefined | (() => any)) => {
        const data = typeof handler === 'function' ? await handler() : null
        typeof onSelected === 'function' && onSelected(data)
        typeof popoverClose === 'function' && popoverClose()
    }

    return (
        <ul className="context-menu">
            {list.length > 0 && list.map((item, i) =>
                <li
                    key={i}
                    onClick={() => select(item.onClick)}
                >
                    {item.icon}<span className="text">{item.label}</span>
                </li>)
            }
        </ul>
    )
}

export default ContextMenu