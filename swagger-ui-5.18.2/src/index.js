import SwaggerUI from "./core"

export default SwaggerUI

const ui = SwaggerUIBundle({
    url: "swagger.json", // Path to your Swagger file
    dom_id: '#swagger-ui',
});