require("@babel/polyfill");
import axios from "axios";

export default class Search{
    constructor(query){
        this.query = query;
    }

    async doSearch() {
        try{

            let result = await axios(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${this.query}&key=e6902aec-e6a4-4e4d-8044-591b0ffdb5a6`);
            this.result = result.data.recipes;
            
            return this.result;

        } catch(error){
            console.log(error);
        }
    }
}