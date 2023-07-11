const AppError = require("../utils/errors/AppError");
const { StatusCodes } = require("http-Status-Codes");
class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {

        console.log("inside repository")
        // console.log(model)
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      console.log("error in airplane repository");
      throw error;
    }
  }



  /**
   *  Update Request ->
   *    /airplanes/:id   
   * 
   */



  async update(data, id) {
    try {
      const response = await this.model.update(data, {
        where: {
          id: id,
        },
      });
      return response;
    } catch (error) {
      console.log("error in airplane repository : update function");
        throw  error;
    
    }
  }


/**
   *   Get Request ->
   *    /airplanes  
   * 
   */

  async getAll() {
   console.log(this.model)
   
    try {
      const response = await this.model.findAll();
  
      return response;
    } catch (error) {
      console.log("error in crud repository getall fn"+error);
      throw error;
    }
  }


  /**
   *   Get Request ->
   *    /airplanes/:id   
   * 
   */
  
  async get(id) {
  
      const response = await this.model.findByPk(id);
      if(!response){

        throw new AppError(" Somethng Went Wrong .. " , StatusCodes.NOT_FOUND);
       }

      return response;
  
      }



  /**
   *  Delete Request ->
   *    /airplanes/:id   
   * 
   */


  async destroy(data) {
 
      const response = await this.model.destroy({
        where: {
          id: data,
        },
      });

      if(!response){

        throw new AppError(" Somethng Went Wrong .. " , StatusCodes.NOT_FOUND);
       }

      return response;
    
  }
}


module.exports=CrudRepository;

