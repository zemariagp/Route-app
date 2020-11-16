
const express = require('express');
const router = express.Router();
const axios = require('axios');

const zomatoAPI = axios.create({
  baseURL: 'https://developers.zomato.com/api/v2.1/',
  headers: { 'user-key': process.env.ZOMATO_KEY }
});




/*
zomatoAPI.get('/categories', async (req, res) => {
  const data = await req.data
  console.log(data)
})
router.get('/categories', async (req, res) => {
  const data = await zomatoAPI.get('/categories')
  const categories = data.data.categories
  console.log(categories)
  //res.render('dashboard',{ categories })
})
*/

module.exports = router;


