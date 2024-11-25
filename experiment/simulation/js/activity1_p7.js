function activity1_p7() {
    let div_ele = document.createElement('div');
    let line_break = document.createElement('br');
    div_ele.setAttribute('class', 'collapse divide');
    div_ele.id = 'div-step-8';
    let btn_text = get_collapse_btn_element('Refer table for null hypothesis testing', 'div-step-8');
    div_ele.innerHTML = `
   
    <h5>We have the</h5>

    <div class="row" style='padding-left: 20px; padding-right: 20px;'>
        <div style='border: 1px solid black; border-radius: 7px;' class="col-4"> $$ t_{( \\frac{\\alpha h}{2}, n-2)} = $$ <input class="from-control" disabled value='${t_n_2.toFixed(3)}' /></div>
        <div style='border: 1px solid black; border-radius: 7px;' class="col-4">$$ S_{xx} = $$ <input class="from-control" disabled value='${sxx.toFixed(2)}' /></div>
        <div style='border: 1px solid black; border-radius: 7px;' class="col-4">$$ SS_{r} = $$ <input class="from-control" disabled value='${syy.toFixed(2)}' /></div>
    </div>

    <br>

    <p>To estimate the interval for mean response we need an error term which will be calculated by</p>

    <p>$$ y = (a + bx_{0}) \\pm \\ \\sqrt{\\frac{(n+1)SS_{R}}{n(n-2)}} t_{\\alpha_h, (n-2)}  $$</p>


    <p style='text-align: center;'><span style="display: inline-block;">$$ u = (a + bx_0) + \\sqrt{\\frac{(n+1)SS_{R}}{n(n-2)}} \\ t_{\\alpha_h, (n-2)} = $$</span> <input type="text" class="form-control" style='display: inline-block; width: 200px;' id='a17-inp1' ></p>


    <p style='text-align: center;'><span style="display: inline-block;">$$ l = (a + bx_0) - \\sqrt{\\frac{(n+1)SS_{R}}{n(n-2)}} \\ t_{\\alpha_h, (n-2)} = $$</span> <input type="text" class="form-control" style='display: inline-block; width: 200px;' id='a17-inp2' ></p>

    <br>

    <p style='color: red;'>Note: Take <span style='display: inline-block;' >$$ \\overline{x} $$</span> as the value for x<sub>0</sub></p>

    <br>

    <button class='btn btn-info' style='margin: auto;' onclick='verify_ul();' id='a17-last-btn' >Verify</button>

    <div id='act1-y-at-xavg' style='display: none;' id='a17-last-div'>
       <p>Estimated values of y in interval (l, u). So the value of y at <span style="display: inline-block;">$$ \\overline{x} $$</span> (mean value of x) is: (<input type="text" class="form-control" style='display: inline-block; width: 140px;' id='a17-inp3' >, <input type="text" class="form-control" style='display: inline-block; width: 140px;' id='a17-inp4' >)</p>

       <button class='btn btn-info' style='margin: auto;' onclick='verify_range();' id='a17-last-btn2' >Verify</button>

    </div>
        
    `;
    maindiv.appendChild(line_break);
    maindiv.appendChild(btn_text);
    maindiv.appendChild(div_ele);
    // load_hp_values();
    hide_all_steps();
    show_step('div-step-8');
    setTimeout(() => { MathJax.typeset(); }, 200);
    calculate_ul();
}
function calculate_ul() {
    let p = Math.sqrt(((N + 1) * ssr) / (N * (N - 2))) * t_n_2;
    calculated_u = (mat_x[1] + (mat_x[0] * X_avg)) + p;
    calculated_l = (mat_x[1] + (mat_x[0] * X_avg)) - p;
}
function verify_ul() {
    let val1 = document.getElementById('a17-inp1');
    let val2 = document.getElementById('a17-inp2');
    console.log(`u = ${calculated_u}`, `l = ${calculated_l}`);
    if (!verify_values(parseFloat(val1.value), calculated_u)) {
        alert('You have entered incorrect value of u. calculate and try again');
        return;
    }
    if (!verify_values(parseFloat(val2.value), calculated_l)) {
        alert('You have entered incorrect value of l. calculate and try again');
        return;
    }
    alert('Entered values are correct');
    val1.disabled = true;
    val2.disabled = true;
    val1.value = calculated_u.toFixed(3);
    val2.value = calculated_l.toFixed(3);
    let last_div = document.getElementById('act1-y-at-xavg');
    last_div.style.display = 'block';
    let btn = document.getElementById('a17-last-btn');
    btn.remove();
}
function verify_range() {
    let val1 = document.getElementById('a17-inp3');
    let val2 = document.getElementById('a17-inp4');
    console.log(`u = ${calculated_u}`, `l = ${calculated_l}`);
    if (!verify_values(parseFloat(val1.value), calculated_u)) {
        alert('You have entered incorrect value of u. calculate and try again');
        return;
    }
    if (!verify_values(parseFloat(val2.value), calculated_l)) {
        alert('You have entered incorrect value of l. calculate and try again');
        return;
    }
    alert('Entered values are correct');
    val1.disabled = true;
    val2.disabled = true;
    val1.value = calculated_u.toFixed(3);
    val2.value = calculated_l.toFixed(3);
    let btn = document.getElementById('a17-last-btn2');
    btn.remove();
    activity2();
}
//activity1_p7();
//# sourceMappingURL=activity1_p7.js.map