V = 219;     //values changes
I0 = 3.6;    //values changes
Ia2 = 6;     //values changes
If1 = 0.6;   //values changes
If2 = 0.89;  //values changes

// Calaculation

Ra1 = 0.96;
console.log(Ra1);
Ia1 = I0 + Ia2;
console.log("Ia1 = " + Ia1);
total_input = V * I0;
console.log("total input = " + total_input);
armature_cu_loss = Math.pow(Ia1, 2) * Ra1 + Math.pow(Ia2, 2) * Ra1;
console.log("armature cu loss = " + armature_cu_loss);
W0 = V * I0 - armature_cu_loss;
console.log("W0(core loss) = " + W0);
each_machine = W0 / 2;
console.log("each machine W0/2 (core loss) = " + each_machine);
// generator
console.log("---------------------------Generator-------------------")
rated_gen_v = 220;    //values changes
g_output = rated_gen_v * Ia2;
console.log("generator output = " + g_output);
g_input =
  each_machine + rated_gen_v * Ia2 + Math.pow(Ia2, 2) + rated_gen_v * If2;
console.log("generator input =" + g_input);
g_efficiency = (g_output / g_input) * 100;
console.log("generator efficiency = " + g_efficiency);
//motor
console.log("---------------------------Motor-----------------------")
rated_motor_v = 220;   //values changes
motorInput = rated_motor_v * (Ia1 + If1);
console.log("Motor input  = " + motorInput);
motorLoss = each_machine + rated_motor_v * If1 + Math.pow(Ia1, 2) * Ra1;
console.log("Motor Loss = " + motorLoss);
m_efficiency = ((motorInput - motorLoss) / motorInput) * 100;
console.log("motor efficiency = " + m_efficiency);
