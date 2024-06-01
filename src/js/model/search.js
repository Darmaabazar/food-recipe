require("@babel/polyfill");
import axios from "axios";

export default class Search{
    constructor(query){
        this.query = query;
    }

    async doSearch() {
        try{

            let result = await axios(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${this.query}&key=bdac85e7-3d7e-4f1c-aa7b-3aa175976d6a`);
            this.result = result.data.data.recipes;
            
            return this.result;

        } catch(error){
            console.log(error);
        }
    }
}