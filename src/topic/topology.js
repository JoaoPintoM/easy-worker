module.exports = function(rabbit) {
  return rabbit.configure({
    // arguments used to establish a connection to a broker
    connection: {
      user: 'guest',
      pass: 'guest',
      server: ['127.0.0.1'],
      port: 5672,
      vhost: '%2fgate',
      timeout: 1000,
      failAfter: 30,
      retryLimit: 400,
    },
    // define the exchanges
    exchanges: [{
      name: 'monitoring-exchange',
      type: 'topic',
      autoDelete: true,
    }],
    // setup the queues, only subscribing to the one this service
    // will consume messages from
    queues: [{
      name: 'test-monitoring1',
      autoDelete: true,
      subscribe: true,
    }, {
      name: 'test-monitoring2',
      autoDelete: true,
      subscribe: true,
    }],
    // binds exchanges and queues to one another
    bindings: [{
      exchange: 'monitoring-exchange',
      target: 'test-monitoring1',
      keys: ['1'],
    }, {
      exchange: 'monitoring-exchange',
      target: 'test-monitoring2',
      keys: ['2'],
    }],
  }).then(null, function(err) {
    console.error('Could not connect or configure:', err);
  });
};
