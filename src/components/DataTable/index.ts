import { Body } from "./Body"
import { Column } from "./Column"
import { Head } from "./Head"
import { Table } from "./Root"
import { Row } from "./Row"
import { Footer } from "./Footer"

export default{
    root: Table,
    head: Head,
    colum: Column,
    row: Row,
    content: Body,
    footer: Footer
}