import { Form, FormGroup } from 'reactstrap'
import '../../styles/find-car-form.css'
import React from 'react'

const FindCarForm = () => {
    return <Form className="d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className='form__group'>
            <input type="text" placeholder='Form Adress' />

        </FormGroup>
        <FormGroup className='form__group'>
            <input type="text" placeholder='Form Adress' />

        </FormGroup>
        <FormGroup className='form__group'>
            <input type="text" placeholder='To Adress' />

        </FormGroup>
        <FormGroup className='form__group'>
            <input type="date" placeholder='Journey Date' />

        </FormGroup>
        <FormGroup className='form__group'>
            <input className='journey__time' type="time" placeholder='Journey Time' />

        </FormGroup>
        <FormGroup className='select__group'>
            <select>
                <option value="ac">Ac Car</option>
                <option value="non-ac">Non-Ac Car</option>
            </select>
        </FormGroup>
        <FormGroup className='form__group'>
            <button className="btn find__car-btn">Find Car</button>

        </FormGroup>

    </Form>
}

export default FindCarForm
