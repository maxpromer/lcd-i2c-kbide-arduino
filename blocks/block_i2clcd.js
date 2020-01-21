Blockly.Blocks['lcd_i2c_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("LCD1",null,["Plugin.LCD_I2C"],["Plugin.LCD_I2C"]),"instance")
        .appendField("Setup LCD address")
        .appendField(new Blockly.FieldTextInput("0x27"), "addr")
        .appendField("row")
        .appendField(new Blockly.FieldNumber(2, 1), "row")
        .appendField("column")
        .appendField(new Blockly.FieldNumber(16, 1), "col");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("Setup your LCD i2c");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lcd_i2c_print'] = {
  init: function() {
    this.appendValueInput("text")
        .appendField(new Blockly.FieldVariable("LCD1",null,["Plugin.LCD_I2C"],["Plugin.LCD_I2C"]),"instance")
        .setCheck(null)
        .appendField("Print text");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("print text on screen");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lcd_i2c_print_xy'] = {
  init: function() {
    this.appendValueInput("text")
        .appendField(new Blockly.FieldVariable("LCD1",null,["Plugin.LCD_I2C"],["Plugin.LCD_I2C"]),"instance")
        .setCheck(null)
        .appendField("Print text");
    this.appendValueInput("row")
        .setCheck(null)
        .appendField("at row");
    this.appendValueInput("col")
        .setCheck(null)
        .appendField("col");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("print text at row,col on screen");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lcd_i2c_set_cursor'] = {
  init: function() {
    this.appendValueInput("row")
        .appendField(new Blockly.FieldVariable("LCD1",null,["Plugin.LCD_I2C"],["Plugin.LCD_I2C"]),"instance")
        .setCheck(null)
        .appendField("set cursor at row");
    this.appendValueInput("col")
        .setCheck(null)
        .appendField("col");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("set cursor at row,col");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lcd_i2c_on_backlight'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("LCD1",null,["Plugin.LCD_I2C"],["Plugin.LCD_I2C"]),"instance")
        .appendField("turn on backlight");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("turn on backlight");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lcd_i2c_off_backlight'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("LCD1",null,["Plugin.LCD_I2C"],["Plugin.LCD_I2C"]),"instance")
        .appendField("turn off backlight");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("turn off backlight");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lcd_i2c_on_autoscroll'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("LCD1",null,["Plugin.LCD_I2C"],["Plugin.LCD_I2C"]),"instance")
        .appendField("auto scroll on");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("turn on autoscroll");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lcd_i2c_off_autoscroll'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("LCD1",null,["Plugin.LCD_I2C"],["Plugin.LCD_I2C"]),"instance")
        .appendField("auto scroll off");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("turn off autoscroll");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lcd_i2c_clear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("LCD1",null,["Plugin.LCD_I2C"],["Plugin.LCD_I2C"]),"instance")
        .appendField("clear screen");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("clear screen");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lcd_i2c_clear_xy'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("LCD1",null,["Plugin.LCD_I2C"],["Plugin.LCD_I2C"]),"instance")
        .appendField("clear");
    this.appendValueInput("row")
        .setCheck("Number")
        .appendField("row");
    this.appendValueInput("start")
        .setCheck("Number")
        .appendField("start position");
    this.appendValueInput("cnt")
        .setCheck("Number")
        .appendField("count");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("clear specify position");
 this.setHelpUrl("");
  }
};