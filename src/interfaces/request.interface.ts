import UserDetails from './userDetails.interface';
import * as Express from 'express';

interface Request extends Express.Request{
    session : any
}


export default Request;