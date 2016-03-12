/**
 * Created by Bladerunner on 11/03/16.
 */
module.exports = function(RED) {
    function NodeIsOnline(config) {
        RED.nodes.createNode(this,config);
        this.action = config.action;
        var node = this;
        this.on('input', function(msg) {
            msg.online = online;
            msg.timestamp = +new Date();
            checkInternet(function(online) {
                switch (parseInt(node.action)) {
                    case 0:
                        msg.payload = online;
                        break;
                    case 1:
                        if (!online) msg = null;
                        break;
                    case 2:
                        if (online) msg = null;
                        break;
                }

                node.send(msg);
            });


        });
    }

    RED.nodes.registerType("Is-Online",NodeIsOnline);
};

function checkInternet(cb) {
    require('dns').lookup('google.com',function(err) {
        if (err && err.code == "ENOTFOUND") {
            cb(false);
        } else {
            cb(true);
        }
    })
}
