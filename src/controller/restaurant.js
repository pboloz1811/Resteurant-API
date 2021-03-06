import mongoose from 'mongoose';
import {Router} from 'express';
import Restaurant from '../model/restaurant';

export default({config, db}) => {
  let api = Router();


  //v1/restaurant/add
  api.post('/add', (req, res) => {
    let newRest = new Restaurant();
    newRest.name = req.body.name;

    newRest.save(err => {

      if(err) {
        res.send(err);
      }
      res.json({message: `Restaurant saved succesfully`});
    });

  });

  api.get('/', (req, res) => {
    Restaurant.find({}, (err, restaurants) => {
      if (err){
        res.send(err);
      }
      res.json(restaurants);
    });
  });

//get by id

api.get('/:id', (req, res) => {
  Restaurant.findById(req.params.id, (err, restaurant) => {
    if (err){
      res.send(err);
    }
    res.json(restaurant);
  });
});



  return api;
}
