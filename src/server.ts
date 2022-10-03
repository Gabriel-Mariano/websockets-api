import { serverHttp, port } from "./http";
import "./websocket";

serverHttp.listen(port,()=> {
    console.log(`Server is running at port ${port}`)
})