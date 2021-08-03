import './style.scss'
import {
    RefObject,
    ReactElement,
    ReactChild,
    useState,
    useMemo,
    isValidElement,
    cloneElement
} from "react";
import useClickOutside from "@utils/useClickOutside";
import classnames from "classnames";

type Props = {
    children?: ReactChild[];
    position?: string,
    width?: string,
};

type ChildCollection = {
    actionBtn: ReactElement | null,
    content: ReactElement | null,
}

const Popover = ({children, position = 'right-top', width = '300px'}: Props) => {
    const [popoverVisibility, setPopoverVisibility] = useState(false)

    const popoverRef: RefObject<HTMLDivElement> = useClickOutside(() => setPopoverVisibility(false));

    const slots = useMemo(() => {
        // Подготовка структуры коллекции
        const collection: ChildCollection = {
            actionBtn: null,
            content: null,
        };

        if (Array.isArray(children)) {
            children.forEach((child) => {
                // Проверяем, что был передан валидный элемент
                if (isValidElement(child)) {
                    const {datatype} = child.props
                    if (datatype === 'action') {
                        collection.actionBtn = child;
                    } else {
                        collection.content = child;
                    }
                }
            })
        }

        return collection;
    }, [children]);

    return (
        <div ref={popoverRef} className="popover">
            <div onClick={() => setPopoverVisibility(!popoverVisibility)}>
                {
                    //TODO может можно как-то обойти клонирование, чтобы добавить еще один css класс в child? HOC?
                    slots.actionBtn && cloneElement(
                        slots.actionBtn,
                        {
                            className: classnames(slots.actionBtn.props.className, {active: popoverVisibility})
                        }
                    )
                }
            </div>
            {popoverVisibility && slots.content &&
            <div style={{width}} className={classnames('content', position)}>
                {
                    //TODO может можно как-то обойти клонирование, чтобы добавить проброс функции для закрытия popover? HOC?
                    //может быть можно сделать лучше, чтобы не пробрасывать функцию в рандомный компонент в виде св-ва
                    slots.content && cloneElement(
                        slots.content,
                        {
                            //вызвать в child, чтобы закрыть popover
                            popoverClose: () => setPopoverVisibility(false)
                        }
                    )
                }
            </div>}
        </div>
    )
}

export default Popover