import { app } from "./app"
import { newUser } from "./services/newUser"
import { product } from "./services/product"
import { purchaseRecord } from "./services/purchaseRecord"
import { searchProduct } from "./services/searchProduct"
import { searchUser } from "./services/searchUser"

app.post("/users", newUser)
app.get("/users", searchUser)
app.post("/products", product)
app.get("/products", searchProduct)
app.post("/purchases", purchaseRecord)


