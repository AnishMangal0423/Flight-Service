class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      console.log("error in airplane repository");
    }
  }




  async update(data, id) {
    try {
      const response = await this.model.update(data, {
        where: {
          id: id,
        },
      });
      return response;
    } catch (error) {
      console.log("error in airplane repository");
    }
  }




  async getAll() {
    try {
      const response = await this.model.findAll();
      return response;
    } catch (error) {
      console.log("error in airplane repository");
    }
  }




  async destroy(data) {
    try {
      const response = await this.model.destroy({
        where: {
          id: data,
        },
      });
      return response;
    } catch (error) {
      console.log("error in airplane repository");
    }
  }
}


module.exports=CrudRepository;
