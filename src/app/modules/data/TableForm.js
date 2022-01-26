import React, { useState, useEffect } from "react";
import { KTSVG, toAbsoluteUrl } from '../../../_metronic/helpers'

const TableForm = (props) => {
    const initialFieldValues = {
        date: '',
        temperature: '',
        humidity: '',
        address: ''
    }

    var [values, setValues] = useState(initialFieldValues)

    useEffect(() => {
        if (props.currentId == '')
            setValues({
                ...initialFieldValues
            })
        else
            setValues({
                ...props.contactObjects[props.currentId]
            })
    }, [props.currentId, props.contactObjects])

    const handleInputChange = e => {
        var { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    const handleFormSubmit = e => {
        e.preventDefault();
        // setValues({
        //     date: '2022', 
        //     temperature: '25', 
        //     humidity: '75', 
        //     address: 'espinaca'})
        props.addOrEdit(values)
    }

    return (
        <form autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="col-md-3">
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <a href='/dashboard' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                                    <KTSVG path='/media/icons/icar/date.svg' className='svg-icon-3' />
                                </a>
                            </div>
                        </div>
                        <input className="form-control" placeholder="Fecha de registro" name="date"
                            value={values.date}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <a href='/dashboard' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                                    <KTSVG path='/media/icons/icar/temperature.svg' className='svg-icon-3' />
                                </a>
                            </div>
                        </div>
                        <input className="form-control" placeholder="Temp..." name="temperature"
                            value={values.temperature}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <a href='/dashboard' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                                    <KTSVG path='/media/icons/icar/humidity.svg' className='svg-icon-3' />
                                </a>
                            </div>
                        </div>
                        <input className="form-control" placeholder="Hume..." name="humidity"
                            value={values.humidity}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <a href='/dashboard' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                                    <KTSVG path='/media/icons/icar/address.svg' className='svg-icon-3' />
                                </a>
                            </div>
                        </div>
                        <input className="form-control" placeholder="Ubicación" name="address"
                            value={values.address}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="form-group">
                        <input type="submit" value={props.currentId == '' ? "Registrar" : "Actualizar"} className="btn btn-primary btn-block" />
                    </div>
                </div>

            </div>
        </form >
    );
}

export default TableForm;