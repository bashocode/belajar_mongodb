let connection = require('../models/index');
let db = connection.db('genshin_impact');
let character = db.collection('character');

class CharacterController {
  async getCharacter(req, res, next) {

  }

  async insertCharacter(req, res, next) {
    let data = await character.insertOne({
      name: req.body.name,
      element: req.body.element
    });

    // If success
    return res.status(200).json({
      message: "Success",
      data: data.ops[0],
    });
  } catch (e) {
    console.log(e);
    // If failed
    return res.status(500).json({
      message: "Internal Server Error",
      error: e,
    });
  }
}

module.exports = CharacterController;
