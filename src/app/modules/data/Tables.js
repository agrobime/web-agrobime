import React, { useState, useEffect } from "react";
import TableForm from "./TableForm"
import firebaseDb from "../../firebase";
import { KTSVG, toAbsoluteUrl } from '../../../_metronic/helpers'


const TablesFB = () => {

    var [contactObjects, setContactObjects] = useState({})
    var [currentId, setCurrentId] = useState('')

    useEffect(() => {
        firebaseDb.child('measurements').on('value', snapshot => {
            if (snapshot.val() != null)
                setContactObjects({
                    ...snapshot.val()
                })
            else
                setContactObjects({})

        })
    }, [])// similar to componentDidMount

    const addOrEdit = obj => {
        if (currentId == '')
            firebaseDb.child('measurements').push(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                }
            )
        else
            firebaseDb.child(`measurements/${currentId}`).set(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                }
            )
    }

    const onDelete = key => {
        if (window.confirm('Are you sure to delete this record?')) {
            debugger
            firebaseDb.child(`measurements/${key}`).remove(
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                }
            )
        }
    }

    return (
        <>
            <div className="row">
                <div className="col-md-12 py-5">
                    <TableForm {...({ addOrEdit, currentId, contactObjects })} />
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <table className="table table-bordered">
                        <thead className="table-dark fw-bold">
                            <tr>
                                <th className='px-5'>Fecha</th>
                                <th className='px-5'>Temperatura °C</th>
                                <th className='px-5'>Humedad %</th>
                                <th className='px-5'>Ubicación</th>
                                <th className='px-5'>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(contactObjects).map(id => {
                                    return <tr key={id}>
                                        <td className='px-5'>{contactObjects[id].date}</td>
                                        <td className='px-5'>{contactObjects[id].temperature}</td>
                                        <td className='px-5'>{contactObjects[id].humidity}</td>
                                        <td className='px-5'>{contactObjects[id].address}</td>
                                        <td className='px-5'>
                                            <a className="btn text-primary" onClick={() => { setCurrentId(id) }}>
                                                <a href='/dashboard' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                                                    <KTSVG path='/media/icons/icar/edit.svg' className='svg-icon-3' />
                                                </a>
                                            </a>
                                            <a className="btn text-danger" onClick={() => { onDelete(id) }}>
                                                <a href='/dashboard' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                                                    <KTSVG path='/media/icons/icar/delete.svg' className='svg-icon-3' />
                                                </a>
                                            </a>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </>
    );
}

export default TablesFB;