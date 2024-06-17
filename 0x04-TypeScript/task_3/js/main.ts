/// <reference path="./crud.d.ts" />
import {RowID, RowElement} from './interface'
import * as CRUD from './crud';
const row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva"
}

const updatedRow: RowElement = {
    ...row,
     age: 23
 };
 

