import Model from '@/model/model'

class Category extends Model {
  /**
   * 获得所有分类
   * @returns {Promise}
   */
  getAllCategories(){
    return new Promise(async (resolve, reject) => {
      try{
        let lists = this.request("GET", "/Category/list");
        resolve(lists);
      }
      catch (e){
        reject(e);
      }
    })
  }
  addCategory(categoryName){
    return new Promise(async (resolve, reject) => {
      try{
        let newCategory = this.request("GET", "/Category/list", {
          categoryName: categoryName
        }, {
          needAuth: true
        });
        resolve(newCategory);
      }
      catch (e){
        reject(e);
      }
    })
  }
}

export default Category;