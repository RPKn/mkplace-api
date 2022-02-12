import StartUp from "./startUp";

let port = '3000';

StartUp.app.listen(port, function() {
console.log(`server running in port ${port}`);
}

);