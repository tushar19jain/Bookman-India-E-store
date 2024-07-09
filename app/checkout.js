import {loadStripe} from '@stripe/stripe-js'
export async function checkout({lineItems}){
    let stripPromise = null
    let getStripe=()=>{
        if(!stripPromise){
            stripPromise=loadStripe(`${process.env.STRIPE_KEY}`)
        }
        return stripPromise
    }
        const stripe = await getStripe()
        await stripe.redirectToCheckout({
            mode:"payment",
            lineItems,
            successUrl:`${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
            cancelUrl:window.location.origin
        })
}