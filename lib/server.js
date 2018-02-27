import express from 'express';
import config from './config';
import serverRender from './renderers/server';
import {data} from './testData';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    const initialContent = await serverRender(); //initial content is needed if browser JS is turned off. And this also helps with SEO
    res.render('index',{...initialContent});
});


app.get('/data', (req, res) => {
    res.json(data);
    res.end();
});

app.listen(config.port, function listenHandler(){
    console.log(`Running on ${config.port}`);
});