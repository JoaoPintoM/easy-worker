module.exports = (rabbit) => {
  // this handler will handle messages sent from the publisher
  rabbit.handle({
    queue: 'test-monitoring2',
    type: '#',
  }, (msg) => {
    console.log('routingKey', msg.fields.routingKey);
    const message = msg.body;
    message.datePlay = new Date(message.datePlay);
    delete message.amqp;
    /* message with group = true are  solo game message.
     Those are already saved with status 'saved' */
  console.log('====');
  console.log(message);
    msg.ack();
  });

// it can make a lot of sense to share topology definition across
// services that will be using the same topology to avoid
// scenarios where you have race conditions around when
// exchanges, queues or bindings are in place
  require('./topology.js')(rabbit, '2', '2');
  console.log('Set up queue 2 OK');
};
