(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['direwolf'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<div style=\"float: left;\">\n				<h3>Soundcard Settings "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h3>\n				<div class=\"div-table\">\n					<div class=\"div-table-row\">\n						<div class=\"div-table-col\">Name</div>\n						<div class=\"div-table-col\">\n							<select\n								onchange=\"direwolf.adevices["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].setAdeviceName(this.value)\">\n								<option value=\"ADEVICE\" "
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || alias2).call(alias1,(depth0 != null ? depth0.name : depth0),"ADEVICE",{"name":"ifEquals","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n					>ADEVICE</option>\n								<option value=\"ADEVICE0\" "
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || alias2).call(alias1,(depth0 != null ? depth0.name : depth0),"ADEVICE0",{"name":"ifEquals","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n					>ADEVICE0</option>\n								<option value=\"ADEVICE1\" "
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || alias2).call(alias1,(depth0 != null ? depth0.name : depth0),"ADEVICE1",{"name":"ifEquals","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n					>ADEVICE1</option>\n								<option value=\"ADEVICE2\" "
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || alias2).call(alias1,(depth0 != null ? depth0.name : depth0),"ADEVICE2",{"name":"ifEquals","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n					>ADEVICE2</option>\n								<select>\n						</div>\n					</div>\n					<div class=\"div-table-row\">\n						<div class=\"div-table-col\">Input</div>\n						<div class=\"div-table-col\">\n							<input type=\"text\"\n								onchange=\"direwolf.adevices["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].setInput(this.value)\"\n								value=\""
    + alias4(((helper = (helper = helpers.input || (depth0 != null ? depth0.input : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"input","hash":{},"data":data}) : helper)))
    + "\" />\n						</div>\n					</div>\n					<div class=\"div-table-row\">\n						<div class=\"div-table-col\">Output</div>\n						<div class=\"div-table-col\">\n							<input type=\"text\"\n								onchange=\"direwolf.adevices["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].setOutput(this.value)\"\n								value=\""
    + alias4(((helper = (helper = helpers.output || (depth0 != null ? depth0.output : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"output","hash":{},"data":data}) : helper)))
    + "\" />\n						</div>\n					</div>\n					<div class=\"div-table-row\">\n						<div class=\"div-table-col\">Sample Rate</div>\n						<div class=\"div-table-col\">\n							<input type=\"number\"\n								onchange=\"direwolf.adevices["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].setARATE(this.value)\"\n								value=\""
    + alias4(((helper = (helper = helpers.ARATE || (depth0 != null ? depth0.ARATE : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ARATE","hash":{},"data":data}) : helper)))
    + "\" />\n						</div>\n					</div>\n					<div class=\"div-table-row\">\n						<div class=\"div-table-col\">Audio Channels</div>\n						<div class=\"div-table-col\">\n							<select\n								onchange=\"direwolf.adevices["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].setACHANNELS(this.value)\">\n								<option value=\"1\" "
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || alias2).call(alias1,(depth0 != null ? depth0.ACHANNELS : depth0),"1",{"name":"ifEquals","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">Mono</option>\n								<option value=\"2\" "
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || alias2).call(alias1,(depth0 != null ? depth0.ACHANNELS : depth0),"2",{"name":"ifEquals","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">Stereo</option>\n							</select>\n						</div>\n					</div>\n				</div>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.channels : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "\n							 selected=\"selected\"";
},"4":function(container,depth0,helpers,partials,data) {
    return " selected=\"selected\"";
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "				<div style=\"float: left; border-right: 1px black solid;padding-left: 1em;\">\n					<h4>Channel "
    + alias4(((helper = (helper = helpers.CHANNEL || (depth0 != null ? depth0.CHANNEL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"CHANNEL","hash":{},"data":data}) : helper)))
    + "</h4>\n					<div class=\"div-table\">\n						<div class=\"div-table-row\">\n							<div class=\"div-table-col\">Channel</div>\n							<div class=\"div-table-col\">\n								<input type=\"number\" min=0 max=5\n									onchange=\"direwolf.adevices["
    + alias4(alias5((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "].channels["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].setChannel(this.value)\"\n									value=\""
    + alias4(((helper = (helper = helpers.CHANNEL || (depth0 != null ? depth0.CHANNEL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"CHANNEL","hash":{},"data":data}) : helper)))
    + "\" />\n							</div>\n						</div>\n						<div class=\"div-table-row\">\n							<div class=\"div-table-col\">Modem Speed</div>\n							<div class=\"div-table-col\">\n								<select\n									onchange=\"direwolf.adevices["
    + alias4(alias5((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "].channels["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].MODEM.setSpeed(this.value)\">\n									<option value=\"300\" "
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.MODEM : depth0)) != null ? stack1.SPEED : stack1),"300",{"name":"ifEquals","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">300\n										(HF)</option>\n									<option value=\"1200\" "
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.MODEM : depth0)) != null ? stack1.SPEED : stack1),"1200",{"name":"ifEquals","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">1200\n										(AFSK)</option>\n									<option value=\"2400\" "
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.MODEM : depth0)) != null ? stack1.SPEED : stack1),"2400",{"name":"ifEquals","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">2400\n										(PSK)</option>\n									<option value=\"4800\" "
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.MODEM : depth0)) != null ? stack1.SPEED : stack1),"4800",{"name":"ifEquals","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">4800\n										(PSK)</option>\n									<option value=\"9600\" "
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.MODEM : depth0)) != null ? stack1.SPEED : stack1),"9600",{"name":"ifEquals","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">9600\n										(FSK)</option>\n									<option value=\"19200\" "
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.MODEM : depth0)) != null ? stack1.SPEED : stack1),"19200",{"name":"ifEquals","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">19200\n										(FSK)</option>\n									<option value=\"38400\" "
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.MODEM : depth0)) != null ? stack1.SPEED : stack1),"38400",{"name":"ifEquals","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">38400\n										(FSK)</option>\n								</select>\n							</div>\n						</div>\n						<div class=\"div-table-row\">\n							<div class=\"div-table-col\"></div>\n							<div class=\"div-table-col\">Modem Options</div>\n						</div>\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.MODEM : depth0)) != null ? stack1.options : stack1),{"name":"each","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "						<div class=\"div-table-row\">\n							<div class=\"div-table-col text-right\">New Option</div>\n							<input class=\"div-table-col\" type=\"text\"\n								onchange=\"direwolf.adevices["
    + alias4(alias5((container.data(data, 2) && container.data(data, 2).index), depth0))
    + "].channels["
    + alias4(alias5((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "].MODEM.addOption(this.value)\" />\n						</div>\n						<div class=\"div-table-row\">\n							<div class=\"div-table-col\">Call-SSID</div>\n							<div class=\"div-table-col\">\n								<input type=\"text\"\n									onchange=\"direwolf.adevices["
    + alias4(alias5((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "].channels["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].setMycall(this.value)\"\n									value=\""
    + alias4(((helper = (helper = helpers.MYCALL || (depth0 != null ? depth0.MYCALL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"MYCALL","hash":{},"data":data}) : helper)))
    + "\" />\n							</div>\n						</div>\n						<div class=\"div-table-row\">\n							<div class=\"div-table-col\">PTT</div>\n							<div class=\"div-table-col\">\n								<input type=\"text\"\n									onchange=\"direwolf.adevices["
    + alias4(alias5((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "].channels["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].setPTT(this.value)\"\n									value=\""
    + alias4(((helper = (helper = helpers.PTT || (depth0 != null ? depth0.PTT : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"PTT","hash":{},"data":data}) : helper)))
    + "\" />\n							</div>\n						</div>\n						<div class=\"div-table-row\">\n							<div class=\"div-table-col\">DCD</div>\n							<div class=\"div-table-col\">\n								<input type=\"text\"\n									onchange=\"direwolf.adevices["
    + alias4(alias5((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "].channels["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].setDCD(this.value)\"\n									value=\""
    + alias4(((helper = (helper = helpers.DCD || (depth0 != null ? depth0.DCD : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"DCD","hash":{},"data":data}) : helper)))
    + "\" />\n							</div>\n						</div>\n						<div class=\"div-table-row\">\n							<div class=\"div-table-col\">CON</div>\n							<div class=\"div-table-col\">\n								<input type=\"text\"\n									onchange=\"direwolf.adevices["
    + alias4(alias5((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "].channels["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].setCON(this.value)\"\n									value=\""
    + alias4(((helper = (helper = helpers.CON || (depth0 != null ? depth0.CON : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"CON","hash":{},"data":data}) : helper)))
    + "\" />\n							</div>\n						</div>\n						<div class=\"div-table-row\">\n							<div class=\"div-table-col\">TXINH</div>\n							<div class=\"div-table-col\">\n								<input type=\"text\"\n									onchange=\"direwolf.adevices["
    + alias4(alias5((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "].channels["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].setTXINH(this.value)\"\n									value=\""
    + alias4(((helper = (helper = helpers.TXINH || (depth0 != null ? depth0.TXINH : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TXINH","hash":{},"data":data}) : helper)))
    + "\" />\n							</div>\n						</div>\n						<div class=\"div-table-row\">\n							<div class=\"div-table-col\">DWAIT</div>\n							<div class=\"div-table-col\">\n								<input type=\"text\"\n									onchange=\"direwolf.adevices["
    + alias4(alias5((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "].channels["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].setDWAIT(this.value)\"\n									value=\""
    + alias4(((helper = (helper = helpers.DWAIT || (depth0 != null ? depth0.DWAIT : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"DWAIT","hash":{},"data":data}) : helper)))
    + "\" />\n							</div>\n						</div>\n						<div class=\"div-table-row\">\n							<div class=\"div-table-col\">SLOTTIME</div>\n							<div class=\"div-table-col\">\n								<input type=\"text\"\n									onchange=\"direwolf.adevices["
    + alias4(alias5((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "].channels["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].setSLOTTIME(this.value)\"\n									value=\""
    + alias4(((helper = (helper = helpers.SLOTTIME || (depth0 != null ? depth0.SLOTTIME : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"SLOTTIME","hash":{},"data":data}) : helper)))
    + "\" />\n							</div>\n						</div>\n						<div class=\"div-table-row\">\n							<div class=\"div-table-col\">PERSIST</div>\n							<div class=\"div-table-col\">\n								<input type=\"text\"\n									onchange=\"direwolf.adevices["
    + alias4(alias5((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "].channels["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].setPERSIST(this.value)\"\n									value=\""
    + alias4(((helper = (helper = helpers.PERSIST || (depth0 != null ? depth0.PERSIST : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"PERSIST","hash":{},"data":data}) : helper)))
    + "\" />\n							</div>\n						</div>\n						<div class=\"div-table-row\">\n							<div class=\"div-table-col\">TXDELAY</div>\n							<div class=\"div-table-col\">\n								<input type=\"text\"\n									onchange=\"direwolf.adevices["
    + alias4(alias5((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "].channels["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].setTXDELAY(this.value)\"\n									value=\""
    + alias4(((helper = (helper = helpers.TXDELAY || (depth0 != null ? depth0.TXDELAY : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TXDELAY","hash":{},"data":data}) : helper)))
    + "\" />\n							</div>\n						</div>\n						<div class=\"div-table-row\">\n							<div class=\"div-table-col\">TXTAIL</div>\n							<div class=\"div-table-col\">\n								<input type=\"text\"\n									onchange=\"direwolf.adevices["
    + alias4(alias5((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "].channels["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].setTXTAIL(this.value)\"\n									value=\""
    + alias4(((helper = (helper = helpers.TXTAIL || (depth0 != null ? depth0.TXTAIL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TXTAIL","hash":{},"data":data}) : helper)))
    + "\" />\n							</div>\n						</div>\n						<div class=\"div-table-row\">\n							<div class=\"div-table-col\">FULLDUP</div>\n							<div class=\"div-table-col\">\n								<input type=\"text\"\n									onchange=\"direwolf.adevices["
    + alias4(alias5((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "].channels["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].setFULLDUP(this.value)\"\n									value=\""
    + alias4(((helper = (helper = helpers.FULLDUP || (depth0 != null ? depth0.FULLDUP : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"FULLDUP","hash":{},"data":data}) : helper)))
    + "\" />\n							</div>\n						</div>\n						<div class=\"div-table-row\">\n							<div class=\"div-table-col\">FRACK</div>\n							<input type=\"text\"\n								onchange=\"direwolf.adevices["
    + alias4(alias5((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "].channels["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].setFRACK(this.value)\"\n								value=\""
    + alias4(((helper = (helper = helpers.FRACK || (depth0 != null ? depth0.FRACK : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"FRACK","hash":{},"data":data}) : helper)))
    + "\" />\n						</div>\n					</div>\n					<div class=\"div-table-row\">\n						<div class=\"div-table-col\">FIX_BITS</div>\n						<div class=\"div-table-col\">\n							<div class=\"div-table\">\n								<div class=\"div-table-row\">\n									<div class=\"div-table-col\">EFFORT</div>\n									<div class=\"div-table-col\">\n										<select\n											onchange=\"direwolf.adevices["
    + alias4(alias5((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "].channels["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].FIX_BITS.setEFFORT(this.value)\">\n											<option value=\"0\"\n												"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || alias2).call(alias1,"0",((stack1 = (depth0 != null ? depth0.FIX_BITS : depth0)) != null ? stack1.EFFORT : stack1),{"name":"ifEquals","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">No\n												Attempt</option>\n											<option value=\"1\"\n												"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || alias2).call(alias1,"1",((stack1 = (depth0 != null ? depth0.FIX_BITS : depth0)) != null ? stack1.EFFORT : stack1),{"name":"ifEquals","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">Attempt\n												1 bit</option>\n											<option value=\"2\"\n												"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || alias2).call(alias1,"2",((stack1 = (depth0 != null ? depth0.FIX_BITS : depth0)) != null ? stack1.EFFORT : stack1),{"name":"ifEquals","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">Attempt\n												2 bits</option>\n										</select>\n									</div>\n									<div class=\"div-table-col\">SANITY</div>\n									<div class=\"div-table-col\">\n										<select\n											onchange=\"direwolf.adevices["
    + alias4(alias5((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "].channels["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].FIX_BITS.setSANITY(this.value)\">\n											<option value=\"APRS\"\n												"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || alias2).call(alias1,"APRS",((stack1 = (depth0 != null ? depth0.FIX_BITS : depth0)) != null ? stack1.SANITY : stack1),{"name":"ifEquals","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">APRS</option>\n											<option value=\"AX25\"\n												"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || alias2).call(alias1,"AX25",((stack1 = (depth0 != null ? depth0.FIX_BITS : depth0)) != null ? stack1.SANITY : stack1),{"name":"ifEquals","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">AX25</option>\n											<option value=\"NONE\"\n												"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || alias2).call(alias1,"NONE",((stack1 = (depth0 != null ? depth0.FIX_BITS : depth0)) != null ? stack1.SANITY : stack1),{"name":"ifEquals","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">NONE</option>\n										</select>\n									</div>\n									<div class=\"div-table-col\">PASSALL</div>\n									<div class=\"div-table-col\">\n										<select\n											onchange=\"direwolf.adevices["
    + alias4(alias5((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "].channels["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].FIX_BITS.setPASSALL(this.value);\">											\n											<option value=true "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.FIX_BITS : depth0)) != null ? stack1.PASSALL : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">Y</option>\n											<option value=false "
    + ((stack1 = helpers.unless.call(alias1,((stack1 = (depth0 != null ? depth0.FIX_BITS : depth0)) != null ? stack1.PASSALL : stack1),{"name":"unless","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">N</option>\n										</select>\n									</div>\n								</div>\n							</div>\n						</div>\n					</div>\n					<div class=\"div-table-row\">\n						<div class=\"div-table-col\">RETRY</div>\n						<div class=\"div-table-col\">\n							<input type=\"text\"\n								onchange=\"direwolf.adevices["
    + alias4(alias5((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "].channels["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].setRETRY(this.value)\"\n								value=\""
    + alias4(((helper = (helper = helpers.RETRY || (depth0 != null ? depth0.RETRY : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"RETRY","hash":{},"data":data}) : helper)))
    + "\" />\n						</div>\n					</div>\n					<div class=\"div-table-row\">\n						<div class=\"div-table-col\">PACLEN</div>\n						<div class=\"div-table-col\">\n							<input type=\"text\"\n								onchange=\"direwolf.adevices["
    + alias4(alias5((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "].channels["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].setPACLEN(this.value)\"\n								value=\""
    + alias4(((helper = (helper = helpers.PACLEN || (depth0 != null ? depth0.PACLEN : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"PACLEN","hash":{},"data":data}) : helper)))
    + "\" />\n						</div>\n					</div>\n					<div class=\"div-table-row\">\n						<div class=\"div-table-col\">MAXFRAME</div>\n						<div class=\"div-table-col\">\n							<input type=\"text\"\n								onchange=\"direwolf.adevices["
    + alias4(alias5((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "].channels["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].setMAXFRAME(this.value)\"\n								value=\""
    + alias4(((helper = (helper = helpers.MAXFRAME || (depth0 != null ? depth0.MAXFRAME : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"MAXFRAME","hash":{},"data":data}) : helper)))
    + "\" />\n						</div>\n					</div>\n					<div class=\"div-table-row\">\n						<div class=\"div-table-col\">EMAXFRAME</div>\n						<div class=\"div-table-col\">\n							<input type=\"text\"\n								onchange=\"direwolf.adevices["
    + alias4(alias5((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "].channels["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].setEMAXFRAME(this.value)\"\n								value=\""
    + alias4(((helper = (helper = helpers.EMAXFRAME || (depth0 != null ? depth0.EMAXFRAME : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"EMAXFRAME","hash":{},"data":data}) : helper)))
    + "\" />\n						</div>\n					</div>\n					<div class=\"div-table-row\">\n						<div class=\"div-table-col\">MAXV22</div>\n						<div class=\"div-table-col\">\n							<input type=\"text\"\n								onchange=\"direwolf.adevices["
    + alias4(alias5((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "].channels["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "].setMAXV22(this.value)\"\n								value=\""
    + alias4(((helper = (helper = helpers.MAXV22 || (depth0 != null ? depth0.MAXV22 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"MAXV22","hash":{},"data":data}) : helper)))
    + "\" />\n						</div>\n					</div>\n				</div>\n";
},"7":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=container.lambda, alias2=container.escapeExpression;

  return "						<div class=\"div-table-row\">\n							<div class=\"div-table-col text-right\">Value</div>\n							<div class=\"div-table-col\">\n								<input class=\"div-table-col\" type=\"text\" value=\""
    + alias2(alias1(depth0, depth0))
    + "\"\n									onchange=\"direwolf.adevices["
    + alias2(alias1((container.data(data, 2) && container.data(data, 2).index), depth0))
    + "].channels["
    + alias2(alias1((container.data(data, 1) && container.data(data, 1).index), depth0))
    + "].MODEM.setOption("
    + alias2(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data}) : helper)))
    + ",this.value)\" />\n							</div>\n						</div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "selected=\"selected\"";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<fieldset class=\"channel\">\n			<legend>"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + " - "
    + alias4((helpers.toUpperCase || (depth0 && depth0.toUpperCase) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0["constructor"] : depth0)) != null ? stack1.name : stack1),{"name":"toUpperCase","hash":{},"data":data}))
    + "</legend>\n			<div class=\"div-table\">\n"
    + ((stack1 = helpers.each.call(alias1,depth0,{"name":"each","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				<button type=\"button\"\n					onclick=\"direwolf.beacons.splice("
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + ",1);reloadDirewolf()\">Delete</button>\n				<button type=\"button\"\n					onclick=\"direwolf.addBeacon(direwolf.beacons["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "]);reloadDirewolf()\">Duplicate</button>\n			</div>\n		</fieldset>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.escapeExpression;

  return "				<div class=\"div-table-row\">\n					<div class=\"div-table-col\">"
    + alias1(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"key","hash":{},"data":data}) : helper)))
    + "</div>\n					<div class=\"div-table-col\">\n						<input type=\"text\" value=\""
    + alias1(container.lambda(depth0, depth0))
    + "\">\n					</div>\n				</div>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<fieldset class=\"channel\">\n			<legend>"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + " - "
    + alias4((helpers.toUpperCase || (depth0 && depth0.toUpperCase) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0["constructor"] : depth0)) != null ? stack1.name : stack1),{"name":"toUpperCase","hash":{},"data":data}))
    + "</legend>\n			<div class=\"div-table\">\n"
    + ((stack1 = helpers.each.call(alias1,depth0,{"name":"each","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				<button type=\"button\"\n					onclick=\"direwolf.digipeaters.splice("
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + ",1);reloadDirewolf()\">Delete</button>\n				<button type=\"button\"\n					onclick=\"direwolf.addDigipeater(direwolf.digipeaters["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "]);reloadDirewolf()\">Duplicate</button>\n			</div>\n		</fieldset>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<fieldset class=\"channel\">\n			<legend>"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + " - "
    + alias4((helpers.toUpperCase || (depth0 && depth0.toUpperCase) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0["constructor"] : depth0)) != null ? stack1.name : stack1),{"name":"toUpperCase","hash":{},"data":data}))
    + "</legend>\n			<div class=\"div-table\">\n"
    + ((stack1 = helpers.each.call(alias1,depth0,{"name":"each","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				<button type=\"button\"\n					onclick=\"direwolf.filters.splice("
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + ",1);reloadDirewolf()\">Delete</button>\n				<button type=\"button\"\n					onclick=\"direwolf.addFilter(direwolf.filters["
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "]);reloadDirewolf()\">Duplicate</button>\n			</div>\n		</fieldset>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\"tabs\">\n	<ul>\n		<li><a href=\"#tabs-1\">Soundcards</a></li>\n		<li><a href=\"#tabs-2\">Common</a></li>\n		<li><a href=\"#tabs-3\">Beacons</a></li>\n		<li><a href=\"#tabs-4\">Digipeaters</a></li>\n		<li><a href=\"#tabs-5\">Filters</a></li>\n	</ul>\n	<div id=\"tabs-1\">\n		<div>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.adevices : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n	</div>\n	<!-- tabs-1 -->\n\n\n	<div id=\"tabs-2\">\n		<div class=\"div-table\">\n			<div class=\"div-table-row\">\n				<div class=\"div-table-col\">AGWPORT</div>\n				<div class=\"div-table-col\">\n					<input type=\"number\" onchange=\"direwolf.setAGWPORT(this.value)\"\n						value=\""
    + alias4(((helper = (helper = helpers.AGWPORT || (depth0 != null ? depth0.AGWPORT : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"AGWPORT","hash":{},"data":data}) : helper)))
    + "\" />\n				</div>\n			</div>\n			<div class=\"div-table-row\">\n				<div class=\"div-table-col\">KISSPORT</div>\n				<div class=\"div-table-col\">\n					<input type=\"number\" onchange=\"direwolf.setKISSPORT(this.value)\"\n						value=\""
    + alias4(((helper = (helper = helpers.KISSPORT || (depth0 != null ? depth0.KISSPORT : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"KISSPORT","hash":{},"data":data}) : helper)))
    + "\" />\n				</div>\n			</div>\n			<div class=\"div-table-row\">\n				<div class=\"div-table-col\">DEDUPE</div>\n				<div class=\"div-table-col\">\n					<input type=\"number\" onchange=\"direwolf.setDEDUPE(this.value)\"\n						value=\""
    + alias4(((helper = (helper = helpers.DEDUPE || (depth0 != null ? depth0.DEDUPE : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"DEDUPE","hash":{},"data":data}) : helper)))
    + "\" />\n				</div>\n			</div>\n			<div class=\"div-table-row\">\n				<div class=\"div-table-col\">IGSERVER</div>\n				<div class=\"div-table-col\">\n					<input type=\"text\" onchange=\"direwolf.setIGSERVER(this.value)\"\n						value=\""
    + alias4(((helper = (helper = helpers.IGSERVER || (depth0 != null ? depth0.IGSERVER : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"IGSERVER","hash":{},"data":data}) : helper)))
    + "\" />\n				</div>\n			</div>\n			<div class=\"div-table-row\">\n				<div class=\"div-table-col\">IGLOGIN</div>\n				<div class=\"div-table-col\">\n					<input type=\"text\" onchange=\"direwolf.setIGLOGIN(this.value)\"\n						value=\""
    + alias4(((helper = (helper = helpers.IGLOGIN || (depth0 != null ? depth0.IGLOGIN : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"IGLOGIN","hash":{},"data":data}) : helper)))
    + "\" />\n				</div>\n			</div>\n			<div class=\"div-table-row\">\n				<div class=\"div-table-col\">IGTXLIMIT</div>\n				<div class=\"div-table-col\">\n					<input type=\"text\" onchange=\"direwolf.setIGTXLIMIT(this.value)\"\n						value=\""
    + alias4(((helper = (helper = helpers.IGTXLIMIT || (depth0 != null ? depth0.IGTXLIMIT : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"IGTXLIMIT","hash":{},"data":data}) : helper)))
    + "\" />\n				</div>\n			</div>\n			<div class=\"div-table-row\">\n				<div class=\"div-table-col\">LOGDIR</div>\n				<div class=\"div-table-col\">\n					<input type=\"text\" onchange=\"direwolf.setLOGDIR(this.value)\"\n						value=\""
    + alias4(((helper = (helper = helpers.LOGDIR || (depth0 != null ? depth0.LOGDIR : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LOGDIR","hash":{},"data":data}) : helper)))
    + "\" />\n				</div>\n			</div>\n		</div>\n	</div>\n\n	<div id=\"tabs-3\">\n		<div style=\"clear: both\">\n			<button type=\"button\"\n				onclick=\"direwolf.addBeacon(new Cbeacon());reloadDirewolf()\">New\n				CBEACON</button>\n			<button type=\"button\"\n				onclick=\"direwolf.addBeacon(new Ibeacon());reloadDirewolf()\">New\n				IBEACON</button>\n			<button type=\"button\"\n				onclick=\"direwolf.addBeacon(new Obeacon());reloadDirewolf()\">New\n				OBEACON</button>\n			<button type=\"button\"\n				onclick=\"direwolf.addBeacon(new Pbeacon());reloadDirewolf()\">New\n				PBEACON</button>\n			<button type=\"button\"\n				onclick=\"direwolf.addBeacon(new Tbeacon());reloadDirewolf()\">New\n				TBEACON</button>\n		</div>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.beacons : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n\n	<div id=\"tabs-4\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.digipeaters : depth0),{"name":"each","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n\n	<div id=\"tabs-5\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.filters : depth0),{"name":"each","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n</div>\n<script>\n  $( function() {\n    $( \"#tabs\" ).tabs();\n  } );\n</script>\n";
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