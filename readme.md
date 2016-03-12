node-red-contrib-isonline
========================

Install
-------
Run command on Node-RED installation directory

	npm install node-red-contrib-isonline
	
Config
-------

A <a href="http://nodered.org" target="_new">Node-RED</a> node to check if the Internet connection is up. A node that check Internet connection on receiving a message.</p>
    <p><b>URL: </b> Check the general Internet connection if blank or check if the specific server is online.
   <p><b>Action:</b>
   <ul>
       <li><b>True or false:</b> returns <i>true</i> or <i>false</i> as <cod>msg.payload</code></li>
       <li><b>Pass through if online</b>: returns <code>msg</code> if Internet connection is online and
              <code>null</code> otherwise. <code>msg.payload</code> is unchanged.</li>
       <li><b>Pass through if offline</b>: returns <code>msg</code> if Internet connection is offline and
              <code>null</code> otherwise. <code>msg.payload</code> is unchanged.</li>
    </ul>
    <p><code>msg.online</code> always contains the connection status</p>
    <p><code>msg.timestamp</code> contains the timestamp</p>

