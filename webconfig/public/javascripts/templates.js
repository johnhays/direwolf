(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['direwolf'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<fieldset>\n	<legend>Soundcard "
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "</legend>\n	<fieldset class=\"channel\">\n	<legend>General Settings</legend>\n	<div class+\"div-table\">\n		<div class=\"div-table-row\">\n			<div class=\"div-table-col\">Name: </div>\n			<div class=\"div-table-col\" id=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "-name\"><input type=\"text\" onchange=\"direwolf.adevices["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].setAdeviceName(this.value)\" value=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\"/></div>\n		</div>\n		<div class=\"div-table-row\">\n			<div class=\"div-table-col\">Input: </div>\n			<div class=\"div-table-col\" id=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "-input\"><input type=\"text\" onchange=\"direwolf.adevices["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].setInput(this.value)\" value=\""
    + alias4(((helper = (helper = helpers.input || (depth0 != null ? depth0.input : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"input","hash":{},"data":data}) : helper)))
    + "\"/></div>\n		</div>\n		<div class=\"div-table-row\">\n			<div class=\"div-table-col\">Output: </div>\n			<div class=\"div-table-col\" id=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "-output\"><input type=\"text\" onchange=\"direwolf.adevices["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].setOutput(this.value)\" value=\""
    + alias4(((helper = (helper = helpers.output || (depth0 != null ? depth0.output : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"output","hash":{},"data":data}) : helper)))
    + "\"/></div>\n		</div>\n		<div class=\"div-table-row\">\n			<div class=\"div-table-col\">Sample Rate: </div>\n			<div class=\"div-table-col\" id=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "-arate\"><input type=\"number\" onchange=\"direwolf.adevices["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].setARATE(this.value)\" value=\""
    + alias4(((helper = (helper = helpers.ARATE || (depth0 != null ? depth0.ARATE : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ARATE","hash":{},"data":data}) : helper)))
    + "\"/></div>\n		</div>\n		<div class=\"div-table-row\">\n			<div class=\"div-table-col\">Number of Channels: </div>\n			<div class=\"div-table-col\" id=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "-achannels\"><input type=\"number\" onchange=\"direwolf.adevices["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].setACHENNELS(this.value)\" value=\""
    + alias4(((helper = (helper = helpers.ACHANNELS || (depth0 != null ? depth0.ACHANNELS : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ACHANNELS","hash":{},"data":data}) : helper)))
    + "\"/></div>\n		</div>\n	</div>\n	</fieldset>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.channels : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</fieldset>\n";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "	<!-- Channel "
    + alias4(((helper = (helper = helpers.CHANNEL || (depth0 != null ? depth0.CHANNEL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"CHANNEL","hash":{},"data":data}) : helper)))
    + " -->\n	<fieldset class=\"channel\">\n	<legend>Channel "
    + alias4(((helper = (helper = helpers.CHANNEL || (depth0 != null ? depth0.CHANNEL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"CHANNEL","hash":{},"data":data}) : helper)))
    + "</legend>\n	<div class+\"div-table\">\n		<div class=\"div-table-row\">\n			<div class=\"div-table-col\">Channel: </div><div class=\"div-table-col\" id=\""
    + alias4(alias5((depths[1] != null ? depths[1].name : depths[1]), depth0))
    + "-ch-"
    + alias4(((helper = (helper = helpers.CHANNEL || (depth0 != null ? depth0.CHANNEL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"CHANNEL","hash":{},"data":data}) : helper)))
    + "\"><input type=\"number\" onchange=\"direwolf.adevices["
    + alias4(alias5((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "].channels["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].setChannel(this.value)\" value=\""
    + alias4(((helper = (helper = helpers.CHANNEL || (depth0 != null ? depth0.CHANNEL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"CHANNEL","hash":{},"data":data}) : helper)))
    + "\"/></div>\n		</div>\n		<div class=\"div-table-row\">\n			<div class=\"div-table-col\">Modem Speed: </div><div class=\"div-table-col\" id=\""
    + alias4(alias5((depths[1] != null ? depths[1].name : depths[1]), depth0))
    + "-ch-"
    + alias4(((helper = (helper = helpers.CHANNEL || (depth0 != null ? depth0.CHANNEL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"CHANNEL","hash":{},"data":data}) : helper)))
    + "-modemspd\"><input type=\"number\" onchange=\"direwolf.adevices["
    + alias4(alias5((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "].channels["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].MODEM.setSpeed(this.value)\" value=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.MODEM : depth0)) != null ? stack1.SPEED : stack1), depth0))
    + "\"/></div>\n		</div>\n		<div class=\"div-table-row\">\n			<div class=\"div-table-col\"> </div>\n			<div class=\"div-table-col\">Modem Options</div> \n		</div>\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.MODEM : depth0)) != null ? stack1.options : stack1),{"name":"each","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		<div class+\"div-table-row\">\n			<div class=\"div-table-col text-right\">New Option</div>\n			<input class=\"div-table-col\" type=\"text\" onchange=\"direwolf.adevices["
    + alias4(alias5((container.data(data, 2) && container.data(data, 2).index), depth0))
    + "].channels["
    + alias4(alias5((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "].MODEM.addOption(this.value)\"/>\n		</div>\n		<div class=\"div-table-row\">\n			<div  class=\"div-table-col\">Call-SSID: </div>\n			<div class=\"div-table-col\" id=\""
    + alias4(alias5((depths[1] != null ? depths[1].name : depths[1]), depth0))
    + "-ch-"
    + alias4(((helper = (helper = helpers.CHANNEL || (depth0 != null ? depth0.CHANNEL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"CHANNEL","hash":{},"data":data}) : helper)))
    + "-mycall\"><input type=\"text\" onchange=\"direwolf.adevices["
    + alias4(alias5((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "].channels["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].setMycall(this.value)\" value=\""
    + alias4(((helper = (helper = helpers.MYCALL || (depth0 != null ? depth0.MYCALL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"MYCALL","hash":{},"data":data}) : helper)))
    + "\"/></div>\n		</div>\n		<div class=\"div-table-row\">\n			<div  class=\"div-table-col\">PTT: </div>\n			<div class=\"div-table-col\" id=\""
    + alias4(alias5((depths[1] != null ? depths[1].name : depths[1]), depth0))
    + "-ch-"
    + alias4(((helper = (helper = helpers.CHANNEL || (depth0 != null ? depth0.CHANNEL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"CHANNEL","hash":{},"data":data}) : helper)))
    + "-"
    + alias4(((helper = (helper = helpers.PTT || (depth0 != null ? depth0.PTT : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"PTT","hash":{},"data":data}) : helper)))
    + "\"><input type=\"text\" onchange=\"direwolf.adevices["
    + alias4(alias5((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "].channels["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].setPTT(this.value)\" value=\""
    + alias4(((helper = (helper = helpers.PTT || (depth0 != null ? depth0.PTT : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"PTT","hash":{},"data":data}) : helper)))
    + "\"/></div>\n		</div>\n		<div class=\"div-table-row\">\n			<div  class=\"div-table-col\">DCD: </div>\n			<div class=\"div-table-col\" id=\""
    + alias4(alias5((depths[1] != null ? depths[1].name : depths[1]), depth0))
    + "-ch-"
    + alias4(((helper = (helper = helpers.CHANNEL || (depth0 != null ? depth0.CHANNEL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"CHANNEL","hash":{},"data":data}) : helper)))
    + "-"
    + alias4(((helper = (helper = helpers.DCD || (depth0 != null ? depth0.DCD : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"DCD","hash":{},"data":data}) : helper)))
    + "\"><input type=\"text\" onchange=\"direwolf.adevices["
    + alias4(alias5((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "].channels["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].setDCD(this.value)\" value=\""
    + alias4(((helper = (helper = helpers.DCD || (depth0 != null ? depth0.DCD : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"DCD","hash":{},"data":data}) : helper)))
    + "\"/></div>\n		</div>\n		<div class=\"div-table-row\">\n			<div  class=\"div-table-col\">CON: </div>\n			<div class=\"div-table-col\" id=\""
    + alias4(alias5((depths[1] != null ? depths[1].name : depths[1]), depth0))
    + "-ch-"
    + alias4(((helper = (helper = helpers.CHANNEL || (depth0 != null ? depth0.CHANNEL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"CHANNEL","hash":{},"data":data}) : helper)))
    + "-"
    + alias4(((helper = (helper = helpers.CON || (depth0 != null ? depth0.CON : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"CON","hash":{},"data":data}) : helper)))
    + "\"><input type=\"text\" onchange=\"direwolf.adevices["
    + alias4(alias5((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "].channels["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].setCON(this.value)\" value=\""
    + alias4(((helper = (helper = helpers.CON || (depth0 != null ? depth0.CON : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"CON","hash":{},"data":data}) : helper)))
    + "\"/></div>\n		</div>\n		<div class=\"div-table-row\">\n			<div  class=\"div-table-col\">TXINH: </div>\n			<div class=\"div-table-col\" id=\""
    + alias4(alias5((depths[1] != null ? depths[1].name : depths[1]), depth0))
    + "-ch-"
    + alias4(((helper = (helper = helpers.CHANNEL || (depth0 != null ? depth0.CHANNEL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"CHANNEL","hash":{},"data":data}) : helper)))
    + "-"
    + alias4(((helper = (helper = helpers.TXINH || (depth0 != null ? depth0.TXINH : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TXINH","hash":{},"data":data}) : helper)))
    + "\"><input type=\"text\" onchange=\"direwolf.adevices["
    + alias4(alias5((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "].channels["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].setTXINH(this.value)\" value=\""
    + alias4(((helper = (helper = helpers.TXINH || (depth0 != null ? depth0.TXINH : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TXINH","hash":{},"data":data}) : helper)))
    + "\"/></div>\n		</div>\n		<div class=\"div-table-row\">\n			<div  class=\"div-table-col\">DWAIT: </div>\n			<div class=\"div-table-col\" id=\""
    + alias4(alias5((depths[1] != null ? depths[1].name : depths[1]), depth0))
    + "-ch-"
    + alias4(((helper = (helper = helpers.CHANNEL || (depth0 != null ? depth0.CHANNEL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"CHANNEL","hash":{},"data":data}) : helper)))
    + "-"
    + alias4(((helper = (helper = helpers.DWAIT || (depth0 != null ? depth0.DWAIT : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"DWAIT","hash":{},"data":data}) : helper)))
    + "\"><input type=\"text\" onchange=\"direwolf.adevices["
    + alias4(alias5((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "].channels["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].setDWAIT(this.value)\" value=\""
    + alias4(((helper = (helper = helpers.DWAIT || (depth0 != null ? depth0.DWAIT : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"DWAIT","hash":{},"data":data}) : helper)))
    + "\"/></div>\n		</div>\n		<div class=\"div-table-row\">\n			<div  class=\"div-table-col\">SLOTTIME: </div>\n			<div class=\"div-table-col\" id=\""
    + alias4(alias5((depths[1] != null ? depths[1].name : depths[1]), depth0))
    + "-ch-"
    + alias4(((helper = (helper = helpers.CHANNEL || (depth0 != null ? depth0.CHANNEL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"CHANNEL","hash":{},"data":data}) : helper)))
    + "-"
    + alias4(((helper = (helper = helpers.SLOTTIME || (depth0 != null ? depth0.SLOTTIME : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"SLOTTIME","hash":{},"data":data}) : helper)))
    + "\"><input type=\"text\" onchange=\"direwolf.adevices["
    + alias4(alias5((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "].channels["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].setSLOTTIME(this.value)\" value=\""
    + alias4(((helper = (helper = helpers.SLOTTIME || (depth0 != null ? depth0.SLOTTIME : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"SLOTTIME","hash":{},"data":data}) : helper)))
    + "\"/></div>\n		</div>\n		<div class=\"div-table-row\">\n			<div  class=\"div-table-col\">PERSIST: </div>\n			<div class=\"div-table-col\" id=\""
    + alias4(alias5((depths[1] != null ? depths[1].name : depths[1]), depth0))
    + "-ch-"
    + alias4(((helper = (helper = helpers.CHANNEL || (depth0 != null ? depth0.CHANNEL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"CHANNEL","hash":{},"data":data}) : helper)))
    + "-"
    + alias4(((helper = (helper = helpers.PERSIST || (depth0 != null ? depth0.PERSIST : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"PERSIST","hash":{},"data":data}) : helper)))
    + "\"><input type=\"text\" onchange=\"direwolf.adevices["
    + alias4(alias5((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "].channels["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].setPERSIST(this.value)\" value=\""
    + alias4(((helper = (helper = helpers.PERSIST || (depth0 != null ? depth0.PERSIST : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"PERSIST","hash":{},"data":data}) : helper)))
    + "\"/></div>\n		</div>\n		<div class=\"div-table-row\">\n			<div  class=\"div-table-col\">TXDELAY: </div>\n			<div class=\"div-table-col\" id=\""
    + alias4(alias5((depths[1] != null ? depths[1].name : depths[1]), depth0))
    + "-ch-"
    + alias4(((helper = (helper = helpers.CHANNEL || (depth0 != null ? depth0.CHANNEL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"CHANNEL","hash":{},"data":data}) : helper)))
    + "-"
    + alias4(((helper = (helper = helpers.TXDELAY || (depth0 != null ? depth0.TXDELAY : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TXDELAY","hash":{},"data":data}) : helper)))
    + "\"><input type=\"text\" onchange=\"direwolf.adevices["
    + alias4(alias5((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "].channels["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].setTXDELAY(this.value)\" value=\""
    + alias4(((helper = (helper = helpers.TXDELAY || (depth0 != null ? depth0.TXDELAY : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TXDELAY","hash":{},"data":data}) : helper)))
    + "\"/></div>\n		</div>\n		<div class=\"div-table-row\">\n			<div  class=\"div-table-col\">TXTAIL: </div>\n			<div class=\"div-table-col\" id=\""
    + alias4(alias5((depths[1] != null ? depths[1].name : depths[1]), depth0))
    + "-ch-"
    + alias4(((helper = (helper = helpers.CHANNEL || (depth0 != null ? depth0.CHANNEL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"CHANNEL","hash":{},"data":data}) : helper)))
    + "-"
    + alias4(((helper = (helper = helpers.TXTAIL || (depth0 != null ? depth0.TXTAIL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TXTAIL","hash":{},"data":data}) : helper)))
    + "\"><input type=\"text\" onchange=\"direwolf.adevices["
    + alias4(alias5((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "].channels["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].setTXTAIL(this.value)\" value=\""
    + alias4(((helper = (helper = helpers.TXTAIL || (depth0 != null ? depth0.TXTAIL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TXTAIL","hash":{},"data":data}) : helper)))
    + "\"/></div>\n		</div>\n		<div class=\"div-table-row\">\n			<div  class=\"div-table-col\">FULLDUP: </div>\n			<div class=\"div-table-col\" id=\""
    + alias4(alias5((depths[1] != null ? depths[1].name : depths[1]), depth0))
    + "-ch-"
    + alias4(((helper = (helper = helpers.CHANNEL || (depth0 != null ? depth0.CHANNEL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"CHANNEL","hash":{},"data":data}) : helper)))
    + "-"
    + alias4(((helper = (helper = helpers.FULLDUP || (depth0 != null ? depth0.FULLDUP : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"FULLDUP","hash":{},"data":data}) : helper)))
    + "\"><input type=\"text\" onchange=\"direwolf.adevices["
    + alias4(alias5((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "].channels["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].setFULLDUP(this.value)\" value=\""
    + alias4(((helper = (helper = helpers.FULLDUP || (depth0 != null ? depth0.FULLDUP : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"FULLDUP","hash":{},"data":data}) : helper)))
    + "\"/></div>\n		</div>\n		<div class=\"div-table-row\">\n			<div  class=\"div-table-col\">FIX_BITS: </div>\n			<div class=\"div-table-col\" id=\""
    + alias4(alias5((depths[1] != null ? depths[1].name : depths[1]), depth0))
    + "-ch-"
    + alias4(((helper = (helper = helpers.CHANNEL || (depth0 != null ? depth0.CHANNEL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"CHANNEL","hash":{},"data":data}) : helper)))
    + "-"
    + alias4(((helper = (helper = helpers.FIX_BITS || (depth0 != null ? depth0.FIX_BITS : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"FIX_BITS","hash":{},"data":data}) : helper)))
    + "\"><input type=\"text\" onchange=\"direwolf.adevices["
    + alias4(alias5((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "].channels["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].setFIX_BITS(this.value)\" value=\""
    + alias4(((helper = (helper = helpers.FIX_BITS || (depth0 != null ? depth0.FIX_BITS : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"FIX_BITS","hash":{},"data":data}) : helper)))
    + "\"/></div>\n		</div>\n		<div class=\"div-table-row\">\n			<div  class=\"div-table-col\">FRACK: </div>\n			<div class=\"div-table-col\" id=\""
    + alias4(alias5((depths[1] != null ? depths[1].name : depths[1]), depth0))
    + "-ch-"
    + alias4(((helper = (helper = helpers.CHANNEL || (depth0 != null ? depth0.CHANNEL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"CHANNEL","hash":{},"data":data}) : helper)))
    + "-"
    + alias4(((helper = (helper = helpers.FRACK || (depth0 != null ? depth0.FRACK : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"FRACK","hash":{},"data":data}) : helper)))
    + "\"><input type=\"text\" onchange=\"direwolf.adevices["
    + alias4(alias5((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "].channels["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].setFRACK(this.value)\" value=\""
    + alias4(((helper = (helper = helpers.FRACK || (depth0 != null ? depth0.FRACK : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"FRACK","hash":{},"data":data}) : helper)))
    + "\"/></div>\n		</div>\n		<div class=\"div-table-row\">\n			<div  class=\"div-table-col\">RETRY: </div>\n			<div class=\"div-table-col\" id=\""
    + alias4(alias5((depths[1] != null ? depths[1].name : depths[1]), depth0))
    + "-ch-"
    + alias4(((helper = (helper = helpers.CHANNEL || (depth0 != null ? depth0.CHANNEL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"CHANNEL","hash":{},"data":data}) : helper)))
    + "-"
    + alias4(((helper = (helper = helpers.RETRY || (depth0 != null ? depth0.RETRY : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"RETRY","hash":{},"data":data}) : helper)))
    + "\"><input type=\"text\" onchange=\"direwolf.adevices["
    + alias4(alias5((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "].channels["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].setRETRY(this.value)\" value=\""
    + alias4(((helper = (helper = helpers.RETRY || (depth0 != null ? depth0.RETRY : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"RETRY","hash":{},"data":data}) : helper)))
    + "\"/></div>\n		</div>\n		<div class=\"div-table-row\">\n			<div  class=\"div-table-col\">PACLEN: </div>\n			<div class=\"div-table-col\" id=\""
    + alias4(alias5((depths[1] != null ? depths[1].name : depths[1]), depth0))
    + "-ch-"
    + alias4(((helper = (helper = helpers.CHANNEL || (depth0 != null ? depth0.CHANNEL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"CHANNEL","hash":{},"data":data}) : helper)))
    + "-"
    + alias4(((helper = (helper = helpers.PACLEN || (depth0 != null ? depth0.PACLEN : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"PACLEN","hash":{},"data":data}) : helper)))
    + "\"><input type=\"text\" onchange=\"direwolf.adevices["
    + alias4(alias5((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "].channels["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].setPACLEN(this.value)\" value=\""
    + alias4(((helper = (helper = helpers.PACLEN || (depth0 != null ? depth0.PACLEN : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"PACLEN","hash":{},"data":data}) : helper)))
    + "\"/></div>\n		</div>\n		<div class=\"div-table-row\">\n			<div  class=\"div-table-col\">MAXFRAME: </div>\n			<div class=\"div-table-col\" id=\""
    + alias4(alias5((depths[1] != null ? depths[1].name : depths[1]), depth0))
    + "-ch-"
    + alias4(((helper = (helper = helpers.CHANNEL || (depth0 != null ? depth0.CHANNEL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"CHANNEL","hash":{},"data":data}) : helper)))
    + "-"
    + alias4(((helper = (helper = helpers.MAXFRAME || (depth0 != null ? depth0.MAXFRAME : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"MAXFRAME","hash":{},"data":data}) : helper)))
    + "\"><input type=\"text\" onchange=\"direwolf.adevices["
    + alias4(alias5((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "].channels["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].setMAXFRAME(this.value)\" value=\""
    + alias4(((helper = (helper = helpers.MAXFRAME || (depth0 != null ? depth0.MAXFRAME : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"MAXFRAME","hash":{},"data":data}) : helper)))
    + "\"/></div>\n		</div>\n		<div class=\"div-table-row\">\n			<div  class=\"div-table-col\">EMAXFRAME: </div>\n			<div class=\"div-table-col\" id=\""
    + alias4(alias5((depths[1] != null ? depths[1].name : depths[1]), depth0))
    + "-ch-"
    + alias4(((helper = (helper = helpers.CHANNEL || (depth0 != null ? depth0.CHANNEL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"CHANNEL","hash":{},"data":data}) : helper)))
    + "-"
    + alias4(((helper = (helper = helpers.EMAXFRAME || (depth0 != null ? depth0.EMAXFRAME : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"EMAXFRAME","hash":{},"data":data}) : helper)))
    + "\"><input type=\"text\" onchange=\"direwolf.adevices["
    + alias4(alias5((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "].channels["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].setEMAXFRAME(this.value)\" value=\""
    + alias4(((helper = (helper = helpers.EMAXFRAME || (depth0 != null ? depth0.EMAXFRAME : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"EMAXFRAME","hash":{},"data":data}) : helper)))
    + "\"/></div>\n		</div>\n		<div class=\"div-table-row\">\n			<div  class=\"div-table-col\">MAXV22: </div>\n			<div class=\"div-table-col\" id=\""
    + alias4(alias5((depths[1] != null ? depths[1].name : depths[1]), depth0))
    + "-ch-"
    + alias4(((helper = (helper = helpers.CHANNEL || (depth0 != null ? depth0.CHANNEL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"CHANNEL","hash":{},"data":data}) : helper)))
    + "-"
    + alias4(((helper = (helper = helpers.MAXV22 || (depth0 != null ? depth0.MAXV22 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"MAXV22","hash":{},"data":data}) : helper)))
    + "\"><input type=\"text\" onchange=\"direwolf.adevices["
    + alias4(alias5((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "].channels["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].setMAXV22(this.value)\" value=\""
    + alias4(((helper = (helper = helpers.MAXV22 || (depth0 != null ? depth0.MAXV22 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"MAXV22","hash":{},"data":data}) : helper)))
    + "\"/></div>\n		</div>\n	</div>\n	</fieldset>\n";
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=container.lambda, alias2=container.escapeExpression;

  return "		<div class+\"div-table-row\">\n			<div class=\"div-table-col text-right\">Value</div>\n			<div class=\"div-table-col\"><input class=\"div-table-col\" type=\"text\" value=\""
    + alias2(alias1(depth0, depth0))
    + "\" onchange=\"direwolf.adevices["
    + alias2(alias1((container.data(data, 2) && container.data(data, 2).index), depth0))
    + "].channels["
    + alias2(alias1((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "].MODEM.setOption("
    + alias2(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data}) : helper)))
    + ",this.value)\"/></div>\n		</div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<fieldset class=\"channel\">\n	<legend>"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + " - "
    + alias4((helpers.toUpperCase || (depth0 && depth0.toUpperCase) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0["constructor"] : depth0)) != null ? stack1.name : stack1),{"name":"toUpperCase","hash":{},"data":data}))
    + "</legend>\n	<div class=\"div-table\">\n"
    + ((stack1 = helpers.each.call(alias1,depth0,{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		<button type=\"button\" onclick=\"direwolf.beacons.splice("
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + ",1);reloadDirewolf()\">Delete</button>\n		<button type=\"button\" onclick=\"direwolf.addBeacon(direwolf.beacons["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "]);reloadDirewolf()\">Duplicate</button>\n	</div>\n	</fieldset>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.escapeExpression;

  return "		<div class=\"div-table-row\">\n			<div class=\"div-table-col\">"
    + alias1(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"key","hash":{},"data":data}) : helper)))
    + "</div>\n			<div class=\"div-table-col\"><input type=\"text\" value=\""
    + alias1(container.lambda(depth0, depth0))
    + "\"></div>\n		</div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<fieldset class=\"channel\">\n	<legend>"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + " - "
    + alias4((helpers.toUpperCase || (depth0 && depth0.toUpperCase) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0["constructor"] : depth0)) != null ? stack1.name : stack1),{"name":"toUpperCase","hash":{},"data":data}))
    + "</legend>\n	<div class=\"div-table\">\n"
    + ((stack1 = helpers.each.call(alias1,depth0,{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		<button type=\"button\" onclick=\"direwolf.digipeaters.splice("
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + ",1);reloadDirewolf()\">Delete</button>\n		<button type=\"button\" onclick=\"direwolf.addDigipeater(direwolf.digipeaters["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "]);reloadDirewolf()\">Duplicate</button>\n	</div>\n	</fieldset>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<fieldset class=\"channel\">\n	<legend>"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + " - "
    + alias4((helpers.toUpperCase || (depth0 && depth0.toUpperCase) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0["constructor"] : depth0)) != null ? stack1.name : stack1),{"name":"toUpperCase","hash":{},"data":data}))
    + "</legend>\n	<div class=\"div-table\">\n"
    + ((stack1 = helpers.each.call(alias1,depth0,{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		<button type=\"button\" onclick=\"direwolf.filters.splice("
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + ",1);reloadDirewolf()\">Delete</button>\n		<button type=\"button\" onclick=\"direwolf.addFilter(direwolf.filters["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "]);reloadDirewolf()\">Duplicate</button>\n	</div>\n	</fieldset>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.adevices : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<fieldset>\n	<legend>Common Settings</legend>\n	<div class=\"div-table\">\n		<div class=\"div-table-row\">\n			<div class=\"div-table-col\">AGWPORT:</div>\n			<div class=\"div-table-col\"><input  type=\"number\" id=\"AGWPORT\" onchange=\"direwolf.setAGWPORT(this.value)\" value=\""
    + alias4(((helper = (helper = helpers.AGWPORT || (depth0 != null ? depth0.AGWPORT : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"AGWPORT","hash":{},"data":data}) : helper)))
    + "\"/></div>\n		</div>\n		<div class=\"div-table-row\">\n			<div class=\"div-table-col\">KISSPORT:</div>\n			<div class=\"div-table-col\"><input  type=\"number\" id=\"KISSPORT\" onchange=\"direwolf.setKISSPORT(this.value)\" value=\""
    + alias4(((helper = (helper = helpers.KISSPORT || (depth0 != null ? depth0.KISSPORT : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"KISSPORT","hash":{},"data":data}) : helper)))
    + "\"/></div>\n		</div>\n		<div class=\"div-table-row\">\n			<div class=\"div-table-col\">DEDUPE:</div>\n			<div class=\"div-table-col\"><input  type=\"number\" id=\"DEDUPE\" onchange=\"direwolf.setDEDUPE(this.value)\" value=\""
    + alias4(((helper = (helper = helpers.DEDUPE || (depth0 != null ? depth0.DEDUPE : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"DEDUPE","hash":{},"data":data}) : helper)))
    + "\"/></div>\n		</div>\n		<div class=\"div-table-row\">\n			<div class=\"div-table-col\">IGSERVER:</div>\n			<div class=\"div-table-col\"><input  type=\"text\" id=\"IGSERVER\" onchange=\"direwolf.setIGSERVER(this.value)\" value=\""
    + alias4(((helper = (helper = helpers.IGSERVER || (depth0 != null ? depth0.IGSERVER : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"IGSERVER","hash":{},"data":data}) : helper)))
    + "\"/></div>\n		</div>\n		<div class=\"div-table-row\">\n			<div class=\"div-table-col\">IGLOGIN:</div>\n			<div class=\"div-table-col\"><input  type=\"text\" id=\"IGLOGIN\" onchange=\"direwolf.setIGLOGIN(this.value)\" value=\""
    + alias4(((helper = (helper = helpers.IGLOGIN || (depth0 != null ? depth0.IGLOGIN : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"IGLOGIN","hash":{},"data":data}) : helper)))
    + "\"/></div>\n		</div>\n		<div class=\"div-table-row\">\n			<div class=\"div-table-col\">IGTXLIMIT:</div>\n			<div class=\"div-table-col\"><input  type=\"text\" id=\"IGTXLIMIT\" onchange=\"direwolf.setIGTXLIMIT(this.value)\" value=\""
    + alias4(((helper = (helper = helpers.IGTXLIMIT || (depth0 != null ? depth0.IGTXLIMIT : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"IGTXLIMIT","hash":{},"data":data}) : helper)))
    + "\"/></div>\n		</div>\n		<div class=\"div-table-row\">\n			<div class=\"div-table-col\">LOGDIR:</div>\n			<div class=\"div-table-col\"><input  type=\"text\" id=\"LOGDIR\" onchange=\"direwolf.setLOGDIR(this.value)\" value=\""
    + alias4(((helper = (helper = helpers.LOGDIR || (depth0 != null ? depth0.LOGDIR : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LOGDIR","hash":{},"data":data}) : helper)))
    + "\"/></div>\n		</div>\n	</div>\n</fieldset>\n<fieldset>\n	<legend>Beacons</legend>\n	<div style=\"clear:both\">\n	<button type=\"button\" onclick=\"direwolf.addBeacon(new Cbeacon());reloadDirewolf()\">New CBEACON</button>\n	<button type=\"button\" onclick=\"direwolf.addBeacon(new Ibeacon());reloadDirewolf()\">New IBEACON</button>\n	<button type=\"button\" onclick=\"direwolf.addBeacon(new Obeacon());reloadDirewolf()\">New OBEACON</button>\n	<button type=\"button\" onclick=\"direwolf.addBeacon(new Pbeacon());reloadDirewolf()\">New PBEACON</button>\n	<button type=\"button\" onclick=\"direwolf.addBeacon(new Tbeacon());reloadDirewolf()\">New TBEACON</button>\n	</div>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.beacons : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</fieldset>\n\n\n<fieldset>\n	<legend>Digipeaters</legend>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.digipeaters : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</fieldset>\n\n\n<fieldset>\n	<legend>Filters</legend>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.filters : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</fieldset>\n\n\n";
},"useData":true,"useDepths":true});
templates['modems'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<option value=\""
    + alias4(((helper = (helper = helpers.rate || (depth0 != null ? depth0.rate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rate","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.rate || (depth0 != null ? depth0.rate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rate","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.modulation || (depth0 != null ? depth0.modulation : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"modulation","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<select>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.modem : depth0)) != null ? stack1.speeds : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select>\n";
},"useData":true});
})();