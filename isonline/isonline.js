/**
 * Created by Bladerunner on 11/03/16.
 */
module.exports = function(RED) {
    function NodeIsOnline(config) {
        RED.nodes.createNode(this,config);
        this.action = config.action;
        this.url = config.url;
        var node = this;

        this.on('input', function(msg) {
            msg.timestamp = +new Date();
            checkInternet(node.url, function(online) {
                msg.online = online;
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

function checkInternet(url, cb) {
    var url_to_check = url || 'google.com';
    require('dns').lookup(url_to_check, function(err) {
        if (err && err.code == "ENOTFOUND") {
            cb(false);
        } else {
            cb(true);
        }
    })
}
