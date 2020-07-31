import React from "react";

function FormField({ label, type, name, value, onChange }) {
    const field = type == 'textarea'  ? <textarea type={type} name={name} value={value} onChange={onChange} /> : <input type={type} name={name} value={value} onChange={onChange} />;
    return (
        <div>
            <label>
                {label}: 
                
                    {field}
            </label>
        </div>
    );
}

export default FormField;