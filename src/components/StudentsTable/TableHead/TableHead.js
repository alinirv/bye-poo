import tableHeadStyle from './TableHead.module.css'

function TableHead({ className }) {
    return (
        <thead className={ `${tableHeadStyle.TableHead} ${className || '' }` }>
            <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Razão</th>
                <th></th>
            </tr>
        </thead>
    )
}

export default TableHead
