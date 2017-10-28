"use strict";

class Adevice {
	constructor(){
		this.name = null;
		this.input = null;
		this.output = null;
		this.ARATE = 44100;
		this.ACHANNELS = 1; // Defaults to 1
		this.channels = [];
	}
	
	setAdeviceName(name) {
		var name1 = name.toUpperCase();
		// should be ADEVICE, ADEVICE0 (equivalent to ADEVICE), ADEVICE1, or ADEVICE2
		if(/^ADEVICE[0-2]?/.test(name1)) {
		this.name = name1;  
		} else {
			this.name = null;
		}
	}

	setInput(input) {
		this.input = input;
	}

	setOutput(output) {
		this.output = output; // Optional, defaults to input
	}

	setARATE(ARATE){
		this.ARATE = ARATE;
	}

	setACHANNELS(ACHANNELS){
		this.ACHANNELS = ACHANNELS;
	}


	addChannel(channel) {
		this.channels.push(channel);
	}

	toString() {
		if (this.name == null || this.input == null) {
			console.log("ADEVICE is not formed properly");
			return "";
		}
		var str = this.name + " " + this.input;
		if (this.output !== null) {
			str += " " + this.output;
		}
		str += "\nACHANNELS " + this.ACHANNELS;
		str += "\nARATE " + this.ARATE;
		for (var i = 0; i < this.channels.length; i++) {
			str += '\n' + this.channels[i].toString();
		}
		return str;	
	}
}

class Beacon {
	constructor(){
		
	}
}

class Channel {

	constructor(number) {
		this.CHANNEL = number;
		this.MODEM = null;
		this.MYCALL = null
		this.PTT = null;
		this.DCD = null;
		this.CON = null;
		this.TXINH = null;
		this.DWAIT = 0;
		this.SLOTTIME = 10;
		this.PERSIST = 63;
		this.TXDELAY = 30;
		this.TXTAIL = 10;
		this.FIX_BITS = null;
		this.DTMF = false;
	}
	setChannel(number) {
		this.NUMBER = number;
	}
	setMycall(mycall) {
		this.MYCALL = mycall.toUpperCase();
	}
	setModem(modem) {
		this.MODEM = modem;
	}
	setPtt(ptt) {
		this.PTT = ptt;
	}
	setDTMF(){
		this.DTMF = true;
	}
	setFixBits(fixbits) {
		this.FIX_BITS = fixbits;
	}


	setDCD(DCD) {
		this.DCD = DCD;
	}
	getDCD(){
		return this.DCD;
	}


	setCON(CON) {
		this.CON = CON;
	}
	getCON(){
		return this.CON;
	}


	setTXINH(TXINH) {
		this.TXINH = TXINH;
	}
	getTXINH(){
		return this.TXINH;
	}


	setDWAIT(DWAIT) {
		this.DWAIT = DWAIT;
	}
	getDWAIT(){
		return this.DWAIT;
	}


	setSLOTTIME(SLOTTIME) {
		this.SLOTTIME = SLOTTIME;
	}
	getSLOTTIME(){
		return this.SLOTTIME;
	}


	setPERSIST(PERSIST) {
		this.PERSIST = PERSIST;
	}
	getPERSIST(){
		return this.PERSIST;
	}


	setTXDELAY(TXDELAY) {
		this.TXDELAY = TXDELAY;
	}
	getTXDELAY(){
		return this.TXDELAY;
	}


	setTXTAIL(TXTAIL) {
		this.TXTAIL = TXTAIL;
	}
	getTXTAIL(){
		return this.TXTAIL;
	}


	getChannel() {
		return this.CHANNEL;
	}
	getMycall() {
		return this.MYCALL;
	}
	getModem() {
		return this.MODEM;
	}
	getPtt() {
		return this.PTT;
	}
	getDTMF() {
		return this.DTMF;
	}
	getFixBits() {
		return this.FIX_BITS;
	}

	toString() {
		var str = "CHANNEL " + this.CHANNEL;
		if (this.MODEM != null) str += '\n' + this.MODEM.toString();
		if (this.MYCALL != null) str += "\nMYCALL " + this.MYCALL;
		if (this.FIX_BITS != null) str += '\n' + this.FIX_BITS.toString();
		if (this.PTT != null) str += "\nPTT " + this.PTT;
		if (this.DCD != null) str += "\nDCD " + this.DCD;
		if (this.CON != null) str += "\nCON " + this.CON;
		if (this.TXINH != null) str += "\nTXINH " + this.TXINH;
		if (this.DWAIT != null) str += "\nDWAIT " + this.DWAIT;
		if (this.SLOTTIME != null) str += "\nSLOTTIME " + this.SLOTTIME;
		if (this.PERSIST != null) str += "\nPERSIST " + this.PERSIST;
		if (this.TXDELAY != null) str += "\nTXDELAY " + this.TXDELAY;
		if (this.TXTAIL != null) str += "\nTXTAIL " + this.TXTAIL;
		if (this.DTMF) str += "\nDTMF";
		return str;
	}			
	
	asJSON() {
		return JSON.toString(this);
	}
}

class Digipeater {
	constructor(from,to,aliases,wide) {
		this.FROM = from;
		this.TO = to;
		this.ALIASES = aliases;
		this.WIDE = wide;
		this.PREEMPTIVE = "OFF";
	}
	
	setFROM(from) {
		this.FROM = form;
	}

	getFROM() {
		return this.FROM;
	}
	
	setTO(to) {
		this.TO = to;
	}

	getTO() {
		return this.TO;
	}
	
	setALIASES(aliases) {
		this.ALIASES = aliases;
	}

	getALIASES() {
		return this.ALIASES;
	}

	setWIDE(wide) {
		this.WIDE = wide;
	}

	getWIDE() {
		return this.WIDE;
	}

	setPREEMPTIVE(preemptive) {
		this.PREEMPTIVE = preemptive;
	}

	getTPREEMPTIVE() {
		return this.PREEMPTIVE;
	}

	toString() {
		return "DIGIPEAT " + this.FROM + " " + this.TO + " " + this.ALIASES + " " + this.WIDE + " " + this.PREEMPTIVE;
	}
}

class Direwolf {
	constructor() {
		// this.NULLMODEM = null;
		this.adevices = [];
		this.AGWPORT = 8000;
		this.KISSPORT = 8001;
		this.beacons = [];
		this.DEDUPE = 30;
		this.digipeaters = [];
		this.filters = [];
		this.IGSERVER = null
		this.IGLOGIN = null;
		this.IGTXLIMIT = null;
		this.LOGDIR = null;
		this.GPSD = null;
	}
		addAdevice(adevice){
			this.adevices.push(adevice);
		}

		setAGWPORT(AGWPORT){
			this.AGWPORT = AGWPORT;
		}

		setKISSPORT(KISSPORT){
			this.KISSPORT = KISSPORT;
		}

		addBeacon(beacon){
			this.beacons.push(beacon);
		}

		addDigipeater(digipeater){
			this.digipeaters.push(digipeater);
		}

		addFilter(filter){
			this.filters.push(filter);
		}

		setIGSERVER(IGSERVER){
			this.IGSERVER = IGSERVER;
		}

		setIGLOGIN(IGLOGIN){
			this.IGLOGIN = IGLOGIN;
		}

		setIGTXLIMIT(IGTXLIMIT){
			this.IGTXLIMIT = IGTXLIMIT;
		}

		setGPSD(GPSD){
			this.GPSD = GPSD;
		}

		setLOGDIR(LOGDIR) {
			this.LOGDIR = LOGDIR;
		}

		setDEDUPE(dedupe) {
			this.DEDUPE = dedupe;
		}


	toString() {
		var additional = "";
		for (var i = 0; i < this.adevices.length; i++) {
			additional += this.adevices[i] + '\n';
		}
		for (var i = 0; i < this.beacons.length; i++) {
			additional += this.beacons[i] + '\n';
		}
		if (this.DEDUPE !== null) additional += "DEDUPE " + this.DEDUPE + "\n";
		for (var i = 0; i < this.digipeaters.length; i++) {
			additional += this.digipeaters[i].toString() + '\n';
		}
		for (var i = 0; i < this.filters.length; i++) {
			additional += this.filters[i].toString() + '\n';
		}
		if (this.GPSD !== null) additional += "GPSD " + this.GPSD + "\n";
		if (this.AGWPORT !== null) additional += "AGWPORT " +  this.AGWPORT + "\n";
		if (this.KISSPORT !== null) additional += "KISSPORT " +  this.KISSPORT + "\n";
		if (this.IGSERVER != null) additional += "IGSERVER " + this.IGSERVER + "\n";
		if (this.IGLOGIN != null) additional += "IGLOGIN " + this.IGLOGIN + "\n" ;
		if (this.IGTXLIMIT != null) additional += "IGTXLIMIT " + this.IGTXLIMIT + "\n" ;
		if (this.LOGDIR != null) additional += "LOGDIR " + this.LOGDIR + "\n" ;

		return additional;
	}
	
	asJSON(){
		return JSON.stringify(this);
	}
}

class Filter {
	constructor() {
		this.FROM = null;
		this.TO = null;
		this.EXPRESSION = null;
	}

	setFROM(FROM) {
		this.FROM = FROM;
	}
	getFROM(){
		return this.FROM;
	}

	setTO(TO) {
		this.TO = TO;
	}
	getTO(){
		return this.TO;
	}

	setEXPRESSION(EXPRESSION) {
		this.EXPRESSION = EXPRESSION;
	}
	getEXPRESSION(){
		return this.EXPRESSION;
	}

	toString() {
		if (this.FROM != null && this.TO != null && this.EXPRESSION != null) {
			return "FILTER " + this.FROM + " " + this.TO + " " + this.EXPRESSION;
		}
		return "";
	}
}
		

class FixBits {
	constructor() {
		this.EFFORT = 1;
		this.options = [];
	}
	
	setEFFORT(effort) {
		this.EFFORT = effort;
	}

	getEFFORT() {
		return this.EFFORT;
	}

	addOption(option) {
		this.options.push(option);
	}

	getOptions() {
		return options;
	}


	toString() {
		var str = "FIX_BITS " + this.EFFORT;
		for (var i=0; i < this.options.length ; i++) {
			str += " " + this.options[i];
		}
		return str;
	}

	asJSON() {
		return JSON.stringify(this);
	}

}

class Modem {
	constructor() {
		this.SPEED = 1200;
		this.options = [];
	}
	
	addOption(option) {
		this.options.push(option);
	}

	setSpeed(speed) {
		this.SPEED = speed;
	}

	getOptions() {
		return options;
	}

	toString() {
		var str = "MODEM " + this.SPEED;
		for (var i=0; i < this.options.length ; i++) {
			str += " " + this.options[i];
		}
		return str;
	}

	asJSON() {
		return JSON.stringify(this);
	}
}

function joinAddTokens(tokens) {
	return tokens.slice(1,tokens.length).join(' ');
}


function ParseDirewolf(file) {
	var fs = require("fs");
	
	var raw = fs.readFileSync(file,"utf8").split(/\r?\n/);
	var channels = [];
	var adevices = [];
	var curdevice = null;
	var curchannel = null;
	var direwolf = new Direwolf();
	
	for (var i = 0; i < raw.length ; i++) {
		let line = raw[i];
		let tokens = line.split(/\s+/);
		switch(tokens[0])
		{
			case "CHANNEL" :
				curchannel = tokens[1];
				channels[curchannel] = new Channel(curchannel);
				adevices[curdevice].addChannel(channels[curchannel]);
				break;
			case "MYCALL" :
				channels[curchannel].setMycall(tokens[1]);
				break;
			case "MODEM" :
				var modem = new Modem();
				modem.SPEED = tokens[1];
				if (tokens.length > 2) {
					for (var j=2; j < tokens.length; j++) {
						modem.addOption(tokens[j]);
					}
				}
				channels[curchannel].setModem(modem);
				break;
			case "FILTER" :
				var filter = new Filter();
				filter.FROM = tokens[1];
				filter.TO = tokens[2];
				filter.EXPRESSION = tokens.slice(3,tokens.length).join(' ');
				direwolf.addFilter(filter);
				break;
			case "FIX_BITS" :
				var fixbits = new FixBits();
				fixbits.EFFORT = tokens[1];
				if (tokens.length > 2) {
					for (var j=2; j < tokens.length; j++) {
						fixbits.addOption(tokens[j]);
					}
				}
				channels[curchannel].setFixBits(fixbits);
				break;
			case "PTT" :
				channels[curchannel].setPtt(joinAddTokens(tokens));
				break;
			case "DCD" :
				channels[curchannel].setDCD(joinAddTokens(tokens));
				break;
			case "CON" :
				channels[curchannel].setCON(joinAddTokens(tokens));
				break;
			case "TXINH" :
				channels[curchannel].setTXINH(joinAddTokens(tokens));
				break;
			case "DEDUPE" :
				direwolf.setDEDUPE(tokens[1]);
				break;
			case "DTMF" :
				channels[curchannel].setDTMF();
				break;
			case (tokens[0].match(/^ADEVICE[0-2]?$/) || {}).input: 
				curdevice = tokens[0];
				adevices[curdevice] = new Adevice();
				adevices[curdevice].setAdeviceName(tokens[0]);
				adevices[curdevice].setInput(tokens[1]);
				if (tokens.length > 2) {
					adevices[curdevice].setOutput(tokens[2]);
				}
				direwolf.addAdevice(adevices[curdevice]);
				break;
			case "ARATE" :
				adevices[curdevice].setARATE(tokens[1]);
				break;
			case "ACHANNELS" :
				adevices[curdevice].setACHANNELS(tokens[1]);
				break;
			case "AGWPORT" :
				direwolf.setAGWPORT(tokens[1]);
				break;
			case "KISSPORT" :
				direwolf.setKISSPORT(tokens[1]);
				break;
			case "TBEACON" :
				direwolf.addBeacon("TBEACON " + joinAddTokens(tokens));
				break;
			case "OBEACON" :
				direwolf.addBeacon("OBEACON " + joinAddTokens(tokens));
				break;
			case "PBEACON" :
				direwolf.addBeacon("PBEACON " + joinAddTokens(tokens));
				break;
			case "DIGIPEAT" :
				var digi = new Digipeater(tokens[1],tokens[2],tokens[3],tokens[4]);
				if (typeof tokens[5] !== 'undefined') {
					digi.setPREEMPTIVE(tokens[5]);
				}
				direwolf.addDigipeater(digi);
				break;
			case "IGSERVER" :
				direwolf.setIGSERVER(tokens[1]);
				break;
			case "IGLOGIN" :
				direwolf.setIGLOGIN(joinAddTokens(tokens));
				break;
			case "IGTXLIMIT" :
				direwolf.setIGTXLIMIT(joinAddTokens(tokens));
				break;
			case "GPSD" :
				direwolf.setGPSD(tokens[1]);
				break;
			case "LOGDIR" :
				direwolf.setLOGDIR(tokens[1]);
				break;
			case "DWAIT" :
				channels[curchannel].setDWAIT(tokens[1]);
				break;
			case "SLOTTIME" :
				channels[curchannel].setSLOTTIME(tokens[1]);
				break;
			case "PERSIST" :
				channels[curchannel].setPERSIST(tokens[1]);
				break;
			case "TXDELAY" :
				channels[curchannel].setTXDELAY(tokens[1]);
				break;
			case "TXTAIL" :
				channels[curchannel].setTXTAIL(tokens[1]);
				break;
			default :
				console.log("Reject - " + line);
				break;
		}
	}

	return direwolf;
}

var direwolf = ParseDirewolf("direwolf.conf");

console.log(direwolf.asJSON());
console.log('--- end of object');
console.log(direwolf.toString());
console.log('--- end of string');

