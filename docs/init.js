window.addEventListener('load', () => {

    // Example 1
    const jogDialOneElement = document.getElementById('jog_dial_one');
    const jd1 = new JogDial(jogDialOneElement,
        {wheelSize: '200px', knobSize: '70px', minDegree: 0, maxDegree: 360, degreeStartAt: 0});

    jd1.set(100);

    jogDialOneElement.addEventListener('jogdial.update', e => {
        document.querySelector('#jog_dial_one_meter div').style.setProperty('width', Math.round((e.detail.rotation / 360) * 100) + '%')
    });

    const jogDialTwoElement = document.getElementById('jog_dial_two');

    const jd2 = new JogDial(jogDialTwoElement,
        {debug: true, wheelSize: '260px', knobSize: '100px', degreeStartAt: 0});

    jd2.set(100);


    jogDialTwoElement.addEventListener('jogdial.update', e => {
        document.getElementById('jog_dial_two_meter').textContent = 'Rotation:' + Math.round(e.detail.rotation) + ' / Degree: ' + Math.round(e.detail.degree);
    });
    // document.querySelector('.dial:nth-child(2)').style.setProperty('opacity',0);

    //Example swap buttons
    document.querySelector('.btn-group').addEventListener('click', (e) => {
        const btn = e.target;

        document.querySelectorAll('.dial').forEach((item, i) => {
            item.classList.toggle('hidden', i !== parseInt(btn.dataset.dial))
            document.querySelectorAll('.btn-group .btn')[i].classList.toggle('active', i === parseInt(btn.dataset.dial));

        });
    });
})
