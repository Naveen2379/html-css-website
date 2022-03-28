import * as React from "react";
import { Form, FormControl, FormGroup, FormLabel, FormText } from "react-bootstrap";

interface SearchProps {
    placeHolder: string;
}

const SearchProducts = ({ placeHolder }: SearchProps) => {
    return (
        <>
            <Form>
                <FormGroup className="mb-3" controlId="formBasicEmail">
                    <FormControl type="text" placeholder={placeHolder}/>
                </FormGroup>
            </Form>
        </>
    )
}

export default SearchProducts;