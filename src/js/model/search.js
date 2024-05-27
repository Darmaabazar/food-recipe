require("@babel/polyfill");
import axios from "axios";

export default class Search{
    constructor(query){
        this.query = query;
    }

    async doSearch() {
        try{

            let result = await axios(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${this.query}&key=00b34bf3-6154-4f34-b8ab-d85798c2baf6`);
            this.result = result.data.data.recipes;
            return this.result;

        } catch(error){
            console.log(error);
        }
    }
}