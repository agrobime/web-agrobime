import React, { useState, useEffect } from "react";
import TableForm from "./TableForm"
import firebaseDb from "../../firebase";
import { KTSVG, toAbsoluteUrl } from '../../../_metronic/helpers'
const fs = require('fs')
const FileSaver = require('file-saver');


const TablesFB = () => {

    var [dataFb, setDataFb] = useState({})
    var [dataTotal, setDataTotal] = useState({})
    var [currentId, setCurrentId] = useState('')

    useEffect(() => {
        firebaseDb.child('measurements').on('value', snapshot => {
            if (snapshot.val() != null)
                setDataFb({
                    ...snapshot.val()
                })
            else
                setDataFb({})

        })

        firebaseDb.child('/').on('value', snapshot => {
            if (snapshot.val() != null)
                setDataTotal({
                    ...snapshot.val()
                })
            else
                setDataTotal({})

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

    const saveFile = () => {
        let textJson = '{'
        for (const [key1, value1] of Object.entries(dataTotal)) {
            textJson = textJson + `"${key1}" :{`
            for (const [key2, value2] of Object.entries(value1)) {
                textJson = textJson + `"${key2}" : "${value2}",`
            }
            textJson = textJson + '},'
        }
        textJson = textJson + '}'
        const blob = new Blob([textJson], { type: "text/plain;charset=utf-8" });
        FileSaver.saveAs(blob, `dataBackup.json`);
    }

    const onDelete = key => {
        // if (window.confirm('Estás seguro de eliminar?')) {
            // debugger
            firebaseDb.child(`measurements/${key}`).remove(
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                }
            )
        // }
    }

    // for(const [key, value] of Object.entries(dataFb)){
    //     // console.log(key)
    //     // onDelete(key)
    // }

    return (
        <>
            {/* <div className="row">
                <div className="col-md-12 py-5">
                    <TableForm {...({ addOrEdit, currentId, dataFb })} />
                </div>
            </div> */}

            <div className="row">
                <div className="col-md-12">
                    <h3 className="text-center py-5">Mediciones durante el día</h3>
                    <table className="table table-bordered">
                        <thead className="table-dark fw-bold">
                            <tr>
                                <th className='px-5'>Fecha</th>
                                <th className='px-5'>Temperatura °C</th>
                                <th className='px-5'>Humedad %</th>
                                <th className='px-5'>Cultivo</th>
                                <th className='px-5'>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(dataFb).map(id => {
                                    return <tr key={id}>
                                        <td className='px-5'>{dataFb[id].date}</td>
                                        <td className='px-5'>{dataFb[id].temperature}</td>
                                        <td className='px-5'>{dataFb[id].humidity}</td>
                                        <td className='px-5'>{dataFb[id].address}</td>
                                        <td className='px-5'>
                                            <a className="btn text-primary" onClick={() => { setCurrentId(id) }}>
                                                <a href='/dashboard' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                                                    <KTSVG path='/media/icons/icar/edit.svg' className='svg-icon-3' />
                                                </a>
                                            </a>
                                            <a className="btn text-danger" onClick={() => { onDelete(id); }}>
                                                <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
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