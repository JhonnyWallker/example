import express from 'express';
import morgan from 'morgan';

const app = express();

//midelwares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.get('/', (req, res) => {
    res.send('welcome to my api');
});
app.get('/api', (req, res) => {
    return res.json({ hello: 'dog' });
});

app.get('/api/marco', (req, res) => {
    return res.end("polo");
});

app.listen(3000, () => {
    console.log('Server on port 3000')
});