import React, { useState, useEffect } from "react";
// import ContactForm from "./ContactForm"
import firebaseDb from "../../../firebase";

const Contacts = () => {

    var [contactObjects, setContactObjects] = useState({})
    // var [currentId, setCurrentId] = useState('')

    useEffect(() => {
        firebaseDb.child('users').on('value', snapshot => {
            if (snapshot.val() != null)
                setContactObjects({
                    ...snapshot.val()
                })
            else
                setContactObjects({})

        })
    }, [])// similar to componentDidMount

    // const addOrEdit = obj => {
    //     if (currentId === '')
    //         firebaseDb.child('users').push(
    //             obj,
    //             err => {
    //                 if (err)
    //                     console.log(err)
    //                 else
    //                     setCurrentId('')
    //             }
    //         )
    //     else
    //         firebaseDb.child(`users/${currentId}`).set(
    //             obj,
    //             err => {
    //                 if (err)
    //                     console.log(err)
    //                 else
    //                     setCurrentId('')
    //             }
    //         )
    // }

    // const onDelete = key => {
    //     if (window.confirm('Are you sure to delete this record?')) {
    //         debugger
    //         firebaseDb.child(`users/${key}`).remove(
    //             err => {
    //                 if (err)
    //                     console.log(err)
    //                 else
    //                     setCurrentId('')
    //             }
    //         )
    //     }
    // }

    return (
        <>

            <div className="row">
                {/* <div className="col-md-5">
                    <ContactForm {...({ addOrEdit, currentId, contactObjects })} />
                </div> */}
                <div className="col-md-7">
                    <table className="table table-borderless table-stripped">
                        <thead className="thead-light">
                            <tr>
                                <th>Nombre</th>
                                <th>Teléfono</th>
                                <th>Email</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(contactObjects).map(id => {
                                    return <tr key={id}>
                                        <td>{contactObjects[id].fullName}</td>
                                        <td>{contactObjects[id].mobile}</td>
                                        <td>{contactObjects[id].email}</td>
                                        {/* <td>
                                            <a href="/home" className="btn text-primary" onClick={() => { setCurrentId(id) }}>
                                                <i className="fas fa-pencil-alt"></i>
                                            </a>
                                            <a href="/home" className="btn text-danger" onClick={() => { onDelete(id) }}>
                                                <i className="far fa-trash-alt"></i>
                                            </a>
                                        </td> */}
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

export default Contacts;