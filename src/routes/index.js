import express from 'express';
import config from '../config';
import middleware from '../middleware';
import initialiseDb from '../db';

let router = express();

initialiseDb(db => {

    // Middleware
    router.use(middleware({config, db}));
    //api routes
});

export default router;