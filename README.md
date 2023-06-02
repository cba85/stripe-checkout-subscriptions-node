# Stripe Checkout Subscriptions demo

Based on https://github.com/stripe-samples/checkout-single-subscription

## Demo

The demo is running in test mode -- use `4242424242424242` as a test card number with any CVC + future expiration date.

Use the `4000002500003155` test card number to trigger a 3D Secure challenge flow.

Read more about testing on Stripe at https://stripe.com/docs/testing.

## How to run locally

### 1. Clone and configure the sample

```sh
git clone https://github.com/stripe-samples/checkout-single-subscription
```

Copy the `.env.example` file into a file named `.env` in the folder of the server you want to use. For example:

```sh
cp .env.example server/node/.env
```

You will need a Stripe account in order to run the demo. Once you set up your account, go to the Stripe [developer dashboard](https://stripe.com/docs/development/quickstart#api-keys) to find your API keys.

```sh
STRIPE_PUBLISHABLE_KEY=<replace-with-your-publishable-key>
STRIPE_SECRET_KEY=<replace-with-your-secret-key>
```

### 2. Create Products and Prices on Stripe

This sample requires [Price](https://stripe.com/docs/api/prices/object) IDs to create the Checkout page. Products and Prices are objects on Stripe that let you model a subscription.

You can create Products and Prices [in the dashboard](https://dashboard.stripe.com/products). Create two recurring Prices to run this sample.

**Update PRICE_ID variables in your .env file**

Next, open `.env` in the folder of the server you want to use, and update the values for `PRICE_ID` with the price IDs of the prices you added.

### 3. Confirm that you have set the account name

In order to use Checkout, you must set an account or business name at https://dashboard.stripe.com/account

### 4. Follow the server instructions on how to run:

```sh
cd server/node
npm install
npm start
```

**Customize your branding**

To customize your icon, logo and colors for Checkout and the Customer Portal, go to [Branding settings](https://dashboard.stripe.com/account/branding) in the Dashboard.

**Run a webhook locally:**

You can use the Stripe CLI to easily spin up a local webhook.

First [install the CLI](https://stripe.com/docs/stripe-cli) and [link your Stripe account](https://stripe.com/docs/stripe-cli#link-account).

```sh
./stripe listen --forward-to "localhost:4242/webhook"
```

The CLI will print a webhook secret key to the console. Set `STRIPE_WEBHOOK_SECRET` to this value in your `.env` file.

You should see events logged in the console where the CLI is running.

When you are ready to create a live webhook endpoint, follow our guide in the docs on [configuring a webhook endpoint in the dashboard](https://stripe.com/docs/webhooks/setup#configure-webhook-settings).