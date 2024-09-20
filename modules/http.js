import { createServer } from "http";

const server = createServer((request, response) => {
    response.write("Hello Gods")
    response.end()
});

server.listen(5500, () => {
    console.log("Server running at port at 5500");
})