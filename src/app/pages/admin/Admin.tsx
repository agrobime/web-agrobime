import { FC } from 'react'
import { Table } from 'react-bootstrap-v5'

const Admin: FC = () => (
    <>
        <div className='row gy-5 g-xl-8 py-5'>
            <div className='col-xxl-12'>
                <div className="card card-xxl-stretch mb-5 mb-xl-8">
                    <div className="card-body py-3">
                        <p>PÁGINA DE ADMINISTRACIÓN - AGROBIME</p>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Proyecto</th>
                                    <th>Ubicacion</th>
                                    <th>Contacto</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Biohuerto</td>
                                    <td>Lurin</td>
                                    <td>Marjorie</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Valle Chao</td>
                                    <td>Chao</td>
                                    <td>Margaly</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Nervadura</td>
                                    <td>Huaycan</td>
                                    <td>Graciela</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    </>
)

export { Admin }