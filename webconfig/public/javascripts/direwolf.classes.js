"use strict";

function isSet(v) {
	if (v == null) return false;
	if (v.length == 0) return false;
	return true;
}

class Test {
	constructor(name){
		this.name = name;
	}
	addKeyVal(key,val) {
		Object.defineProperty(this,key, {
			value: val,
			writeable: true,
			enumerable: true,
			configurable: true
		});
	}

	asJSON(){
		return this;
	}
}
		

class Adevice {
	constructor(){
		this.name = null;
		this.input = null;
		this.output = null;
		this.ARATE = null;
		this.ACHANNELS = 1; // Defaults to 1
		this.channels = [];
	}
	
	setAdeviceName(name) {
		var name1 = name.toUpperCase();
		if(/^ADEVICE[0-2]?/.test(name1)) {
		this.name = name1;  
		} else {
			this.name = null;
		}
	}

	getAdeviceName() {
		return this.name;
	}

	setInput(input) {
		this.input = input;
	}

	getInput(){
		return this.input;
	}

	setOutput(output) {
		this.output = output; // Optional, defaults to input
	}

	getOutput(){
		return this.output;
	}

	setARATE(ARATE){
		this.ARATE = ARATE;
	}

	getARATE(){
		return this.ARATE;
	}

	setACHANNELS(ACHANNELS){
		this.ACHANNELS = ACHANNELS;
	}

	getACHANNELS(){
		return this.ACHANNELS;
	}


	addChannel(channel) {
		this.channels.push(channel);
	}

	toString() {
		if (this.name == null || this.input == null) {
			console.log("ADEVICE is not formed properly");
			return "# ADEVICE not set";
		}
		var str = "# " + this.name;
		str += "\n" + this.name + " " + this.input;
		if (this.output !== null) {
			str += " " + this.output;
		}
		str += "\nACHANNELS " + this.ACHANNELS;
		if (isSet(this.ARATE)) str += "\nARATE " + this.ARATE;
		for (var i = 0; i < this.channels.length; i++) {
			str += '\n' + this.channels[i].toString();
		}
		return str;	
	}

	asJSON() {
		return JSON.stringify(this);
	}
}

class Beacon {
	constructor(){
		this.DELAY = null;
		this.EVERY = null;
		this.SENDTO = null;
		this.DEST = null;
		this.VIA = null;	
	}

	setDELAY(DELAY) {
		this.DELAY = DELAY;
	}
	getDELAY(){
		return this.DELAY;
	}

	setEVERY(EVERY) {
		this.EVERY = EVERY;
	}
	getEVERY(){
		return this.EVERY;
	}

	setSENDTO(SENDTO) {
		this.SENDTO = SENDTO;
	}
	getSENDTO(){
		return this.SENDTO;
	}

	setDEST(DESTINATION) {
		this.DEST = DESTINATION;
	}
	getDEST(){
		return this.DEST;
	}

	setVIA(VIA) {
		this.VIA = VIA;
	}
	getVIA(){
		return this.VIA;
	}

	getElements() {
		var elements = "";
		for (var prop in this) if (this[prop] != null) elements += " " + prop + "=" + this[prop];
		return elements;
	}
	
	toString() {
		return this.constructor.name.toUpperCase() + this.getElements();
		console.log(this.constructor.name);
	}

	asJSON() {
		return JSON.toString(this);
	}


}

class Pbeacon extends Beacon {
	constructor(){
		super();
		this.MESSAGING = null;
		this.LAT = null;
		this.LONG = null;
		this.ZONE = null;
		this.EASTING = null;
		this.NORTHING = null;
		this.ALTITUDE = null;
		this.SYMBOL = null;
		this.OVERLAY = null;
		this.POWER = null;
		this.HEIGHT = null;
		this.GAIN = null;
		this.DIR = null;
		this.FREQ = null;
		this.TONE = null;
		this.OFFSET = null;
		this.COMMENT = null;
		this.COMMENTCMD = null;
		this.COMPRESS = null;
	}

	setMESSAGING(MESSAGING) {
		this.MESSAGING = MESSAGING;
	}
	getMESSAGING(){
		return this.MESSAGING;
	}

	setLAT(LAT) {
		this.LAT = LAT;
	}
	getLAT(){
		return this.LAT;
	}

	setLONG(LONG) {
		this.LONG = LONG;
	}
	getLONG(){
		return this.LONG;
	}

	setZONE(ZONE) {
		this.ZONE = ZONE;
	}
	getZONE(){
		return this.ZONE;
	}

	setEASTING(EASTING) {
		this.EASTING = EASTING;
	}
	getEASTING(){
		return this.EASTING;
	}

	setNORTHING(NORTHING) {
		this.NORTHING = NORTHING;
	}
	getNORTHING(){
		return this.NORTHING;
	}

	setALT(ALT) {
		this.ALT = ALT;
	}
	getALT(){
		return this.ALT;
	}

	setSYMBOL(SYMBOL) {
		this.SYMBOL = SYMBOL;
	}
	getSYMBOL(){
		return this.SYMBOL;
	}

	setOVERLAY(OVERLAY) {
		this.OVERLAY = OVERLAY;
	}
	getOVERLAY(){
		return this.OVERLAY;
	}

	setPOWER(POWER) {
		this.POWER = POWER;
	}
	getPOWER(){
		return this.POWER;
	}

	setHEIGHT(HEIGHT) {
		this.HEIGHT = HEIGHT;
	}
	getHEIGHT(){
		return this.HEIGHT;
	}

	setGAIN(GAIN) {
		this.GAIN = GAIN;
	}
	getGAIN(){
		return this.GAIN;
	}

	setDIR(DIR) {
		this.DIR = DIR;
	}
	getDIR(){
		return this.DIR;
	}

	setFREQ(FREQ) {
		this.FREQ = FREQ;
	}
	getFREQ(){
		return this.FREQ;
	}

	setTONE(TONE) {
		this.TONE = TONE;
	}
	getTONE(){
		return this.TONE;
	}

	setOFFSET(OFFSET) {
		this.OFFSET = OFFSET;
	}
	getOFFSET(){
		return this.OFFSET;
	}

	setCOMMENT(COMMENT) {
		this.COMMENT = COMMENT;
	}
	getCOMMENT(){
		return this.COMMENT;
	}

	setCOMMENTCMD(COMMENTCMD) {
		this.COMMENTCMD = COMMENTCMD;
	}
	getCOMMENTCMD(){
		return this.COMMENTCMD;
	}

	setCOMPRESS(COMPRESS) {
		this.COMPRESS = COMPRESS;
	}
	getCOMPRESS(){
		return this.COMPRESS;
	}
}

class Obeacon extends Pbeacon {
	
	constructor() {
		super();
		this.OBJNAME = null;
	}
	setOBJNAME(OBJNAME) {
		this.OBJNAME = OBJNAME;
	}
	getOBJNAME(){
		return this.OBJNAME;
	}
}

class Cbeacon extends Beacon {

	constructor() {
		super();
		this.INFO = null;
		this.INFOCMD = null;
	}
	setINFO(INFO) {
		this.INFO = INFO;
	}
	getINFO(){
		return this.INFO;
	}

	setINFOCMD(INFOCMD) {
		this.INFOCMD = INFOCMD;
	}
	getINFOCMD(){
		return this.INFOCMD;
	}

}

class Tbeacon extends Pbeacon {

	constructor() {
		super();
		delete this.LAT;
		delete this.LONG;
		delete this.ZONE;
		delete this.EASTING;
		delete this.NORTHING;
	}

}

class Ibeacon extends Beacon {
	
	constructor() {
		super();
	}
}

class Channel {

	constructor(number) {
		this.CHANNEL = number;
		this.MODEM = new Modem();
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
		this.FULLDUP = 0;
		this.FIX_BITS = new FixBits();
		this.FRACK = null;
		this.RETRY = null;
		this.PACLEN = null;
		this.MAXFRAME = null;
		this.EMAXFRAME = null;
		this.MAXV22 = null;


		this.DTMF = false;
	}
	setChannel(number) {
		this.CHANNEL = number;
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
	setFRACK(FRACK) {
		this.FRACK = FRACK;
	}
	getFRACK(){
		return this.FRACK;
	}

	setRETRY(RETRY) {
		this.RETRY = RETRY;
	}
	getRETRY(){
		return this.RETRY;
	}

	setPACLEN(PACLEN) {
		this.PACLEN = PACLEN;
	}
	getPACLEN(){
		return this.PACLEN;
	}

	setMAXFRAME(MAXFRAME) {
		this.MAXFRAME = MAXFRAME;
	}
	getMAXFRAME(){
		return this.MAXFRAME;
	}

	setEMAXFRAME(EMAXFRAME) {
		this.EMAXFRAME = EMAXFRAME;
	}
	getEMAXFRAME(){
		return this.EMAXFRAME;
	}

	setMAXV22(MAXV22) {
		this.MAXV22 = MAXV22;
	}
	getMAXV22(){
		return this.MAXV22;
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

	setFULLDUP(FULLDUP) {
		this.FULLDUP = FULLDUP;
	}
	getFULLDUP() {
		return this.FULLDUP;
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
		
		let str = "# CHANNEL " + this.CHANNEL;
		str += "\nCHANNEL " + this.CHANNEL;
		if (this.MODEM != null) str += '\n' + this.MODEM.toString();
		if (this.MYCALL != null) str += "\nMYCALL " + this.MYCALL;
		str += '\n' + this.FIX_BITS.toString();
		if (this.PTT != null) str += "\nPTT " + this.PTT;
		if (this.DCD != null) str += "\nDCD " + this.DCD;
		if (this.CON != null) str += "\nCON " + this.CON;
		if (this.TXINH != null) str += "\nTXINH " + this.TXINH;
		if (this.DWAIT != null) str += "\nDWAIT " + this.DWAIT;
		if (this.SLOTTIME != null) str += "\nSLOTTIME " + this.SLOTTIME;
		if (this.PERSIST != null) str += "\nPERSIST " + this.PERSIST;
		if (this.TXDELAY != null) str += "\nTXDELAY " + this.TXDELAY;
		if (this.TXTAIL != null) str += "\nTXTAIL " + this.TXTAIL;
		if (this.FULLDUP != null) str += "\nFULLDUP " + this.FULLDUP;
		if (this.DTMF) str += "\nDTMF";
		return str;
	}			
	
	asJSON() {
		return JSON.toString(this);
	}
}

class Digipeater {
	constructor(from,to) {
		this.FROM = from;
		this.TO = to;
		this.ALIASES = null;
		this.WIDE = null;
		this.PREEMPTIVE = null;
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
		var str =  "DIGIPEAT " + this.FROM + " " + this.TO + " " + this.ALIASES + " " + this.WIDE;
		if (this.PREEMPTIVE != null) str += " " + this.PREEMPTIVE;
		return str;
	}

	asJSON() {
		return JSON.stringify(this);
	}


}

class Cdigipeater extends Digipeater {
	constructor(from,to) {
		super(from,to);
		delete this.WIDE;
		delete this.PREEMPTIVE;
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

	
	toString() {
		var str = "CDIGIPEAT " + this.FROM + " " + this.TO;
		if (this.ALIASES != null) str += " " + this.ALIASES;
		return str;
	}

	asJSON() {
		return JSON.stringify(this);
	}
}


class Direwolf {
	constructor() {
		this.AGWPORT = 8000;
		this.KISSPORT = 8001;
		this.SPEECH = null;
		this.DEDUPE = 30;
		this.IGSERVER = null
		this.IGLOGIN = null;
		this.IGTXLIMIT = null;
		this.IGTXVIA = null;
		this.IGFILTER = null;
		this.LOGDIR = null;
		this.GPSD = null;
		this.GPSNMEA = null;
		this.WAYPOINT = null;
		this.adevices = [];
		this.beacons = [];
		this.digipeaters = [];
		this.filters = [];
		this.ttcommands = [];
	}

	setAGWPORT(AGWPORT) {
		this.AGWPORT = AGWPORT;
	}
	getAGWPORT(){
		return this.AGWPORT;
	}

	setKISSPORT(KISSPORT) {
		this.KISSPORT = KISSPORT;
	}
	getKISSPORT(){
		return this.KISSPORT;
	}

	setDEDUPE(DEDUPE) {
		this.DEDUPE = DEDUPE;
	}
	getDEDUPE(){
		return this.DEDUPE;
	}

	setIGSERVER(IGSERVER) {
		this.IGSERVER = IGSERVER;
	}
	getIGSERVER(){
		return this.IGSERVER;
	}

	setIGLOGIN(IGLOGIN) {
		this.IGLOGIN = IGLOGIN;
	}
	getIGLOGIN(){
		return this.IGLOGIN;
	}

	setIGTXLIMIT(IGTXLIMIT) {
		this.IGTXLIMIT = IGTXLIMIT;
	}
	getIGTXLIMIT(){
		return this.IGTXLIMIT;
	}

	setIGTXVIA(IGTXVIA) {
		this.IGTXVIA = IGTXVIA;
	}
	getIGTXVIA(){
		return this.IGTXVIA;
	}

	setIGFILTER(IGFILTER) {
		this.IGFILTER = IGFILTER;
	}
	getIGFILTER(){
		return this.IGFILTER;
	}

	setLOGDIR(LOGDIR) {
		this.LOGDIR = LOGDIR;
	}
	getLOGDIR(){
		return this.LOGDIR;
	}

	setSPEECH(SPEECH) {
		this.SPEECH = SPEECH;
	}
	getSPEECH(){
		return this.SPEECH;
	}

	setGPSD(GPSD) {
		this.GPSD = GPSD;
	}
	getGPSD(){
		return this.GPSD;
	}

	setGPSNMEA(GPSNMEA) {
		this.GPSNMEA = GPSNMEA;
	}
	getGPSNMEA(){
		return this.GPSNMEA;
	}

	setWAYPOINT(WAYPOINT) {
		this.WAYPOINT = WAYPOINT;
	}
	getWAYPOINT(){
		return this.WAYPOINT;
	}

	addAdevice(adevice){
		this.adevices.push(adevice);
	}

	getAdevices() {
		return this.adevices;
	}

	addBeacon(beacon){
		this.beacons.push(beacon);
	}

	getBeacons() {
		return this.beacons;
	}

	addDigipeater(digipeater){
		this.digipeaters.push(digipeater);
	}

	getDigipeaters() {
		return this.digipeaters;
	}

	addFilter(filter){
		this.filters.push(filter);
	}

	getFilters(){
		return this.filters;
	}

	addTTCommand(ttCommand) {
		this.ttcommands.push(ttCommand);
	}

	getTTCommmands() {
		return this.ttcommands;
	}


	toString() {
		var additional = "# Created by Direwolf Configuration Web Editior\n";
		if (this.adevices.length > 0) additional += "# Audio Devices\n";
		for (var i = 0; i < this.adevices.length; i++) {
			additional += this.adevices[i] + '\n';
		}
		if (this.beacons.length > 0) additional += "# Beacons\n";
		for (var i = 0; i < this.beacons.length; i++) {
			additional += this.beacons[i] + '\n';
		}
		if (this.digipeaters.length > 0) additional += "# Digipeater Definitions\n";
		for (var i = 0; i < this.digipeaters.length; i++) {
			additional += this.digipeaters[i].toString() + '\n';
		}
		if (this.filters.length > 0) additional += "# Filter Definitions\n";
		for (var i = 0; i < this.filters.length; i++) {
			additional += this.filters[i].toString() + '\n';
		}
		if (this.ttcommands.length > 0) additional += "# Touch Tone Rules and Objects\n";
		for (var i = 0; i < this.ttcommands.length; i++) {
			additional += this.ttcommands[i].toString() + '\n';
		}
		additional += "# Common Settings\n";
		if (isSet(this.DEDUPE)) additional += "DEDUPE " + this.DEDUPE + "\n";
		if (isSet(this.AGWPORT)) additional += "AGWPORT " +  this.AGWPORT + "\n";
		if (isSet(this.KISSPORT)) additional += "KISSPORT " +  this.KISSPORT + "\n";
		if (isSet(this.LOGDIR)) additional += "LOGDIR " + this.LOGDIR + "\n" ;
		if (isSet(this.SPEECH)) additional += "SPEECH " + this.SPEECH + "\n" ;
		if (isSet(this.GPSD)) additional += "GPSD " + this.GPSD + "\n";
		if (isSet(this.GPSNMEA)) additional += "GPSNMEA " + this.GPSNMEA + "\n";
		if (isSet(this.WAYPOINT)) additional += "WAYPOINT " + this.WAYPOINT + "\n";
		additional += "# IGate Settings\n";
		if (isSet(this.IGSERVER)) additional += "IGSERVER " + this.IGSERVER + "\n";
		if (isSet(this.IGLOGIN)) additional += "IGLOGIN " + this.IGLOGIN + "\n" ;
		if (isSet(this.IGTXLIMIT)) additional += "IGTXLIMIT " + this.IGTXLIMIT + "\n" ;
		if (isSet(this.IGTXVIA)) additional += "IGTXVIA " + this.IGTXVIA + "\n" ;
		if (isSet(this.IGFILTER)) additional += "IGFILTER " + this.IGFILTER + "\n" ;

		return additional;
	}
	
	asJSON(){
		return JSON.stringify(this);
	}

	ParseConfig(f) {
		var raw = f.split(/\r?\n/);
		var channels = [];
		var adevices = [];
		var curdevice = null;
		var curchannel = null;
		
		for (var i = 0; i < raw.length ; i++) {
			let line = raw[i].trim();
			let tokens = line.split(/\s+/);
			switch(tokens[0])
			{
				case "ARATE" :
					adevices[curdevice].setARATE(tokens[1]);
					break;
				case "ACHANNELS" :
					adevices[curdevice].setACHANNELS(tokens[1]);
					break;
				case (tokens[0].match(/^ADEVICE[0-2]?$/) || {}).input: 
					curdevice = tokens[0];
					if (curdevice === "ADEVICE") curdevice = "ADEVICE0";
					adevices[curdevice] = new Adevice();
					adevices[curdevice].setAdeviceName(curdevice);
					adevices[curdevice].setInput(tokens[1]);
					if (tokens.length > 2) {
						adevices[curdevice].setOutput(tokens[2]);
					}
					this.addAdevice(adevices[curdevice]);
					break;
				case (tokens[0].match(/^TT.*?$/) || {}).input:
					let ttCMD = new TTCommand();
					ttCMD.setCOMMAND(tokens[0]);
					ttCMD.setVALUE(line.slice(tokens[0].length));
					this.addTTCommand(ttCMD);
					break;
				case "AGWPORT" :
					this.setAGWPORT(tokens[1]);
					break;
				case "KISSPORT" :
					this.setKISSPORT(tokens[1]);
					break;
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
					this.addFilter(filter);
					break;
				case "CFILTER" :
					var filter = new Cfilter();
					filter.FROM = tokens[1];
					filter.TO = tokens[2];
					filter.EXPRESSION = tokens.slice(3,tokens.length).join(' ');
					this.addFilter(filter);
					break;
				case "FIX_BITS" :
					var fixbits = new FixBits();
					if (tokens[1]) fixbits.setEFFORT(tokens[1]);
					
					if (tokens.length > 2) {
						for (var j=2; j < tokens.length; j++) {
							let sanity = tokens[j].match(/^APRS$|^AX25$|^NONE$/) || "APRS";
							let passall = tokens[j].match(/^PASSALL$/g);
							fixbits.setSANITY(sanity);
							if (passall) fixbits.setPASSALL(passall);
						}
					}
					channels[curchannel].setFixBits(fixbits);
					break;
				case "PTT" :
					channels[curchannel].setPtt(tokens.slice(1,tokens.length).join(' '));
					break;
				case "DCD" :
					channels[curchannel].setDCD(tokens.slice(1,tokens.length).join(' '));
					break;
				case "CON" :
					channels[curchannel].setCON(tokens.slice(1,tokens.length).join(' '));
					break;
				case "TXINH" :
					channels[curchannel].setTXINH(tokens.slice(1,tokens.length).join(' '));
					break;
				case "DEDUPE" :
					this.setDEDUPE(tokens[1]);
					break;
				case "DTMF" :
					channels[curchannel].setDTMF();
					break;
				case "PBEACON" :
					var argstr = line.substring(tokens[0].length,line.length);
					var hash = argstr.match(/(\S+)=(".*?"|\S+)/g);
					var pbeacon = new Pbeacon();
					for (let arg of hash) {
						var [key,val] = arg.split('=');
						key = key.toUpperCase();
						if (pbeacon.hasOwnProperty(key)) {
							pbeacon[key] = val;
						} else {
							console.log("# PBEACON has no " + key);
						}
					}
					this.addBeacon(pbeacon);
					break;
				case "TBEACON" :
					var argstr = line.substring(tokens[0].length,line.length);
					var hash = argstr.match(/(\S+)=(".*?"|\S+)/g);
					var tbeacon = new Tbeacon();
					for (let arg of hash) {
						var [key,val] = arg.split('=');
						key = key.toUpperCase();
						if (tbeacon.hasOwnProperty(key)) {
							tbeacon[key] = val;
						} else {
							console.log("# TBEACON has no " + key);
						}
					}
					this.addBeacon(tbeacon);
					break;
				case "OBEACON" :
					var argstr = line.substring(tokens[0].length,line.length);
					var hash = argstr.match(/(\S+)=(".*?"|\S+)/g);
					var obeacon = new Obeacon();
					for (let arg of hash) {
						var [key,val] = arg.split('=');
						key = key.toUpperCase();
						if (obeacon.hasOwnProperty(key)) {
							obeacon[key] = val;
						} else {
							console.log("# OBEACON has no " + key);
						}
					}
					this.addBeacon(obeacon);
					break;
				case "CBEACON" :
					var argstr = line.substring(tokens[0].length,line.length);
					var hash = argstr.match(/(\S+)=(".*?"|\S+)/g);
					var cbeacon = new Cbeacon();
					for (let arg of hash) {
						var [key,val] = arg.split('=');
						key = key.toUpperCase();
						if (cbeacon.hasOwnProperty(key)) {
							cbeacon[key] = val;
						} else {
							console.log("# CBEACON has no " + key);
						}
					}
					this.addBeacon(cbeacon);
					break;
				case "IBEACON" :
					var argstr = line.substring(tokens[0].length,line.length);
					var hash = argstr.match(/(\S+)=(".*?"|\S+)/g);
					var ibeacon = new Ibeacon();
					for (let arg of hash) {
						var [key,val] = arg.split('=');
						key = key.toUpperCase();
						if (ibeacon.hasOwnProperty(key)) {
							ibeacon[key] = val;
						} else {
							console.log("# IBEACON has no " + key);
						}
					}
					this.addBeacon(ibeacon);
					break;
				case "DIGIPEAT" :
					var digi = new Digipeater(tokens[1],tokens[2]);
					if (typeof tokens[3] !== 'undefined') digi.setALIASES(tokens[3]);
					if (typeof tokens[4] !== 'undefined') digi.setWIDE(tokens[4]);
					if (typeof tokens[5] !== 'undefined') digi.setPREEMPTIVE(tokens[5]);
					this.addDigipeater(digi);
					break;
				case "CDIGIPEAT" :
					var digi = new Cdigipeater(tokens[1],tokens[2]);
					if (typeof tokens[3] !== 'undefined') digi.setALIASES(tokens[3]);
					this.addDigipeater(digi);
					break;
				case "IGSERVER" :
					this.setIGSERVER(tokens[1]);
					break;
				case "IGLOGIN" :
					this.setIGLOGIN(tokens.slice(1,tokens.length).join(' '));
					break;
				case "IGTXLIMIT" :
					this.setIGTXLIMIT(tokens.slice(1,tokens.length).join(' '));
					break;
				case "IGTXVIA" :
					this.setIGTXVIA(tokens.slice(1,tokens.length).join(' '));
					break;
				case "IGFILTER" :
					this.setIGFILTER(tokens.slice(1,tokens.length).join(' '));
					break;
				case "SPEECH" :
					this.setSPEECH(tokens[1]);
					break;
				case "GPSD" :
					this.setGPSD(tokens[1]);
					break;
				case "GPSDNMEA" :
					this.setGPSNMEA(tokens[1]);
					break;
				case "WAYPOINT" :
					this.setWAYPOINT(tokens.slice(1,tokens.length).join(' '));
					break;
				case "LOGDIR" :
					this.setLOGDIR(tokens[1]);
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
				case "FULLDUP" :
					channels[curchannel].setFULLDUP(tokens[1]);
					break;
				default :
					console.log("# Reject - " + line);
					break;
			}
		}
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

	getParamString() {
		if (this.FROM != null && this.TO != null && this.EXPRESSION != null) {
			return this.FROM + " " + this.TO + " " + this.EXPRESSION;
		} else {
			return null;
		}
	}

	toString() {
		var params = this.getParamString();
		if (params == null) return "# " + this.constructor.name.toUpperCase() + " malformed"
		else return this.constructor.name.toUpperCase() + " " + params;
	}

	asJSON() {
		return JSON.stringify(this);
	}
}

class Cfilter extends Filter{
	constructor() {
		super();
	}
}		
	

class FixBits {
	constructor() {
		this.EFFORT = 1;
		this.SANITY = "APRS";
		this.PASSALL = "";
	}
	
	setEFFORT(effort) {
		this.EFFORT = effort;
	}

	getEFFORT() {
		return this.EFFORT;
	}

	setSANITY(SANITY) {
		this.SANITY = SANITY;
	}

	getSANITY() {
		return this.SANITY;
	}

	setPASSALL(PASSALL) {
		this.PASSALL = PASSALL;
	}

	getPASSALL() {
		return this.PASSALL;
	}

	toString() {
		let str = "FIX_BITS " + this.EFFORT + " " + this.SANITY + " " + this.PASSALL;
		return str.trim();
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
		if (isSet(this.SPEED)) {
			let str = this.constructor.name.toUpperCase() + " " + this.SPEED;
			for (var i=0; i < this.options.length ; i++) {
				str += " " + this.options[i];
			}
			return str;
		} else {
			return "";
		}
	}

	asJSON() {
		return JSON.stringify(this);
	}

}

class TTCommand {
	constructor() {
		this.COMMAND = null;
		this.VALUE = null;
	}
	
	setCOMMAND(COMMAND) {
		this.COMMAND = COMMAND;
	}

	getCOMMAND() {
		return this.COMMAND;
	}
	
	setVALUE(VALUE) {
		this.VALUE = VALUE;
	}

	getVALUE() {
		return this.VALUE;
	}

	toString() {
		if (isSet(this.COMMAND)) {
			return this.COMMAND + " " + this.VALUE;
		} else {
			return "";
		}
	}

	asJSON() {
		return JSON.stringify(this);
	}
}

