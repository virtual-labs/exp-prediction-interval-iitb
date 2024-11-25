function activity2() {
    maindiv.innerHTML += `
        <br>
        <div class='divide'>
            <div style='margin-top: 2vw;'>
                <h5 class="center-text fs-16px">Find the Model a1 + b1x.</h5>

                <div class='fs-16px'>
                    <p>Consider the bi-quadratic model</p>
                    <p>y1 = &alpha;1 + &beta;1x + &epsilon;1</p>
                    <p>From the available n data points, we find the model a1 + b1x, by requiring that the sum of squares of the residuals be minimized.</p>
                    <p class='fs-16px'>&alpha; &beta; and &epsilon; are population parameters, and a1 and b1 are random variables, computed from the sampled data.
                    </p>
                </div>
                <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act2();' id='temp-btn-2' >Next</button>
            </div>
        </div>
    `;
}
function start_act2() {
    let btn = document.getElementById('temp-btn-2');
    btn.remove();
    let next_btn = get_collapse_btn_element('Generated Data', 'act2-part-1');
    let div_ele = document.createElement('div');
    let line_break = document.createElement('br');
    div_ele.setAttribute('class', 'collapse divide fs-16px');
    div_ele.id = 'act2-part-1';
    div_ele.innerHTML = `
    <div>
    <div class="row">
        <div class='col-4'>t<sub>(&alpha;h/2, n-2)</sub> = ${t_n_2.toFixed(4)}</div>

        <div class='col-4'>S<sub>xx</sub> = ${sxx.toFixed(4)}</div>

        <div class='col-4'>SS<sub>r</sub> = ${ssr.toFixed(4)}</div>
    </div>

    <p>We have the interval for mean response we need error term which will be calculated by: </p>

    <p><span>$$ y = (a + bx_0) \\ \\pm \\ \\sqrt{\\frac{(n+1)}{n} + \\frac{(x_0 - \\overline_{x})}{S_{xx}}} \\  \\sqrt{\\frac{SS_r}{n-2}} \\ t_{\\alpha_{h}, n-2} $$</span></p>

    <p style='text-align: center;'><span style="display: inline-block;">$$ u = (a + bx_0) \\ + \\ \\sqrt{\\frac{(n+1)}{n} + \\frac{(x_0 - \\overline_{x})}{S_{xx}}} \\ \\sqrt{\\frac{SS_r}{n-2}} \\ t_{\\alpha_{h}, n-2} = $$</span> <input style='display: inline-block; width: 18vw;' type="text" class="form-control" id='act2_inp1' ></p>

    <p style='text-align: center;'><span style="display: inline-block;">$$ l = (a + bx_0) \\ - \\ \\sqrt{\\frac{(n+1)}{n} + \\frac{(x_0 - \\overline_{x})}{S_{xx}}} \\ \\sqrt{\\frac{SS_r}{n-2}} \\ t_{\\alpha_{h}, n-2} = $$</span> <input style='display: inline-block; width: 18vw;' type="text" class="form-control" id='act2_inp2' ></p>

    <p style='color: red;'>Note: Take value of x<sub>0</sub> = maximum value in X matrix</p>

    <div style='text-align: center;'><button onclick='verify_act2();' class='btn btn-info' style='width: 200px;' id='act2-btn-1' >Verify</button></div>

    <br>

    <div id='act2-next-div' style='display: none;'>
    <p>Estimated values of y in interval (l,u). So value of y at x<sub>max</sub> (max. value of x) is: (<input style="display: inline-block; width: 100px;" type="text" id='act22-inp1'>, <input type="text" style="display: inline-block; width: 100px;" id='act22-inp2'>)</p>

    <div style='text-align: center;'><button id='next-btn-id' class='btn btn-info' style='width: 150px;' onclick='verify_act2_2();' >Verify</button></div>
    </div>
</div>

<div style='text-align: center;'><button id='next-btn2-id' class='btn btn-info' style='display: none; width: 150px;' onclick='activity3();'>Next</button></div>
    </div>
    `;
    hide_all_steps();
    maindiv.appendChild(line_break);
    maindiv.appendChild(next_btn);
    maindiv.appendChild(div_ele);
    show_step('act2-part-1');
    //load_act2_N_dd_values();
    setTimeout(() => { MathJax.typeset(); }, 200);
    calculate_act2_u_l();
}
function verify_act2() {
    let val1 = document.getElementById('act2_inp1');
    let val2 = document.getElementById('act2_inp2');
    let btn = document.getElementById('act2-btn-1');
    console.log(`u = ${act2_calculated_u} and l = ${act2_calculated_l}`);
    if (!verify_values(parseFloat(val1.value), act2_calculated_u)) {
        alert('u value is incorrect!! calculate again');
        return;
    }
    if (!verify_values(parseFloat(val2.value), act2_calculated_l)) {
        alert('l value is incorrect!! calculate again');
        return;
    }
    btn.remove();
    val1.disabled = true;
    val2.disabled = true;
    let next_div = document.getElementById('act2-next-div');
    next_div.style.display = 'block';
}
function calculate_act2_u_l() {
    act2_calculated_u = (mat_x[1] + (mat_x[0] * X[X.length - 1])) + (Math.sqrt(((N + 1) / N) + ((X[X.length - 1] - X_avg) / (sxx))) * Math.sqrt(ssr / (N - 2)) * t2_n_2);
    act2_calculated_l = (mat_x[1] + (mat_x[0] * X[X.length - 1])) - (Math.sqrt(((N + 1) / N) + ((X[X.length - 1] - X_avg) / (sxx))) * Math.sqrt(ssr / (N - 2)) * t2_n_2);
}
function verify_act2_2() {
    let val1 = document.getElementById('act22-inp1');
    let val2 = document.getElementById('act22-inp2');
    let btn = document.getElementById('next-btn-id');
    console.log(`u = ${act2_calculated_u} and l = ${act2_calculated_l}`);
    if (!verify_values(parseFloat(val1.value), act2_calculated_l)) {
        alert('u value is incorrect!! calculate again');
        return;
    }
    if (!verify_values(parseFloat(val2.value), act2_calculated_u)) {
        alert('l value is incorrect!! calculate again');
        return;
    }
    btn.remove();
    alert('Entered values are correct!!');
    val1.disabled = true;
    val2.disabled = true;
    let btn2 = document.getElementById('next-btn2-id');
    btn2.style.display = 'block';
}
//activity2();
//# sourceMappingURL=activity2.js.map