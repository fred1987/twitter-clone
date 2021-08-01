import { MouseEvent, RefObject, useEffect, useRef } from 'react';

const useClickOutside = (handler: () => void): RefObject<HTMLDivElement> => {
    const domNode = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const mouseDownFnc = (e: MouseEvent<Node>) => {
            if (domNode && domNode.current && !domNode.current.contains(e.target as Node)) {
                handler();
            }
        };
        document.addEventListener('mousedown', mouseDownFnc as unknown as EventListener);
        return () => document.removeEventListener('mousedown', mouseDownFnc as unknown as EventListener);
    });
    return domNode;
};

export default useClickOutside;
