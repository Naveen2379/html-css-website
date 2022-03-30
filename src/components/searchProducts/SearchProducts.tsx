import * as React from "react";
import { useState } from "react";
import { Button, Form, FormControl, FormGroup, FormLabel, FormText } from "react-bootstrap";
import './SearchProducts.scss';


interface SearchProps {
    placeHolder: string;
}

const SearchProducts = ({ placeHolder }: SearchProps) => {
    const [input, saveInput] = useState('');
    const [formData, setFormData] = useState({});

    const handleInputChange = (event: any) => {
        saveInput(event?.target.value);
    }


    const searchProds = (event: any) => {
        event?.preventDefault();
        // setFormData({});
    }
    return (
        <>
            <Form onSubmit={searchProds} className="form-search-prods">
                <FormGroup className="mb-3 search-group" controlId="formBasicEmail">
                    <FormControl type="text" placeholder={placeHolder} onChange={handleInputChange} />
                    <Button className="btn-search" onClick={searchProds}>
                        <svg width="20" height="20" viewBox="0 0 17 18" className="" xmlns="http://www.w3.org/2000/svg">
                            <g fill="#2874F1" fillRule="evenodd">
                                <path className="_34RNph" d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"></path>
                                <path className="_34RNph" d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"></path></g>
                        </svg>
                    </Button>
                </FormGroup>
            </Form>
        </>
    )
}

export default SearchProducts;