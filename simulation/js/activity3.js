function activity3() {
    maindiv.innerHTML += `
        <br>
        <div class=' divide'>
            <div style='margin-top: 2vw;'>
                <h5 class="center-text fs-16px">Determine the slope of regression line contructed by the given dataset using hypothesis testing</h5>
                <br>
                <div class='fs-16px'>
                    <p>- Consider a linear model</p>
                    <p style='text-align: center;'>y2 = &alpha;2 + &beta;2x + &epsilon;2</p>
                    <p>- From the available n data points, we find the model <em>a + bx</em> , by requiring that the sum of squares of the residuals be minimized.
                    </p>
                    <p class='fs-16px'>- &alpha;2, &beta;2 and &epsilon;2 are population parameters, and a and b are random variables, computed from the sampled data.
                    </p>

                    <p>The equation below gives us range of y at <span style='display: inline-block;'>$$ x = x_{0} $$</span></p>
                    <p style='text-align: center;'><span style='display: inline-block;' >$$ y = (a + bx_{0}) \\pm \\sqrt{\\frac{(n+1)}{n} + \\frac{(x_{0} - \\overline{x})}{S_{xx}}} \\sqrt{\\frac{SS_{r}}{n-2}} t_{\\alpha_{h}, n-2} $$</span></p>
                </div>
                <button class='btn btn-info std-btn' style='position: relative; left: 38%;' onclick='start_act3();' id='temp-btn-4' >Step 1</button>
            </div>
        </div>
    `;
    //hide_all_steps();
}
function start_act3() {
    let btn = document.getElementById('temp-btn-4');
    btn.remove();
    let next_btn = get_collapse_btn_element('Calculate I and I<sub>max</sub>', 'act3-part-1');
    let div_ele = document.createElement('div');
    let line_break = document.createElement('br');
    div_ele.setAttribute('class', 'collapse divide fs-16px');
    div_ele.id = 'act3-part-1';
    div_ele.innerHTML = `

    <div>
        Estimated values of y in given interval at <span style="display: inline-block;">$$ \\overline{x} $$ </span> (mean value of x) is : 
    </div>
    <div style="text-align: center;">
    I = (<div style="display: inline-block; width: 150px;"><input class="form-control" id='act3-i1' type="text"></div>, <div style="display: inline-block; width: 150px;"><input  id='act3-i2' class="form-control" type="text"></div> )
    </div>

    <br>

    <div>
        Estimated values of y in interval at <span style="display: inline-block;">$$ x_{max} $$ </span> (mean valu of x) is : 
    </div>
    <div style="text-align: center;">
        I<sub>max</sub> = (<div style="display: inline-block; width: 150px;"><input class="form-control"  id='act3-i3' type="text"></div>, <div style="display: inline-block; width: 150px;"><input class="form-control"  id='act3-i4' type="text"></div> )
    </div>

    <div><button class='btn btn-info' id='a3-ver1' onclick='verify_a3_ver1();' >Verify</button></div>

    <div style='display: none;' id='a3-ver2-div'>
        <br>
        <div>Length of Interval I = <div style="display: inline-block; width: 150px;"><input class="form-control"  id='act3-i5' type="text"></div></div>
        <div>Length of Interval I<sub>max</sub> = <div style="display: inline-block; width: 150px;"><input class="form-control"  id='act3-i6' type="text"></div></div>
        <div><button class='btn btn-info' id='a3-ver2' onclick='verify_a3_ver2();' >Verify</button></div>

    </div>

   
    `;
    hide_all_steps();
    maindiv.appendChild(line_break);
    maindiv.appendChild(next_btn);
    maindiv.appendChild(div_ele);
    //load_act3_N_dd_values();
    show_step('act3-part-1');
    setTimeout(() => {
        MathJax.typeset();
    }, 200);
}
function calculate_i(num) {
    if (Number.isNaN(num)) {
        return [];
    }
    let n = X.length;
    let left = (mat_x[1] + (mat_x[0] * num));
    left -= Math.sqrt(((n + 1) / n) + ((num - X_avg) / sxx)) * Math.sqrt((ssr) / (n - 2)) * t2_n_2;
    let right = (mat_x[1] + (mat_x[0] * num));
    right += Math.sqrt(((n + 1) / n) + ((num - X_avg) / sxx)) * Math.sqrt((ssr) / (n - 2)) * t2_n_2;
    return [left, right];
}
function verify_a3_ver1() {
    let inp1 = document.getElementById('act3-i1');
    let inp2 = document.getElementById('act3-i2');
    let inp3 = document.getElementById('act3-i3');
    let inp4 = document.getElementById('act3-i4');
    act3_i = calculate_i(X_avg);
    act3_i_max = calculate_i(Math.max(...X));
    console.log('I values' + act3_i);
    console.log('I max values' + act3_i_max);
    //show_a3_p2();
    if (!verify_values(act3_i[0], parseFloat(inp1.value))) {
        alert("Lower value of I is incorrect! check again.");
        return;
    }
    if (!verify_values(act3_i[1], parseFloat(inp2.value))) {
        alert("Upper value of I is incorrect! check again.");
        return;
    }
    if (!verify_values(act3_i_max[0], parseFloat(inp3.value))) {
        alert("Lower value of I max is incorrect! check again.");
        return;
    }
    if (!verify_values(act3_i_max[1], parseFloat(inp4.value))) {
        alert("Upper value of I max is incorrect! check again.");
        return;
    }
    show_a3_p1_p2();
    return;
}
function show_a3_p1_p2() {
    let prev_btn = document.getElementById('a3-ver1');
    prev_btn.style.display = 'none';
    let ver_div = document.getElementById('a3-ver2-div');
    ver_div.style.display = 'block';
    //show_a3_p2();
}
function verify_a3_ver2() {
    let inp1 = document.getElementById('act3-i5');
    let inp2 = document.getElementById('act3-i6');
    length_i = act3_i[1] - act3_i[0];
    length_i_max = act3_i_max[1] - act3_i_max[0];
    console.log(`length of I = ${length_i} and length of I max = ${length_i_max}`);
    if (!verify_values(length_i, parseFloat(inp1.value))) {
        alert("Length of I is incorrect.");
        return;
    }
    if (!verify_values(length_i_max, parseFloat(inp2.value))) {
        alert("Length of I max is incorrect.");
        return;
    }
    show_a3_p2();
    console.log();
}
function show_a3_p2() {
    let prev_btn = document.getElementById('a3-ver2');
    prev_btn.style.display = 'none';
    let next_btn = get_collapse_btn_element('Ratio of length', 'act3-part-2');
    let div_ele = document.createElement('div');
    let line_break = document.createElement('br');
    div_ele.setAttribute('class', 'collapse divide fs-16px');
    div_ele.id = 'act3-part-2';
    div_ele.innerHTML = `
        <p>Ratio of Length I<sub>max</sub> and length of I: <p>
        <div>(length of I<sub>max</sub>) : (length of I) = 

            <div style="display: inline-block; width: 150px;">
                <input class="form-control"  id='act3-i7' type="text">
            </div>

            <div style='text-align: center;'><button class='btn btn-info' id='ver-3' onclick='verify_a3_ver3();'>Verify</button></div>
        </div>
        
    `;
    hide_all_steps();
    maindiv.appendChild(line_break);
    maindiv.appendChild(next_btn);
    maindiv.appendChild(div_ele);
    show_step('act3-part-2');
}
function verify_a3_ver3() {
    let inp1 = document.getElementById('act3-i7');
    length_ratio = length_i_max / length_i;
    console.log(`ratio = ${length_ratio}`);
    if (!verify_values(length_ratio, parseFloat(inp1.value))) {
        alert("Length of I is incorrect.");
        return;
    }
    show_a3_p3();
}
function show_a3_p3() {
    let prev_btn = document.getElementById('ver-3');
    prev_btn.style.display = 'none';
    let next_btn = get_collapse_btn_element('Question', 'act3-part-3');
    let div_ele = document.createElement('div');
    let line_break = document.createElement('br');
    div_ele.setAttribute('class', 'collapse divide fs-16px');
    div_ele.id = 'act3-part-3';
    let options = [`<span style='display: inline-block;' >The length of interval is least at <span style='display: inline-block;'>$$ x = \\overline{x} $$</span></span>`,
        `<span style='display: inline-block;' >The length of inteval is highest at <span style='display: inline-block;'>$$ x = \\overline{x} $$</span></span>
    `,
        `<span style='display: inline-block;'>No conclusion</span>`];
    let new_question = new Updated_Question(`What do you estimate about the interval of y at <span style='display: inline-block;'>$$ \\overline{x} $$</span>`, options, '1', div_ele, verify_a3_last);
    hide_all_steps();
    maindiv.appendChild(line_break);
    maindiv.appendChild(next_btn);
    maindiv.appendChild(div_ele);
    new_question.load_question();
    show_step('act3-part-3');
    setTimeout(() => {
        MathJax.typeset();
    }, 200);
}
function verify_a3_last() {
    alert('Well done your resposnse is correct.');
    hide_all_steps();
}
//activity3();
//# sourceMappingURL=activity3.js.map