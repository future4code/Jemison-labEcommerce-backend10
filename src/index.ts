import { app } from "./app"
import { newUser } from "./services/newUser"
import { product } from "./services/product"
import { search } from "./services/search"

app.post("/users", newUser)
app.get("/users", search)
app.post("/products", product)
