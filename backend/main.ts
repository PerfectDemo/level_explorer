import * as carlo from 'carlo';
import * as path from 'path';


(async () => {
    // Launch the browser.
    const app = await carlo.launch();
  
    // Terminate Node.js process on app window closing.
    app.on('exit', () => process.exit());
    // Tell carlo where your web files are located.
    app.serveFolder(path.join(__dirname, '../dist'));
  
    // Navigate to the main page of your app.
    await app.load('index.html');
  })();