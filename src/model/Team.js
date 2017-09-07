import makeHash from 'sha.js';

import Model from './model'
class User extends Model{
  /**
   * Do SHA-256 Hashing
   * @param text
   * @returns {*}
   */
  sha256(text = ''){
    let sha256 = makeHash('sha256');
    return sha256.update(text).digest('hex');
  }

  /**
   * 登陆
   * @param email
   * @param password
   * @returns {Promise}
   */
  login(email, password){
    return new Promise(async (resolve, reject) => {
      try{
        let result = await this.request("POST", '/User/login', {
          email: email,
          password: this.sha256(password)
        });
        resolve(result);
      }
      catch (e){
        reject(e);
      }
    })
  }

  /**
   * 注册
   * @param teamName
   * @param email
   * @param password
   * @returns {Promise}
   */
  register(teamName, email, password){
    return new Promise(async (resolve, reject) => {
      try{
        let result = await  this.request("POST", "/User/register", {
          teamName: teamName,
          email: email,
          password: this.sha256(password)
        });
        resolve(result);
      }
      catch (e){
        reject(e);
      }
    })
  }

  /**
   * 获取用户信息
   * @returns {Promise}
   */
  getTeamInfo(){
    return new Promise(async (resolve, reject) => {
      try{
        let result = await this.request("GET", "/User/info", {}, {
          needAuth: true
        });
        resolve(result);
      }
      catch (e){
        reject(e);
      }
    })
  }
}
export default User;