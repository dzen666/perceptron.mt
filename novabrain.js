
var Novabrain = require('novabrain');
var Neuron    = Novabrain.Neuron;
var Layer     = Novabrain.Layer;
var Network   = Novabrain.Network;
var Trainer   = Novabrain.Trainer;
var Transfer  = Novabrain.Transfer;
var Samples   = Novabrain.Samples;
var example = (function(){
  return {
    Train: function(trainer, trainmethod){
      
		  switch (trainmethod)
		  {
				case "backpropagate": 
				{
				  
					console.info("training "+ trainmethod);
						trainer.train([
							{ input: [0,0], output: [1] },
							{ input: [0,1], output: [0] },
							{ input: [1,0], output: [0] },
							{ input: [1,1], output: [1] },
					    ]);
						
						break;
				
				}
				case "direct": 
				{
					console.info("training "+ trainmethod);
						trainer.train([
							{ input: [0,0], output: [0] },
							{ input: [0,1], output: [1] },
							{ input: [1,0], output: [1] },
							{ input: [1,1], output: [0] },
					    ]);
						break;
				} 
			}  
		
    },
		Sample: function(config){
		  
			console.info("running "+ config); 
			 
			var network = new Novabrain.Network(2,1);
			network.import(config);
			var trainer = new Novabrain.Trainer(network);
			 example.Train(trainer, "direct");
			 example.networkOutput(network, Novabrain.Transfer.SIGMOID);
			 example.Train(trainer, "backpropagate");
			 example.networkOutput(network, Novabrain.Transfer.BOOLEAN);	
			 
		 
		},
		 //network, Novabrain.Transfer.BOOLEAN
		 networkOutput(network, transfer){
			network.transfer = transfer;
			console.log([0,0], network.output([0,0])); // [false]
			console.log([0,1], network.output([0,1])); // [true]
			console.log([1,0], network.output([1,0])); // [true]
			console.log([1,1], network.output([1,1])); // [false]
		 } 
	}
})();

example.Sample(Novabrain.Samples.XOR.config);
example.Sample(Novabrain.Samples.OR.config);
	 
	
