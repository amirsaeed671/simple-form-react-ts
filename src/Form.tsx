import React from "react";

type SubmitEvent = ((event: React.FormEvent<HTMLFormElement>) => void) | undefined;

const Form: React.FC<any> = () => {
    const handleSubmit: SubmitEvent = (event) => {

    }
    return (
        <form onSubmit={handleSubmit}> 
            <label htmlFor="name">
                <input type="text" name="name" placeholder="Enter your Name" />
            </label>
            <label htmlFor="email">
                <input type="email" name="email" placeholder="Enter your Email" />
            </label>
        </form>
    )
}

export default Form;