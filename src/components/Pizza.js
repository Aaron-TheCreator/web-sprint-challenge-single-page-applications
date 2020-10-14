import Axios from "axios";
import React, { useState, useEffect } from "react";
import * as yup from "yup";



function Pizza() {
    // manage state for form inputs
    const [formState, setFormState] = useState({
        name: "",
        size: "",
        pepperoni: "",
        sausage: "",
        bellpepper: "",
        olive: "",
        instructions: ""
    })

    // server error

    // control submit option due to error
    const [buttonDisabled, setButtonDisabled] = useState(true);

    // manage state for error
    const [errors, setErrors] = useState({
        name: "",
        size: "",
        pepperoni: "",
        sausage: "",
        bellpepper: "",
        olive: "",
        instructions: ""
    });

    // temp state to display responses
    const [post, setPost] = useState([]);

    // functions

    // inline validation; key:value;
    const validateChange = (e) => {
        yup
            .reach(formSchema, e.target.name)
            .validate(
                e.target.type === "checkbox" ? e.target.checked : e.target.value
            )
            .then(valid => {
                // the input is passing
                setErrors({...errors, [e.target.name]: ""})
            })
            .catch(err => {
                // the input is breaking formSchema
                setErrors({...errors, [e.target.name]: err.errors[0] });
            })

    };
    // (https://reqres.in/) API
    // onSubmit function
    const formSubmit = (e) => {
        e.preventDefault();

        Axios.post("https://reqres.in/api/users", formState)
        .then( (res) => {
            console.log(res)
            setPost(res.data)
            setFormState({
                name: "",
                size: "",
                pepperoni: "",
                sausage: "",
                bellpepper: "",
                olive: "",
                instructions: "" 
            })
        })
    };

    // onChange
    const inputChange = (e) => {
        e.persist();
        const newFormState = {
            ...formState,
            [e.target.name]:
                e.target.type === "checkbox" ? e.target.checked : e.target.value
        };

        validateChange(e);
        setFormState(newFormState);
    };

    // schema

    const formSchema = yup.object().shape({
        name: yup.string().min(2).required("Name is required"),
        size: yup.string().oneOf(["Small", "Medium", "Large", "Extra-Large"]).required("Pick a size"),
        pepperoni: yup.boolean().oneOf([true]),
        sausage: yup.boolean().oneOf([true]),
        bellpepper: yup.boolean().oneOf([true]),
        olive: yup.boolean().oneOf([true]),
        instructions: yup.string()
    });

    // formSchema = formSchema.test(
    //     'checkboxTest',
    //     null,
    //     (obj) => {
    //         if ( obj.pepperoni || obj.sausage || obj.bellpepper || obj.olive) {
    //             return true;
    //         }

    //         return new yup.ValidationError(
    //             'Choose a topping',
    //             null,
    //             'fieldName'
    //         )
    //     }
    // )

    useEffect( () => {
        formSchema.isValid(formState).then( (valid) => {
            console.log("is my form valid?", valid);
            setButtonDisabled(!valid)
        });
    }, [formState]);

    console.log("formState", formState);
    return (
        <div className="form-cont">
            <form 
                onSubmit={formSubmit}
                className="pizza-form">
                <label htmlFor="name">
                     My Name is<br/>
                    <input 
                        id="name"
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={inputChange}
                        data-cy="name"
                    />
                    {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
                </label>

                <label htmlFor="size">
                    <br/>Make it a 
                    <select
                        id="size"
                        name="size"
                        value={formState.size}
                        onChange={inputChange}
                        data-cy="size"
                        
                    >
                        <option value="">--Choose Size--</option>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                        <option value="Extra-Large">Extra-Large</option>

                    </select>
                    {errors.size.length > 0 ? <p className="error">{errors.size}</p> : null}
                </label>
                <div className="toppings">
                    <h4>Toppings:</h4> 
                
                    <label htmlFor="pepperoni">
                        
                        <input 
                            type="checkbox"
                            id="pepperoni"
                            name="pepperoni"
                            checked={formState.pepperoni}
                            onChange={inputChange}
                            data-cy="pepperoni"
                        />
                        Pepperoni
                        {errors.pepperoni.length > 0 ? <p className="error">{errors.pepperoni}</p> : null}
                    </label>
                    <label htmlFor="sausage">
                        
                        <input 
                            type="checkbox"
                            id="sausage"
                            name="sausage"
                            checked={formState.sausage}
                            onChange={inputChange}
                            data-cy="sausage"
                        />
                        Sausage
                        {errors.sausage.length > 0 ? <p className="error">{errors.sausage}</p> : null}
                    </label>
                    <label htmlFor="bellpepper">
                        
                        <input 
                            type="checkbox"
                            id="bellpepper"
                            name="bellpepper"
                            checked={formState.bellpepper}
                            onChange={inputChange}
                            data-cy="bellpepper"
                        />
                        Bell Pepper
                        {errors.bellpepper.length > 0 ? <p className="error">{errors.bellpepper}</p> : null}
                    </label>
                    <label htmlFor="olive">
                        
                        <input 
                            type="checkbox"
                            id="olive"
                            name="olive"
                            checked={formState.olive}
                            onChange={inputChange}
                            data-cy="olive"
                        />
                        Olives
                        {errors.olive.length > 0 ? <p className="error">{errors.olive}</p> : null}
                    </label>
                </div>
                    {/* ends toppings div  */}

                <label htmlFor="instructions">
                    <br/>Special Instructions<br/>
                    <textarea
                        id="instructions"
                        name="instructions"
                        value={formState.instructions}
                        onChange={inputChange}
                        className="instructions"
                        data-cy="instructions"
                    />
                </label>

                {/* submit button */}
                <button 
                    type="submit"
                    className="button"
                    disabled={buttonDisabled}
                    data-cy="submit"
                    >
                    Print My Pizza
                    
                </button>
                <pre>{JSON.stringify(post, null, 2)}</pre>
            </form>
            {/* ends pizza-form */}
        </div>
        // form container
    )

}

export default Pizza;
