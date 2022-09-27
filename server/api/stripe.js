const router = require('express').Router()
if (process.env.NODE_ENV !== "production") {
    require("../../secrets.js");
  }
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

router.post('/create-checkout-session', async(req,res,next) => {
    try {
        const cart = req.body.cart
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            line_items: cart.lineitems.map(item => {
              return {
                price_data: {
                  currency: "usd",
                  product_data: {
                    name: item.events[0].name,
                  },
                  unit_amount: item.events[0].price,
                },
                quantity: item.qty,
              }
            }),
            success_url: `${process.env.PAGE_URL}/profile/checkout/done`,
            cancel_url: `${process.env.PAGE_URL}/profile/checkout/done`,
          })
          res.json({ url: session.url })
    } catch (err) {
        next(err)
    }
})

module.exports = router