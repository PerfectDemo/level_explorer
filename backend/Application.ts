import * as carlo from 'carlo';
import * as path from 'path';
import operator from './Operator';

class Application {
    private operator = operator;
    private app: carlo.App | any;

    public async runApp(): Promise<void> {
        this.app = await carlo.launch();
        this.app.on('exit', () => process.exit());
        // Tell carlo where your web files are located.
        this.app.serveFolder(path.join(__dirname, '../../dist'));
    
        // Navigate to the main page of your app.
        console.log('33324234');

    }

    public registerFunctions(): void  {
        [ "getAllDb", "get", "set", "getDbInfo", "getAllKey", "addDb", "removeDb" ].forEach(key => {
            this.app.exposeFunction(key, this.operator[key]);
        });
    }

    public async launch(): Promise<void> {
        await this.runApp();
        this.registerFunctions();
        await this.app.load('index.html');
    }
}

export default Application;