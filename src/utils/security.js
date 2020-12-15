import crypto from 'crypto'
import {$security} from '../../config'
export function encrypt(str){
    return crypto
    .createHash('sha1')
    .update(`${str.toString()}`)
    .digest('hex')
}