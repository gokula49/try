const fastify = require("fastify")({ logger: true });
const connectMongo = require("./config/dbConfig");
const routes = require("./routes/route");

//HEROKU LOGGING :heroku logs -a zoho-invoice-server --tail
//fastify plugins
fastify.register(require("fastify-cookie"));
fastify.register(require("fastify-cors"), {
  origin: "*",
});
fastify.register(require("fastify-formbody"));
fastify.register(require("fastify-express"));

//connect MongoDB
//hello
console.log("----------   From Server !   -----------");
connectMongo.connectDB();

//Configure routes for fastify
const routePlugin = async () => {
  routes.forEach(async (route) => {
    await fastify.route(route);
  });
};

// import routes
const estimates = require("./routes/Estimate");
const invoice = require("./routes/Invoice");
const challan = require("./routes/Challan");
const item = require("./routes/Item");
const customer = require("./routes/Customer");
const payment = require("./routes/Paymentreceived");
const expense = require("./routes/Expenses");
const organ = require("./routes/organ");

estimates.forEach((route) => {
  fastify.route(route);
})
invoice.forEach((route) => {
  fastify.route(route);
});
challan.forEach((route) => {
  fastify.route(route);
});
item.forEach((route) => {
  fastify.route(route);
});
customer.forEach((route) => {
  fastify.route(route);
});
payment.forEach((route)=>{
  fastify.route(route);
});

expense.forEach((route)=>{
  fastify.route(route);
});
organ.forEach((route)=>{
  fastify.route(route);
}
)

fastify.register(require('fastify-nodemailer'), {
  pool:true,
  
  service:"gmail",
  secure:true,
  
// use TLS
  auth: {
      type:'OAuth2',
      user: 'techpiratesteam@gmail.com',
      pass: 'Pirates@123',
      clientId:"1050299537891-jtrm6r1vle4fo70ui160mcqlojvndisu.apps.googleusercontent.com",
      clientSecret:"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",
      refreshToken:"1//040DTa_vOXcfTCgYIARAAGAQSNwF-L9Ir2g4JYFc9XhkBG1e-OxQyevnSYnOSzGQs92WDYtamflSX743hLPsDyr0wEUjZy3CXDZs"

  }
})

fastify.post('/sendmail/:email', (req, reply, next) => {
  let { nodemailer } = fastify
  let recipient = req.params.email
  let {body}=req.body;
  let {subject}=req.body

  nodemailer.sendMail({
    from: 'techpiratesteam@gmail.com',
    to: recipient,
    subject: subject,
    text: body,
  }, (err, info) => {
    if (err) next(err)
    reply.send({
      messageId: info.messageId
    })
  })
});
fastify.post('/sendsalemail/:email', (req, reply, next) => {
  let { nodemailer } = fastify
  let recipient = req.params.email
  let {content}=req.body;
  

  nodemailer.sendMail({
    from: 'techpiratesteam@gmail.com',
    to: recipient,
    
    text:`Hello ${content.customername} ,\n You have Purchaced a Item ${content.itemName} of rupees ${content.amount}  with quantity of ${content.quantity} Your Reference id is : ${content.sreference} Estimated Date : ${content.estimateDate}\n Thank you , Welcome Back - Techpirates`
  }, (err, info) => {
    if (err) next(err)
    reply.send({
      messageId: info.messageId
    })
  })
})


//start fastify server
const start = async () => {
  try {
    await routePlugin();
    await fastify.listen(process.env.PORT || 4000, "0.0.0.0");
    // await fastify.listen(4000)
    console.log(`Server Connected on port : ${fastify.server.address().port}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
start();
