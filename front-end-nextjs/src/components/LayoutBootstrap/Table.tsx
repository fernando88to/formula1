import React from "react";
import {Spinners} from "./Spinners";

interface Props {
    children?: React.ReactNode,
    columns: Array<Column>,
    rows?: Array<any>,
    loading: boolean

}

interface Column {
    field: string,
    headerName: string
}

export const Table = (props: Props) => {
    return (
        <div>
            {props.loading && <Spinners />}
            {!props.loading &&  <div id="example_wrapper" className="dataTables_wrapper dt-bootstrap5">
                <div className="row">
                    <div className="col-sm-12">
                        <table id="example"
                               className="table table-striped data-table dataTable"
                               style={{width: '100%'}} role="grid"
                               aria-describedby="example_info">
                            <thead>
                            <tr role="row">
                                {props.columns.map((item, index) => {
                                    return (
                                        <th className="sorting" key={index}>{item.headerName}</th>
                                    )
                                })}
                            </tr>
                            </thead>
                            <tbody>
                            {

                                // @ts-ignore
                                props.rows.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            {
                                                Object.keys(item)
                                                    .filter(key => props.columns.map(column => column.field).includes(key))
                                                    .map((key, index) => {
                                                        return (
                                                            <td key={index}>{item[key]}</td>
                                                        )
                                                    })
                                            }

                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>}
        </div>
    );
};