Blockly.JavaScript['lcd_i2c_init'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var text_addr = block.getFieldValue('addr');
  var number_row = block.getFieldValue('row');
  var number_col = block.getFieldValue('col');
  var code = `#EXTINC #include <LiquidCrystal_I2C.h> #END
#VARIABLE LiquidCrystal_I2C ${variable_instance}(${text_addr},${number_col},${number_row}); #END
${variable_instance}.init();
\n`;
  return code;
};

Blockly.JavaScript['lcd_i2c_print'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `${variable_instance}.print(String(${value_text}));\n`;
  return code;
};

Blockly.JavaScript['lcd_i2c_print_xy'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  var value_row = Blockly.JavaScript.valueToCode(block, 'row', Blockly.JavaScript.ORDER_ATOMIC);
  var value_col = Blockly.JavaScript.valueToCode(block, 'col', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `${variable_instance}.setCursor(${value_col},${value_row});
${variable_instance}.print(String(${value_text}));
\n`;
  return code;
};

Blockly.JavaScript['lcd_i2c_set_cursor'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var value_row = Blockly.JavaScript.valueToCode(block, 'row', Blockly.JavaScript.ORDER_ATOMIC);
  var value_col = Blockly.JavaScript.valueToCode(block, 'col', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_instance + '.setCursor('+value_col+','+value_row+');   \n';
  return code;
};

Blockly.JavaScript['lcd_i2c_on_backlight'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code = variable_instance + '.backlight();\n';
  return code;
};

Blockly.JavaScript['lcd_i2c_off_backlight'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code = variable_instance + '.noBacklight();\n';
  return code;
};

Blockly.JavaScript['lcd_i2c_on_autoscroll'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code = variable_instance + '.autoscroll();\n';
  return code;
};

Blockly.JavaScript['lcd_i2c_off_autoscroll'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code = variable_instance+'.noAutoscroll();\n';
  return code;
};

Blockly.JavaScript['lcd_i2c_clear'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code = variable_instance+'.clear();\n';
  return code;
};

Blockly.JavaScript['lcd_i2c_clear_xy'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var value_row = Blockly.JavaScript.valueToCode(block, 'row', Blockly.JavaScript.ORDER_ATOMIC);
  var value_start = Blockly.JavaScript.valueToCode(block, 'start', Blockly.JavaScript.ORDER_ATOMIC);
  var value_cnt = Blockly.JavaScript.valueToCode(block, 'cnt', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `${variable_instance}.clear(${value_row},${value_start},${value_cnt});\n`;
  return code;
};