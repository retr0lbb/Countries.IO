interface ColumnProps{
    ColumnValue: string,
    icon?: any
}

export const Column: React.FC<ColumnProps> = ({ColumnValue, icon}) => {
    return(
        <th className="bg-zinc-600 p-4 px-6 text-zinc-200 text-xl text-start">
            {ColumnValue}
            {icon}
        </th>
    )
}