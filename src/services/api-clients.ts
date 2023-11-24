import axios from "axios";


export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key: "3d71b4af70fa46d2bdc4f2c7f87b6efa"
    }

})