// const router=require("express").Router();
// // // const stripe=require("stripe")(process.env.STRIPE_KEY);\
// // const KEY="sk_test_51NH5hiSGE8c8iHjs1UTnE4Buu9VK8jm3vQawKVQpSD02XOFubL9JNry5BSxa7APaDYpcbomtzweh1zKULcvgAqfz00OgtXLFUo"
// // const stripe=require("stripe")(KEY);

// // router.post("/payment", (req, res)=>{
// //     stripe.charges.create(
// //         {
// //             source: req.body.tokenId,
// //             amount: req.body.amount,
// //             currency: "INR"
// //         },
// //         (stripeErr, stripeRes)=>{
// //             if (stripeErr)
// //             {
// //                 res.status(500).json(stripeErr);
// //             }
// //             else
// //             {
// //                 res.status(200).json(stripeRes);
// //             }
// //         }
// //     );
// // });

// const stripe = require('stripe')('sk_test_51NH5hiSGE8c8iHjs1UTnE4Buu9VK8jm3vQawKVQpSD02XOFubL9JNry5BSxa7APaDYpcbomtzweh1zKULcvgAqfz00OgtXLFUo');
// // const express = require('express');
// // const app = express();
// // app.use(express.static('public'));

// // const YOUR_DOMAIN = 'http://localhost:4242';

// router.post('/payment', (req, res) => {
//     const session = stripe.checkout.sessions.retrieve('/payment', {
//           expand: ['line_items'],
//         },
//       );
//     stripe.checkout.sessions.create(
//         {
//           success_url: 'http://localhost:3000/success',
//           cancel_url: 'http://localhost:3000/cancel',
//           payment_method_types: ['card'],
//           line_items: [
//             {
//               price: priceId,
//               quantity: 2,
//             },
//           ],
//           mode: 'payment',
//         },
//       )

// //   res.redirect(303, session.url);
// });

// // app.listen(4242, () => console.log('Running on port 4242'));
// module.exports=router;

// // This is your test secret API key.
const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
const KEY = process.env.STRIPE_KEY
const stripe = require("stripe")(KEY);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "INR",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;