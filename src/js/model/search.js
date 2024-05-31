require("@babel/polyfill");
import axios from "axios";

export default class Search{
    constructor(query){
        this.query = query;
    }

    async doSearch() {
        try{

            let result = await axios(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${this.query}&key=a6fadda6-b190-48db-82cc-366c32d1465a`);
            this.result = result.data.data.recipes;
            
            return this.result;

        } catch(error){
            console.log(error);
        }
    }
}