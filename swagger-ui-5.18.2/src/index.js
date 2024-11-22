import SwaggerUI from "./core"

export default SwaggerUI

const ui = SwaggerUIBundle({
    url: "../../../../../swagger.json", // Navigate up to reach the root folder
    dom_id: '#swagger-ui',
});