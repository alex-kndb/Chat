import { useState, useCallback } from "react";

export const useInput = (defaultValue = '') => {
    const [value, setValue] = useState(defaultValue);

    const handleChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const resetValue = () => {
        setValue('');
    }

    return {
        value,
        handleChange,
        resetValue
    }

};