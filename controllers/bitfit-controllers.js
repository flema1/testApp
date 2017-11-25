const Bitfit = require('../models/bitfit');

const bitfitController = {};

bitfitController.index = (req, res) => {
  Bitfit.findAll()
    .then(bitfit => {
      res.json({
        message: 'ok',
        data: bitfit,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};


// var request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Print the google web page.
//   }
// })


// bitfitController.testGET = (req, res) => {
//   Bitfit.findById(req.params.id)
//     .then(bitfit => {
//       res.json({
//         message: 'ok',
//         data: bitfit,
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({ err });
//     });
// };


// bitfitController.show = (req, res) => {
//   Bitfit.findById(req.params.id)
//     .then(bitfit => {
//       res.json({
//         message: 'ok',
//         data: bitfit,
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({ err });
//     });
// };

// bitfitController.create = (req, res) => {
//   Bitfit.create({
//     flavor: req.body.flavor,
//     description: req.body.description,
//     rating: req.body.rating,
//     url: req.body.url,
//     brand: req.body.brand,
//   })
//     .then(bitfit => {
//       res.json({
//         message: 'ok',
//         data: bitfit,
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({ err });
//     });
// };

bitfitController.create = (req, res) => {
    console.log (" usersController.create  ---->");
    console.log(req.body+ " req body");
    
  

  Bitfit.create({
    username: req.body.username,
    email: req.body.email,
    password_digest: req.body.password,
    firstname: req.body.firstname,
    token: req.body.token
  }).then(user => {
    req.login(user, (err) => {
      console.log("sucessful register!");
      console.log (user);
    res.json({
        token: user.token,
        username: user.username,
        email: user.email,
        firstname: user.firstname
        });
    });
 }).catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  });
}  

// bitfitController.update = (req, res) => {
//   Bitfit.update(
//     {
//       flavor: req.body.flavor,
//       description: req.body.description,
//       rating: req.body.rating,
//       url: req.body.url,
//       brand: req.body.brand,
//     },
//     req.params.id,
//   )
//     .then(bitfit => {
//       res.json({
//         message: 'ok',
//         data: bitfit,
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({ err });
//     });
// };

// bitfitController.destroy = (req, res) => {
//   Bitfit.destroy(req.params.id)
//     .then(bitfit => {
//       res.json({
//         message: 'ok',
//         data: bitfit,
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({ err });
//     });
// };

module.exports = bitfitController;
