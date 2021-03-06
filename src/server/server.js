import {App} from '../App'

const express = require('express');
import ReactDOM from 'react-dom/server';
import { indexTemplate} from "./indexTemplate";
import compression from 'compression';
import helmet from 'helmet';

const app = express();
const PORT = process.env.PORT || 3000;
const IS_DEV = process.env.NODE_ENV !== 'production';

app.use('/static', express.static('./dist/client'));
if(!IS_DEV) {
    app.use(compression());
    app.use(helmet({
        contentSecurityPolicy: false,
    }));
}

app.get('/', (req, res) => {
    res.send(
        indexTemplate(ReactDOM.renderToString(App())),
    );
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
})