import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import './input.css'

export default function Input({ name, ...rest }) {
    const inputRef = useRef(null)
    const { fieldName, registerField, defaultValue, error } = useField(name)


    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField])
    return (
        <div>
            <input ref={inputRef} defaultValue={defaultValue}{...rest} placeholder={'Digite seu ' + name}></input>
            {error && <span className="error">{error}</span>}
        </div >
    )
}