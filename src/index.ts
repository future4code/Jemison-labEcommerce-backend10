import { app } from "./app"
import { newUser } from "./services/newUser"
import { search } from "./services/search"

app.post("/users", newUser )
app.get("/users", search)