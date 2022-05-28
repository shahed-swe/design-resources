import { useState } from "react";


const useArray = (defaultValue) => {
    const [datas, setDatas] = useState(defaultValue)

    const push = (element) => {
        setDatas(value => [...value, element])
    }

    const filter = (callback) => {
        setDatas(value => value.filter(callback))
    }

    const update = (index, newElement) => {
        setDatas(value => [
            ...value.slice(0, index),
            newElement,
            ...value.slice(index + 1, value.length)
        ])
    }

    const remove  = (index) => {
        setDatas(value => [...value.slice(0, index), ...value.slice(index + 1, value.length)])
    }

    const clear = () => {
        setDatas([])
    }

    return {datas, set: setDatas, push, filter, update, remove, clear}
}

export default useArray