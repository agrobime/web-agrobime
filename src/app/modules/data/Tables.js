import React, { useState, useEffect } from "react";
import firebaseDb from "../../firebase";
// import { KTSVG } from '../../../_metronic/helpers'
import DataTable from 'react-data-table-component';
// const FileSaver = require('file-saver');

const TablesFB = () => {

    var [dataFb, setDataFb] = useState({})
    // var [dataTotal, setDataTotal] = useState({})
    // var [currentId, setCurrentId] = useState('')
    const [data, setData] = useState([])

    useEffect(() => {
        firebaseDb.child('measurements').on('value', snapshot => {
            if (snapshot.val() != null) {
                setDataFb({
                    ...snapshot.val()
                })
            } else { setDataFb({}) }
        })

        /** TODA LA BASE DE DATOS */
        // firebaseDb.child('/').on('value', snapshot => {
        //     if (snapshot.val() != null) {
        //         setDataTotal({
        //             ...snapshot.val()
        //         })
        //     } else {
        //         setDataTotal({})
        //     }
        // })
    }, []) //si no hay nada escuchando se pone []

    /** FUNCIONES TEMPORALES */
    // const objAddOrDelete = {
    //     "-MuFcTgO5rtqqUAGUYVE": {
    //         "humS": "U43U159U47",
    //         "trama": "U25.50U68.00U74.42U1"
    //     },
    //     "-MuFceAxMi9lUv3PhoXs": {
    //         "humS": "U43U159U47",
    //         "trama": "U25.50U68.00U74.42U1"
    //     }
    // }

    // const addOrDeleteAll = () => {
    //     for (let i in objAddOrDelete) {
    //         addOrEdit(objAddOrDelete[i])
    //         // onDelete(i)
    //     }
    // }

    // const addOrEdit = obj => {
    //     console.log('Agregar o editar');
    //     if (currentId === '')
    //         firebaseDb.child('measurements').push(
    //             obj,
    //             err => {
    //                 if (err)
    //                     console.log(err)
    //                 else
    //                     setCurrentId('')
    //             }
    //         )
    //     else
    //         firebaseDb.child(`measurements/${currentId}`).set(
    //             obj,
    //             err => {
    //                 if (err)
    //                     console.log(err)
    //                 else
    //                     setCurrentId('')
    //             }
    //         )
    // }

    // const saveFile = () => {
    //     console.log('Guardar archivo de datos totales');
    //     let textJson = '{'
    //     for (const [key1, value1] of Object.entries(dataTotal)) {
    //         textJson = textJson + `"${key1}" :{`
    //         for (const [key2, value2] of Object.entries(value1)) {
    //             textJson = textJson + `"${key2}" : "${value2}",`
    //         }
    //         textJson = textJson + '},'
    //     }
    //     textJson = textJson + '}'
    //     const blob = new Blob([textJson], { type: "text/plain;charset=utf-8" });
    //     FileSaver.saveAs(blob, `dataBackup.json`);
    // }

    // const onDelete = key => {
    //     firebaseDb.child(`${key}`).remove(
    //         err => {
    //             if (err)
    //                 console.log(err)
    //             else
    //                 setCurrentId('')
    //         }
    //     )
    // }

    const showData = () => {
        // console.log("Llenar data");
        let data = []
        for (let i in dataFb) {
            const p2 = dataFb[i]['trama'].split('U')
            const p1 = dataFb[i]['humS'].split('U')
            data.push({
                param1: p1[1],
                param2: p1[2],
                param3: p2[1],
                param4: p2[2],
                param5: p2[3],
            })
            // onDelete(i)
        }
        setData(data)
    }

    const columns = [
        {
            name: 'PARAM1',
            selector: row => row.param1,
        },
        {
            name: 'PARAM2',
            selector: row => row.param2,
        },
        {
            name: 'PARAM3',
            selector: row => row.param3,
        },
        {
            name: 'PARAM4',
            selector: row => row.param4,
        },
        {
            name: 'PARAM5',
            selector: row => row.param5,
        },
    ];

    return (
        <>
            <div className="row">
                <div className="text-center">
                    {/* <button className="btn btn-primary mx-5" onClick={() => addOrDeleteAll(objAddOrDelete)}> Agregar o eliminar </button> */}
                    {/* <button className="btn btn-success mx-5" onClick={() => saveFile()}> Guardar datos </button> */}
                    <button className="btn btn-success mx-5" onClick={() => showData()}> Mostrar datos </button>
                </div>
                <div className="col-md-12">
                    <h3 className="text-center py-5">Mediciones durante el día</h3>
                    <DataTable
                        columns={columns}
                        data={data}
                        pagination
                    />
                </div>
            </div>
        </>
    );
}

export default TablesFB;