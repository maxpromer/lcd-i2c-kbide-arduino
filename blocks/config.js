module.exports = [
	{
		name : "Liquid Crystal I2C",
		blocks : [
			"lcd_i2c_init", 
			{
				xml:
            	   `<block type="lcd_i2c_print">
                        <value name="text">
                            <shadow type="basic_string">
                                <field name="VALUE">Hello world!</field>
                            </shadow>
                        </value>
                    </block>`
			}, 
			{
				xml:
            	   `<block type="lcd_i2c_print_xy">
                        <value name="text">
                            <shadow type="basic_string">
                                <field name="VALUE">Hello world!</field>
                            </shadow>
                        </value>
                        <value name="row">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="col">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                    </block>`
			},
			{
				xml:
            	   `<block type="lcd_i2c_set_cursor">
                        <value name="row">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="col">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                    </block>`
			},
			"lcd_i2c_on_backlight", 
			"lcd_i2c_off_backlight", 
			"lcd_i2c_on_autoscroll", 
			"lcd_i2c_off_autoscroll",
            "lcd_i2c_clear",
            {
                xml : `<block type="lcd_i2c_clear_xy">
                        <value name="row">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="start">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="cnt">
                            <shadow type="math_number">
                                <field name="NUM">255</field>
                            </shadow>
                        </value>
                    </block>`
            }
		]
	}	
];