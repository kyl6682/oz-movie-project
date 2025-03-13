import { useEffect, useRef } from "react"

const useScrollObserve = ({fetchData, hasMore}) => {
    const observeRef = useRef(null)

    useEffect(()=>{
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    fetchData();
                }
            },
            {threshold: 1.0}
        );
        if (observeRef.current) {
            observer.observe(observeRef.current)
        }
        return () => observer.disconnect();
    }, [hasMore, fetchData])
    return observeRef
}

export default useScrollObserve