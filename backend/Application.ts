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
        this.app.serveFolder(path.join(__dirname, '../dist'));
    
        // Navigate to the main page of your app.
        await this.app.load('index.html');

    }

    public registerFunctions(): void  {
        Object.keys(this.operator).forEach(key => {
            this.app.exposeFunction(key, operator[key]);
        });
    }

    public async launch(): Promise<void> {
        await this.runApp();
        this.registerFunctions();
    }
}

export default Application;