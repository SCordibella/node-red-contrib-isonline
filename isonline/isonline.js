/**
 * Created by Bladerunner on 11/03/16.
 */

var isOnline = require('is-online');

module.exports = function(RED) {
    function NodeIsOnline(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        this.on('input', function(msg) {
            isOnline(function(err, online) {
                msg.timestamp = +new Date();
                msg.payload = online;
                node.send(msg);

            });


        });
    }

    RED.nodes.registerType("Is-Online",NodeIsOnline);
};
