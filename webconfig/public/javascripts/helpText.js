var helpText = new Object();
helpText["ACHANNELS"] = "<p><b>ACHANNELS 2</b> means operate the preceding device in <b>Stereo</b> mode for two radio channels. <b>ACHANNELS 1</b> means operate the preceding device in <b>Mono</b> for one radio channels.</p><p>Mono operation (one channel per device) is assumed if not specified.</p>";
helpText["ADEVICE"] = "<p></p><p>See the <a href='USER-GUIDE.html' target='guide'>User's Guide</a>, Section 9.1</p>";
helpText["AGWPORT"] = "<p>In most case Dire Wolf can be used as a drop in replacement for AGWPE. By default, it listens on network port 8000</p><p>The raw mode (similar to KISS) interface has been available for a long time. This is fine for all APRS applications and some others such as RMS Express.</p><p>Some other packet applications, such as Outpost PM, require the AX.25 connected mode. This has been added in version 1.4</p>";
helpText["ALIASES"] = "<p>Using specific station names is usually not very satisfactory. Who is available? Who can hear me? <b>Aliases</b> can allow digipeaters to respond to additional names. Multiple stations can respond to the same alias. For example the local Emergency Operations Center (EOC) might respond to the alias EOC so you don’t have to remember the exact callsign used. It is common for digipeaters to respond to the alias <b>TEST</b>.</p>";
helpText["ALT"] = "<p>Altitude in meters.</p>";
helpText["ALTITUDE"] = "<p>Altitude in meters.</p>";
helpText["ARATE"] = "<p>Select the <i>sample-rate</i> which is number of audio samples per second.</p><p>The default is 44100. Other standard values are 22050 and 11025.</p><p>When using a normal audio interface (built in to motherboard or USB adapter), it’s generally best to take the default (leave blank/empty).</p><p>This would be necessary when using a software defined radio which tend to use rates like 48000 or 24000.</p>";
helpText["CHANNEL"] = "<p>You can have up to 6 channels. Specify options for each channel like this:<br/><b>CHANNEL 0</b><br/><i>Then include options for first (left) or only channel of first device</i><br/><b>CHANNEL 1</b><br/><i>Then include options for second channel if first device is operating in stereo.</i></p><p><p>See the <a href='USER-GUIDE.html' target='guide'>User's Guide</a>, Section 9.2</p>";
helpText["COMMENT"] = "<p>Name, location, announcements, etc.</p>";
helpText["COMMENTCMD"] = "<p>Run specified command and insert result after the fixed part of comment.</p><p><i>The original intention was to insert base 91 compressed telemetry.</i></p>";
helpText["COMPRESS"] = "<p>Use 1 for compressed format, 0 for uncompressed.</p><p><i>Note that power/height/gain gets converted to single radio range value in the compressed format.</i></p>";
helpText["CON"] = "<p>Connected Packet Indicator (CON)</p><p>This can be mapped to a GPIO, ie. <b>GPIO 22</b> or serial pin, ie. <b>COM1 RTS</b></p><p>Minus in front of the GPIO number means invert the signal.</p><p>See the <a href='USER-GUIDE.html' target='guide'>User's Guide</a>, Section 9.2.10 for details</p>";
helpText["DCD"] = "<p>Data Carrier Detect (DCD)</p><p>This can be mapped to a GPIO, ie. <b>GPIO 20</b> or serial pin, ie. <b>COM1 RTS</b></p><p>Minus in front of the GPIO number means invert the signal.</p><p>See the <a href='USER-GUIDE.html' target='guide'>User's Guide</a>, Section 9.2.9 for details</p>";
helpText["DEDUPE"] = "<p>Duplicates are not transmitted if the same thing was transmitted within the DEDUPE number of seconds.</p>";
helpText["DELAY"] = "<p>Time, in minutes or minutes:seconds, to delay before sending first time. For example 2 for 2 minutes or 0:30 for 30 seconds.</p>";
helpText["DEST"] = "<p>Explicit destination field for AX.25 packet.</p><p>Normally you will want the default which identifies the software version.</p><p><b>SPEECH</b>, <b>MORSE</b>, and <b>DTMF</b> are special cases.</p><p>See the <a href='USER-GUIDE.html' target='guide'>User's Guide</a>, Section 9.8.1 for details</p>";
helpText["DIR"] = "<p>One of 8 directions, N, NE, E, SE, S, SW, W, or NW, for a directional antenna. Default is omni-directional.</p>";
helpText["DTMF"] = "<p>Enable the DTMF decoder on the desired channel in the configuration file</p>";
helpText["DWAIT"] = "<p>we wait for the DWAIT time. Normally this is zero. This is used only for specific situations where the radio can’t turn around from receive to transmit fast enough.</p><p>Integer Value x10ms.";
helpText["EASTING"] = "<p>UTM coordinate. See <a href='https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system' target='UTM'>Universal Transverse Mercador</a> article.</p>";
helpText["EFFORT"] = "<p><i>effort_level</i> indicates the amount of effort to modify the frame to get a valid CRC.<br/>0 means no attempt.<br/>1 means try changing single bits. (default)<br/>2 means try changing two adjacent bits.</p>"
helpText["EMAXFRAME"] = "<p><b>CONNECTED MODE OPTION</b><br/>Max frames to send before waiting for acknowledgement. <b>Extended</b> mode (v2.2). Default 32. Maximum 63.</p><p>See the <a href='USER-GUIDE.html' target='guide'>User's Guide</a>, Section 10.3 for details</p>";
helpText["EVERY"] = "<p>Time, in minutes or minutes:seconds, between transmissions.</p><p>Default is 10 minutes.</p><p>Use an extremely long interval (like 1000000 for around two years) here to get a one time transmission</p>";
helpText["EXPRESSION"] = "<p>The filter expression is loosely based on <a href'http://www.aprs-is.net/javaprsfilter.aspx' target='new'>Server-side Filter Commands</a> with the addition of logical operators to combine the filter results.</p><p>For example, you could decide to digipeat only telemetry originating from WB2OSZ or object reports not within a certain distance of a given location.<br/><br/><b>FILTER 0 0 ( t/t & b/WB2OSZ ) | ( t/o & ! r/42.6/-71.3/50 )</b><br/></p><p>It’s not necessary to put quotes around the filter expression even though it contains spaces.</p>";
helpText["FIX_BITS"] = "<p>Normally we want to reject any received frame if the CRC is not perfect. Dire Wolf can optionally try to fix a small number of corrupted bits. <i>Fix</i> is probably too strong of a word. It’s really guessing and there is no guarantee that it is right.</p><p>See the <a href='USER-GUIDE.html' target='guide'>User's Guide</a>, Section 9.2.6 for details</p>";
helpText["FRACK"] = "<p><b>CONNECTED MODE OPTION</b><br/>Number of seconds to wait for acknowledgement to transmission. Default 3.</p><p>See the <a href='USER-GUIDE.html' target='guide'>User's Guide</a>, Section 10.3 for details</p>";
helpText["FREQ"] = "<p>Where to contact you by voice or radio frequency for some other entity, in mHz.</p>";
helpText["FROM"] = "<p>Channel number to take packets from.</p>";
helpText["FULLDUP"] = "<p>Full Duplex (for Satellite, Repeater, ...)</p><p>The output will contain 1 for <b>On</b> and 0 for <b>Off</b></p>";
helpText["GAIN"] = "<p>Antenna gain in dBi.</p>";
helpText["GPSD"] = "<p>An alternative method is available on Linux. “gpsd” (http://www.catb.org/gpsd/ ) allows multiple applications to share the GPS receiver at the same time. You must install “gpsd” and have it running. Add the GPSD item to the configuration file. If the GPSD server process is running on a different computer, you can specify the host name or address.</p><p>See the <a href='USER-GUIDE.html' target='guide'>User's Guide</a>, Section 9.7.2 for details</p>";
helpText["GPSNMEA"] = "<p>Direct connection of a GPS receiver, input port, eg. <b>COM12</b> or <b>/dev/ttyUSB0</b></p><p>See the <a href='USER-GUIDE.html' target='guide'>User's Guide</a>, Section 9.7.1 for details</p>";
helpText["HEIGHT"] = "<p>Antenna height in feet.</p>";
helpText["IGFILTER"] = "<p>You will probably want to apply a filter for what packets will be obtained from the server.</p><p>Read about <a href='http://www.aprs-is.net/javaprsfilter.aspx' target='new'>Server Side filters</a></p><p>This example means that I only want to get <b>messages</b> within 50 km of my station.<br/><br/><b>IGFILTER t/m/WB2OSZ-5/50</b></p><p>The Internet Servers will often send more than what you are expecting, so you might want to apply an additional an additional client side filter</p><p>See the <a href='USER-GUIDE.html' target='guide'>User's Guide</a>, Section 9.9 for details</p>";
helpText["IGLOGIN"] = "<p>Your login callsign and passcode</p><p>If you need a passcode use this <a href='https://www.google.com/search?q=aprs+login+passcode+generator' target='passcode'>search</p>.</p><p>See the <a href='USER-GUIDE.html' target='guide'>User's Guide</a>, Section 9.9 for details</p>";
helpText["IGSERVER"] = "<p>Specify the name of a Tier 2 server. The current preferred way is to use one of these regional rotate addresses:<br/><ul><li>noam.aprs2.net - for North America</li><li>soam.aprs2.net - for South America</li><li>euro.aprs2.net - for Europe and Africa</li><li>asia.aprs2.net - for Asia</li><li>aunz.aprs2.net - for Oceania</li></ul></p><p>See the <a href='USER-GUIDE.html' target='guide'>User's Guide</a>, Section 9.9 for details</p>";
helpText["IGTXLIMIT"] = "<p></p><p>See the <a href='USER-GUIDE.html' target='guide'>User's Guide</a>, Section 9.9 for details</p>";
helpText["IGTXVIA"] = "<p>If you want to transmit information from the servers, you need to specify two additional pieces of information: the radio channel and the via path for the packet header</p><p>See the <a href='USER-GUIDE.html' target='guide'>User's Guide</a>, Section 9.9 for details</p>";
helpText["INFO"] = "<p>Handcrafted <b>information</b> part for packet. This is a constant value.</p>";
helpText["INFOCMD"] = "<p>Command to generate <b>information</b> part for packet. This allows each to be different as determined by a user-supplied script.</p>";
helpText["KISSPORT"] = "<p>The KISS protocol can also be used with a network port so Dire Wolf and the client application can be running on different computers. The default is:</p><p><b>KISSPORT 8001</b></p><p>This can also be disabled by specifying 0:</p><p><b>KISSPORT 0</b></p>";
helpText["LAT"] = "<p>Latitude in signed decimal degrees (negative for south) or degrees ^ minutes hemisphere.</p><p><b>42.619</b></p><p><b>42^37.14N</b></p>";
helpText["LOGDIR"] = "<p>Simple, yet versatile, logging is available by using the LOGDIR option in the configuration file.</p><p>In either case, specify the directory (folder) where log files should be written. Use period (“.”) for the current working directory.</p><p>Rather than saving often unreadable raw data, the digested parts are saved in Comma Separated Value (CSV) format. The first line has the names of the fields.</p>";
helpText["LONG"] = "<p>Latitude in signed decimal degrees (negative for west) or degrees ^ minutes hemisphere.</p><p><b>42.619</b></p><p><b>42^37.14E</b></p>";
helpText["MAXFRAME"] = "<p><b>CONNECTED MODE OPTION</b><br/><p>Max frames to send before waiting for acknowledgement.  <b>Basic</b> mode (v2.0). Default 4. Maximum 7.</p><p>See the <a href='USER-GUIDE.html' target='guide'>User's Guide</a>, Section 10.3 for details</p>";
helpText["MAXV22"] = "<p><b>CONNECTED MODE OPTION</b><br/><p>Maximum number of times to attempt v2.2 connection before giving up and trying v2.0 instead.</p><p>See the <a href='USER-GUIDE.html' target='guide'>User's Guide</a>, Section 10.3 for details</p>";
helpText["MESSAGING"] = "<p>Set the APRS Messaging attribute for a position report. i.e. Data Type Indicator will be \“=\” instead of \“!\”. Values are 0 and 1 for Off and On.</p>";
helpText["MODEM"] = "<p>Modem speed, modulation, and options.</p><p>See the <a href='USER-GUIDE.html' target='guide'>User's Guide</a>, Section 9.2.2 for details</p>";
helpText["MYCALL"] = "<p>Set the channel callsign of your station along with SSID</p><p>Multiple radio channels can use the same or different station identifiers. This is required for beaconing or digipeating. Example:</p><p><b>MYCALL WB2OSZ-5</b></p><p>The AX.25 specification requires that the call is a maximum of 6 upper case letters and digits. The substation id (SSID), if specified, must be in the range of 1 to 15.";
helpText["NORTHING"] = "<p>UTM coordinate. See <a href='https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system' target='UTM'>Universal Transverse Mercador</a> article.</p>";
helpText["NULLMODEM"] = "<p>A configuration option like this:</p><p><b>NULLMODEM COM3</b></p><p>will provide a dumb KISS TNC on COM3. You need to provide either a <i>null modem</i> cable to another serial port, used by the application, or configure a virtual null modem cable.</p>";
helpText["OBJNAME"] = "<p>Name for object, up to 9 characters. Applies only to OBEACON.</p>";
helpText["OFFSET"] = "<p>Transmit offset in mHz.</p>";
helpText["OVERLAY"] = "<p>A single upper case letter or digit overlay character.</p>";
helpText["PACLEN"] = "<p><b>CONNECTED MODE OPTION</b><br/><p>Maximum size for information part of a frame. Default 256. Maximum 2048.</p><p>See the <a href='USER-GUIDE.html' target='guide'>User's Guide</a>, Section 10.3 for details</p>";
helpText["PASSALL"] = "<p>PASSALL means allow the frame through after exhausting all fix up attempts. Occasionally you might see something resembling a valid packet but most of the time it will just be random noise.</p>";
helpText["PERSIST"] = "<p>See the <a href='USER-GUIDE.html' target='guide'>User's Guide</a>, Section 9.2.12 for details</p>";
helpText["POWER"] = "<p>Transmitter power in watts.</p>";
helpText["PREEMPTIVE"] = "<p>See the <a href='USER-GUIDE.html' target='guide'>User's Guide</a>, Section 9.5.10 for details</p>";
helpText["PTT"] = "<p>Push to talk (PTT)</p><p>This can be via GPIO, RIGCTL, HAMLIB, Serial Pin, or Parallel Pin control.</p><p>Minus in front of the GPIO number means invert the signal.</p><p>See the <a href='USER-GUIDE.html' target='guide'>User's Guide</a>, Section 9.2.8 for details</p>";
helpText["RETRY"] = "<p><b>CONNECTED MODE OPTION</b><br/>Number of times to retry before giving up.  Default 10.</p><p>See the <a href='USER-GUIDE.html' target='guide'>User's Guide</a>, Section 10.3 for details</p>";
helpText["SANITY"] = "<p><i>sanity_check</i> adds a heuristic to guess whether the fix up attempt was successful.<br/><b>APRS</b> tests whether it looks like a valid APRS packet. (default)<br/><b>AX25</b> only checks the address part. Suitable for non-APRS packet.<br/><b>NONE</b> bypasses the sanity check.</p>";
helpText["SENDTO"] = "<p>Radio channel for transmission or “IG” to send to Internet Gateway.</p><p>Default is the first, or only, radio channel 0.</p><p>\“R\” followed by a number simulates signal received on that channel.</p>";
helpText["SLOTTIME"] = "<p>See the <a href='USER-GUIDE.html' target='guide'>User's Guide</a>, Section 9.2.12 for details</p>";
helpText["SPEECH"] = "<p>There are many software applications that will convert text to speech. Dire Wolf can utilize these to transmit information with a synthesized voice.</p><p>See the <a href='USER-GUIDE.html' target='guide'>User's Guide</a>, Section 9.11 for details</p></p>";
helpText["SPEED"] = "<p>Modem Speed in bps</p>";
helpText["SYMBOL"] = "<p>Two different styles are available:<br/>(a) Exactly two characters specifying symbol table / overlay and the symbol code.<br/>(b) A substring of the description.</p><p>See the <a href='USER-GUIDE.html' target='guide'>User's Guide</a>, Section 9.8.1 for details</p><p><a href='http://aprs.org/symbols/symbolsX.txt' target='symbols'>Specifications</a></p>";
helpText["TO"] = "<p>Channel to send packet TO: Channel #, SPEECH, IG, DTMF, or MORSE</p>";
helpText["TONE"] = "<p>CTCSS tone required for specified radio frequency in Hz.</p>";
helpText["TXDELAY"] = "<p>See the <a href='USER-GUIDE.html' target='guide'>User's Guide</a>, Section 9.2.12 for details</p>";
helpText["TXINH"] = "<p>For the <b><u>Linux</u></b> version only, it is possible to have a GPIO control input to prevent transmitting. This might be used with a squelch signal from the receiver. A site with multiple radios could use this to give priority to the other radio service when it is active.</p><p><b>TXINH GPIO 17</b><br/><b>TXINH GPIO -17</b></p><p>As with PTT, minus in front of the GPIO number means invert the signal.</p>";
helpText["TXTAIL"] = "<p>See the <a href='USER-GUIDE.html' target='guide'>User's Guide</a>, Section 9.2.12 for details</p>";
helpText["VIA"] = "<p>Digipeater path. Default none.</p>";
helpText["WAYPOINT"] = "<p>Waypoint Sentence Generation APRS Position and Object Reports can be converted to NMEA Sentences for display on the AvMap G5 / G6 or other mapping devices or applications. The configuration file item has the following format:<br/> WAYPOINT serial-port [ formats ]</p><p>See the <a href='USER-GUIDE.html' target='guide'>User's Guide</a>, Section 9.7.3 for details</p>";
helpText["WIDE"] = "<p>See the <a href='USER-GUIDE.html' target='guide'>User's Guide</a>, Section 9.5.5 for details</p>";
helpText["ZONE"] = "<p>Zone with latitude band for UTM coordinates.</p>";

// console.log(helpText);


