import { app } from "./app"
import { newUser } from "./services/newUser"

app.post("/users", newUser )